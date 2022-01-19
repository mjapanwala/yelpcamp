const express = require("express");
const router = express.Router();
const profile = require("../models/Profile");
const {verifyJWT} = require("../middleware/jwt");





router.get("/login", verifyJWT,async (req, res) => {
    console.log('fasf')
});
// router.post('/me', verifyJWT, (req, res) => {
//      res.send("fsadf")
//  })

 module.exports = router;



