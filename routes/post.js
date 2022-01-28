const express = require("express");
const { verifyJWT } = require("../middleware/jwt");
const Post = require("../models/Post")
const router = express.Router()


// router.get('/', res.send("Heehee"))

router.post('/', verifyJWT, async (req, res) => {
    const {name, text, likes, comments } = req.body;
    const newPost = {
        name,
        text,
    }
    try {
    const postRequest = await new Post(newPost)
    postRequest.likes.unshift({
    user: req.user
    })
    postRequest.comments.unshift({
    user: req.user,
    text,
    name,
    })
     await postRequest.save()
     res.status(200).json({newPost: postRequest})
    } catch (error) {
    console.log(error.message);
    console.log(error.name);
    }   
})

router.get("/:id", verifyJWT, async (req, res) => {
    const user = req.user
    console.log(typeof user. req.user)
    // const {id} = req.params;
    // try {
    //     const findPost = await Post.findById({id:user});
    //     res.status(200).json({post: findPost});

    // } catch (error) {
    //     console.error(error.message)
    //     console.log(error.name)
    // }
    
    
})

router.delete("/:id",verifyJWT, (req, res) => {

})

module.exports = router;