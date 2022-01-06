const express = require("express")
const router = express.Router()
const users = require("../controllers/User")

router.get("/newuser", users.findAll)
router.get("/newuser/:id", users.findSpecificUser)
router.post("/newuser", users.postUser);


module.exports = router;