const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const User = require("../models/User");
const {verifyJWT} = require("../middleware/jwt");
const mongoose = require("mongoose")
const { ObjectId } = require('mongodb');
// mongoose.Types.ObjectId
router.get("/", verifyJWT, async (req, res) => {
    const getProfile = await Profile.findOne({user: req.user});
    // .populate("user", ["username", "email"]);
    res.json({getProfile})
    
});
router.post('/me', verifyJWT, async(req, res) => {
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

 module.exports = router;



