const express = require("express")
const router = express.Router()
const users = require("../controllers/User")

router.get('/', users.findAll);

router.post("/newUser", users.postUser);


// router.delete("/removeUser")
// router.post('/newUser', users.postUser)



module.exports = router;