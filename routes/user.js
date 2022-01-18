const express = require("express")
const router = express.Router()
const users = require("../controllers/User")
const methodOverride = require("method-override")
const {hashpassword} = require("../password");
const {verifyJWT} = require("../middleware/jwt")
const Users = require("../models/User");
const { findById } = require("../models/User");
const app = express()

app.use(express.urlencoded({extended:true}))

app.use(methodOverride("_method"));


router.get("/newuser/:id", users.findSpecificUser);


router.delete("/newuser/delete/:id", users.deleteUser);


router.post("/newuser", users.register);
router.post("/login",verifyJWT, users.login);

router.get("/login",verifyJWT, async (req, res) => {
    try {
    const user = await Users.findById(req.user).select("-password");
    res.json({user})
    }catch(err) {
        console.error(err.message);
        res.status(500).send("server error")
    }
})

router.put("/newuser/edit/:id", users.editUser);

module.exports = router;