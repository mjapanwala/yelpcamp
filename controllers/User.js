const User = require("../models/User");
const connection = require("../database");
const { findByIdAndUpdate, findById } = require("../models/User");
const {hashpassword} = require("../middleware/password");
const {verifyJWT, signJWT} = require("../middleware/jwt");
const bcrypt = require("bcrypt");
const { append } = require("vary");
const flash = (require("flash")())
const jwt = require('jsonwebtoken');



    async function register(req, res, next) {
    const {username, password, email} = req.body;
    if (username && password && email) {
        const hashedPassword = await hashpassword(password);
        if (hashedPassword) {
            
            const registerUser = new User({
                username,
                password:hashedPassword,
                email
            })
           await registerUser.save()
           
        const sign  = await signJWT(registerUser)
        console.log(sign, "sign")
        }
    }     
    }
  
    async function login(req, res) {
        const {username, password} = req.body;
        const payload = {
            username
        }   
       const findUser = await User.findOne({username})
       if (findUser) {
       const compare = await bcrypt.compare(password,findUser.password);
       if (compare) {
           signJWT(payload);
           
       }
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
        login,
        register,
        findSpecificUser,
        editUser,
        deleteUser,
    }

