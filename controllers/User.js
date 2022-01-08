const User = require("../models/User");
const connection = require("../database");
const { findByIdAndUpdate, findById } = require("../models/User");
const {hashpassword} = require("../password");

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
        const hashedPassword = await hashpassword(req.body.password, req.body.password);
        res.redirect("/newuser")
        // try {
        //     const firstUser = await User({
        //         username: req.body.username,
        //         password: req.body.password
        //     })
        //       await firstUser.save()
            
        // res.render("../views/login" ,{firstUser})
        // }
        // catch (e) {
        //     console.log(e)
        // }   
    }

async function findSpecificUser(req, res) {
    const {id} = req.params;
    const update = await User.findById(id);
    res.render("../views/edit", {update, id});
}


async function editUser(req, res) {
   const {id} = req.params;
   const find = await User.findById(id);
    const update = await User.findByIdAndUpdate(id,req.body);
    const findAgain = await User.findById(id);
    res.render("../views/editedUser", {update});
}
  
async function deleteUser(req, res) {
const {id} = req.params;
const deleteId = await User.findByIdAndDelete(id);
const find = findById(id);
res.redirect("/user/newUser")
console.log(deleteId, find)
}

    module.exports = {
        findAll,
        postUser,
        findSpecificUser,
        editUser,
        deleteUser
    }

