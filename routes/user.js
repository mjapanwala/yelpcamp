const express = require("express")
const router = express.Router()
const users = require("../controllers/User")
const methodOverride = require("method-override")

const app = express()
app.use(methodOverride("_method"))
router.get("/newuser", users.findAll)
router.get("/newuser/:id", users.findSpecificUser);
router.put("/newuser/edit/:id", users.editUser);
// router.delete("/newuser/edit/:id", users.deleteUser);
router.post("/newuser", users.postUser);


module.exports = router;