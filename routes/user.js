const express = require("express")
const router = express.Router()
const users = require("../controllers/User")
const methodOverride = require("method-override")
const {hashpassword} = require("../password")
const app = express()


app.use(methodOverride("_method"));

// router.get("/newuser", users.findAll)
// router.get("/newuser/:id", users.findSpecificUser);
router.get("/welcome", users.greet)
router.get("/register", users.registering)

// router.delete("/newuser/delete/:id", users.deleteUser);


router.post("/newuser", users.register);
// router.post("/login", users.login)

// router.put("/newuser/edit/:id", users.editUser);


module.exports = router;