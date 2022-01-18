const User = require("../models/User");
const connection = require("../database");
const { findByIdAndUpdate, findById } = require("../models/User");
const {hashpassword} = require("../password");
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
             registerUser = new User({
                username,
                password:hashedPassword,
                email
            })
        await registerUser.save()
            const payload = {
                user: {
                    id: registerUser.id
                }
            }
        const sign = await signJWT(payload); 
        res.status(200).json(sign)
        }
        
    }
        async function signJWT(payloads) {
            try {
                return jwt.sign(payloads, process.env.secret_key, { expiresIn: 36000});
            }
            catch(err) {
                console.log(err)
            }
        }
        }

    
    
  
    async function login(req, res) {
        const rejection = res.status(401).json({msg: "Invalid Credentials"})
        const {username, password} = req.body;  
       const findUser = await User.findOne({username})
       if (!findUser) {
           return rejection
       }
       if (findUser) {
           const compare = await bcrypt.compare(password, findUser.password);
           if (!compare) {
               return rejection
           }
       }
    //    const payload = {
    //        user: decoded.id
    //    }
       console.log(req.user)
    // jwt.sign(payload, process.env.secret_key)
    // res.send("you dont have an account")
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

