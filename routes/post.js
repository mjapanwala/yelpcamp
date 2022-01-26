const express = require("express");
const { verifyJWT } = require("../middleware/jwt");
const Post = require("../models/Post")
const router = express.Router()


// router.get('/', res.send("Heehee"))

router.post('/post', verifyJWT, async (req, res) => {
    const {name, text, likes, comments } = req.body;
    const newPost = {
        name,
        text, 
        likes, 
        comments
    }
    console.log(name, text, likes, comments);
    const postRequest = await new Post(newPost)
    await postRequest.save()
    console.log("Saved")
})

module.exports = router;