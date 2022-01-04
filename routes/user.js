const express = require("express")
const router = express.Router()
const users = require("../controllers/User")

router.get('/', users.findAll)

router.get('/two', (req, res) => {
    res.send("Hello this is the two login page")
})
router.get('/three', (req, res) => {
    res.send("Hello this is the three login page")
})
router.get('/four', (req, res) => {
    res.send("Hello this is the four login page")
})

router.post('/admins', (req, res) => {
    res.send("You have gotten into the admin page")
})


module.exports = router;