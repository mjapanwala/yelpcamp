const User = require("../models/User");
const connection = require("../database");


    async function findAll (req, res)  {
        try {     
        const getUsers = await User.find({})
        res.render("../views/login", getUsers)
        }
        catch (e) {
            console.log(e)
        }   
    }
  

  
    async function postUser(req, res) {
        try {
            const firstUser = await User({
                username: req.body.username,
                password: req.body.password
            })
              await firstUser.save()
              console.log(firstUser)
        res.render("../views/users" ,{firstUser})
        }
        catch (e) {
            console.log(e)
        }   
    }
  
    module.exports = {
        findAll,
        postUser
    }

