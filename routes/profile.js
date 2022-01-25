const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const User = require("../models/User");
const {verifyJWT} = require("../middleware/jwt");
const mongoose = require("mongoose")
const { ObjectId } = require('mongodb');
const { findOneAndDelete, findById } = require("../models/User");
// mongoose.Types.ObjectId


router.get("/", async (req, res) => {
    const getProfile = await Profile.find({})
    .populate("user", ["username", "email"]);
    res.json({getProfile})
    
});


router.get("/:id", verifyJWT, async(req, res) => {
    try {
        const getUserProfile = await Profile.findOne({user: req.params.id});
        if (getUserProfile) res.json({getUserProfile});
        if (!getUserProfile) {
            return res.send("didnt work")
        }
    } catch(e) {
        res.status(500).json({msg: "No User with that Id"});
        console.log(e)
    }
 
})

router.delete("/", verifyJWT, async(req, res) => {
         await Profile.findOneAndDelete({user: req.user});
         res.send("User deleted "+ req.user)
})


router.post('/', verifyJWT, async(req, res) => {
    //Extract the body
    const {company,website,location,status, skills, bio} = req.body;
    //Create an empty object to put all properties in.
    const userProfile = {};
    userProfile.user = req.user;
    if (company) userProfile.company = company;
    if (website) userProfile.website = website;
    if (location) userProfile.location = location;
    if (status) userProfile.status = status;
    if (skills) userProfile.skills = skills;
    if (bio) userProfile.bio = bio;
    // Save it 
    const user = new Profile(userProfile);
    user.save()
    // Find it 
    const getProfile = await Profile.findOne({user: userProfile.user});
    if (getProfile) {
        res.json({getProfile})
    }
     else {
         res.status(500).json({getProfile})
     }

 })

router.delete("/experience/:id", verifyJWT, async(req, res) => {
    try {
        const findProfile = await Profile.findOne({user:req.user});
        const {id} = req.params.id;
        const removeIndex = findProfile.experience.map((item, index) => {
             item.id 
           }).indexOf(id);
        findProfile.experience.splice(removeIndex,1);
        await findProfile.save()
        res.send("deleted");
    } catch (error) {
        res.status(error.message).json(({msg: "Error"}))
    }
 
   
})





 router.put("/experience",verifyJWT, async(req,res) => {
    const {title, company, location} = req.body;
    const updateObject = {
        title,
        company,
        location
    }
     const findProfile = await Profile.findOne({user: req.user});   
        findProfile.experience.unshift(updateObject)
  
     await findProfile.save()

    res.json({user: findProfile})
 })

router.delete("/education/:id", verifyJWT, async(req, res) => {
    const {id} = req.params.id;
    const findProfile = await Profile.findOne(({user: req.user}))
    if (findProfile.education) {
        findProfile.education.map((item) => {
            item
        }).indexOf(id)
    }
    findProfile.education.splice(id, 1);
    await findProfile.save()
    res.send("Deleted")
})


 router.put("/education", verifyJWT, async(req,res) => {
     const {elementary, university} = req.body;
     const educationObject = {
        elementary,
        university
     }
     try {
        const findProfile = await Profile.findOne({user: req.user});  
        findProfile.education.unshift(educationObject);
        await findProfile.save();
        res.send("Added ")
     } catch (error) {
        res.status(500).json({msg: error.message}) 
     }
     

 })

 module.exports = router;



