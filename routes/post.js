const express = require("express");
const { verifyJWT } = require("../middleware/jwt");
const Post = require("../models/Post")
const router = express.Router()


// router.get('/', res.send("Heehee"))
//Likes
router.put("/like/:id", verifyJWT, async(req, res) => {
    const {id} = req.params;
    const userId = req.user;
    const getPost = await Post.findById(id)
    //Check if like already is there by the user
  if (getPost.likes.filter(likes => likes.user.toString() === userId).length > 0) {
    res.send("Post has already been liked")
  } else if (getPost.likes.filter(likes => likes.user.toString() === userId).length === 0) {
    getPost.likes.push({
        user: iserId,
        count: 1
    })
   await getPost.save()
  }
})
//unlike
router.put("/unlike/:id", verifyJWT, async(req, res) => {
    const {id} = req.params;
    const userId = req.user;
    const getPost = await Post.findById(id)
    //Check if like already is there by the user
  if (getPost.likes.filter(likes => likes.user.toString() === userId).length === 0) {
    res.send("Post has not been liked yet")
  } else {
  const removeIndex = getPost.likes.map(item => item.user).indexOf(userId);
  getPost.likes.splice(removeIndex, 1)
  await getPost.save()
  res.json({getPost})
  }
  }
)
//Comments
//Create a comment
router.put("/comment", verifyJWT, async(req, res) => {
    const userId = req.user;
    const getPost = await Post.findById({})
    if (getPost) res.send(getPost);
    //Check if user has already commented
    console.log(getPost)
})

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


router.get('/', verifyJWT, async (req, res) => {
    const allPosts = await Post.find({})
    if (allPosts) res.status(200).json({success: allPosts})
})

router.get("/:id", verifyJWT, async (req, res) => {
    const {id} = req.params;  
    try {
        const findPost = await Post.findById(id);
        res.status(200).json({post: findPost});

    } catch (error) {
        console.error(error.message)
        console.log(error.name)
    }    
})

router.delete("/:id",verifyJWT, async(req, res) => {
    const {id} = req.params;
    try {
        const deletePost = await Post.findByIdAndDelete(id);
        if (deletePost) console.log(deletePost);
        await deletePost.remove()
        res.status(200).send("Post deleted")
    } catch (error) {
        
    }
})

module.exports = router;