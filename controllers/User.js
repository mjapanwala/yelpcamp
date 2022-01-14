const User = require("../models/User");
const connection = require("../database");
const { findByIdAndUpdate, findById } = require("../models/User");
const {hashpassword} = require("../password");
const bcrypt = require("bcrypt");
const session = require("express-session");
const router = require("../routes/user");
const { append } = require("vary");
const flash = (require("flash")())
const jwt = require('jsonwebtoken');


    async function register(req, res, next) {
        console.log(process.env.secret_key)
    // const {username, password, email} = req.body;
    // const payload = {
    //     username,
    //     password,
    //     email
    // }
    // const privateKey = "hi"
    //     const tokens = jwt.sign(payload, privateKey, { expiresIn: 3600}, (err, token) => {
    //         res.json(token);
    //     } )
       
        // console.log(tokens)
        // const hashedPassword = await hashpassword(req.body.password, req.body.password);
        // req.flash("success", "successfully made a new user")
        // res.redirect("/user/welcome")
         
    }

    async function getlogin (req, res)  {
        
    }
  
 

    async function login(req, res) {
       const {username, password} = req.body;
    //    const allUsers = await User.find({})
       const findUser = await User.findOne({username})
       if (findUser) {
       const compare = await bcrypt.compare(password,findUser.password);
       console.log(compare)
    }
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

  // async function findAll (req, res)  {
    //     const {username = "joe"} = req.query;
    //     req.session.username = username;
    //     req.session.count = 10;
    //     res.render("../views/login")
    // }

   

    //  const greet = (req,res) => {
    //     res.render("../views/welcome")
    // }

    //  function registering (req, res) {
    //     res.render("../views/register")
    // }


    module.exports = {
        // findAll,
        login,
        register,
        // registering,
        findSpecificUser,
        editUser,
        deleteUser,
        getlogin,
        // greet
    }

