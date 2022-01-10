const User = require("../models/User");
const connection = require("../database");
const { findByIdAndUpdate, findById } = require("../models/User");
const {hashpassword} = require("../password");
const bcrypt = require("bcrypt");
const session = require("express-session")
const flash = (require("flash")())
// const session = require("express-session")

    // async function findAll (req, res)  {
    //     const {username = "joe"} = req.query;
    //     req.session.username = username;
    //     req.session.count = 10;
    //     res.render("../views/login")
    // }

    async function greet(req,res) {
        res.render("../views/welcome", {messages: req.flash("success")})
    }

    async function registering (req, res) {
        res.render("../views/register")
    }

    async function register(req, res) {
        // const hashedPassword = await hashpassword(req.body.password, req.body.password);
        req.flash("success", "successfully made a new user")
        res.redirect("/user/welcome")
         
    }

    // async function getlogin (req, res)  {
    //     try {     
    //     const getUsers = await User.find({});

    //     res.render("../views/login", {getUsers})
     
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }   
    // }
  
 

    // async function login(req, res) {
    //    const {username, password} = req.body;
       
    // //    const allUsers = await User.find({})
    //    const findUser = await User.findOne({username})
    //    if (findUser) {
    //    const compare = await bcrypt.compare(password,findUser.password);
    //    if (compare) {
    //     //  req.session.user_id = findUser._id;
    //      res.send("it exists") 
    //    }
    //    }
    //    if (!findUser) {
    //        res.send("User doesnt exist")
    //    }
       

       
      

        // const compare = bcrypt.compare()
    // }

// async function findSpecificUser(req, res) {
//     const {id} = req.params;
//     const update = await User.findById(id);
//     res.render("../views/edit", {update, id});
// }


// async function editUser(req, res) {
//    const {id} = req.params;
//    const find = await User.findById(id);
//     const update = await User.findByIdAndUpdate(id,req.body);
//     const findAgain = await User.findById(id);
//     res.render("../views/editedUser", {update});
// }
  
// async function deleteUser(req, res) {
// const {id} = req.params;
// const deleteId = await User.findByIdAndDelete(id);
// const find = findById(id);
// res.redirect("/user/newUser")
// console.log(deleteId, find)
// }

    module.exports = {
        // findAll,
        // login,
        register,
        registering,
        // findSpecificUser,
        // editUser,
        // deleteUser,
        // getlogin,
        greet
    }

