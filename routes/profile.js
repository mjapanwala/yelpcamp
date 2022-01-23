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

 router.put("/education",verifyJWT, async(req,res) => {
    const {title, company, location} = req.body;
    const updateObject = {
        title,
        company,
        location
    }
     const findProfile = await Profile.findOne({user: req.user});
     if (findProfile.experience) {
         findProfile.experience = []
     }
     findProfile.experience.unshift(updateObject)

    res.json({user: findProfile})
 })

 module.exports = router;



