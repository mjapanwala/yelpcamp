const User = require("../models/User")
console.log(User)


module.exports = {
    findAll: async(req, res) => {
        try {
        const firstUser = await User.insert({
            username: "joejoe",
            password: "fdsaf"
        })
        firstUser.save()
        const getUsers = await User.find({})
        console.log(firstUser, getUsers)
        res.render("../views/home", getUsers)
        }
        catch (e) {
            throw Error("Didnt work")
        }   
    }
  }