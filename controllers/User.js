const User = require("../models/User");
const connection = require("../database");
const { findByIdAndUpdate, findById } = require("../models/User");
const {hashpassword} = require("../password");
const bcrypt = require("bcrypt")

    async function findAll (req, res)  {
        try {     
        const getUsers = await User.find({});

        res.render("../views/register", {getUsers})
     
        }
        catch (e) {
            console.log(e)
        }   
    }
    async function getlogin (req, res)  {
        try {     
        const getUsers = await User.find({});

        res.render("../views/login", {getUsers})
     
        }
        catch (e) {
            console.log(e)
        }   
    }
  
    async function register(req, res) {
        const hashedPassword = await hashpassword(req.body.password, req.body.password);
        res.redirect("/user/newuser") 
    }

    async function login(req, res) {
       const {username, password} = req.body;
    //    const allUsers = await User.find({})
       const findUser = await User.findOne({username})
       if (findUser) {
       const compare = await bcrypt.compare(password,findUser.password);
       compare? res.send("it exists") : res.send("it doesnt exist");
       }
       if (!findUser) {
           res.send("User doesnt exist")
       }
       

       
      

        // const compare = bcrypt.compare()
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
        login,
        register,
        findSpecificUser,
        editUser,
        deleteUser,
        getlogin
    }

