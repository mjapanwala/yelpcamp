const express = require("express")
const router = express.Router()
const users = require("../controllers/User")
const methodOverride = require("method-override")
const {hashpassword} = require("../middleware/password");
const {verifyJWT} = require("../middleware/jwt")
const app = express()

app.use(express.urlencoded({extended:true}))

app.use(methodOverride("_method"));


router.get("/newuser/:id", users.findSpecificUser);


router.delete("/newuser/delete/:id", users.deleteUser);


router.post("/newuser", users.register);
router.post("/login",verifyJWT, users.login);
router.get("/login",verifyJWT, (req, res) => res.send("You have a jwt token"))

router.put("/newuser/edit/:id", users.editUser);

module.exports = router;