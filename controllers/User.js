const User = require("../models/User");
const connection = require("../database");
const { findByIdAndUpdate, findById } = require("../models/User");


    async function findAll (req, res)  {
        try {     
        const getUsers = await User.find({});

        res.render("../views/users", {getUsers})
     
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
            
        res.render("../views/users" ,{firstUser})
        }
        catch (e) {
            console.log(e)
        }   
    }

async function findSpecificUser(req, res) {
    const {id} = req.params;
    const update = await User.findById(id);
    res.render("../views/edit", {update, id});

}
  
    module.exports = {
        findAll,
        postUser,
        findSpecificUser
    }

