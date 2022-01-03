const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
const models = require("./models/campground.js");
const user = require("./models/User.js");
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");


app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
 mongoose.connect('mongodb://localhost:27017/yelp-camp')
 .catch(err => {console.log(err)})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/login", (req, res) => {
    res.render("login")
})


app.post("/login", async (req, res) => {
    res.send("<h2> You have logged in </h2>");
    console.log(req.body);
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then(function(hash) {
        // Store hash in your password DB.
        
    });
})


app.get("/setcookie", (req, res) => {
    res.cookie("daniela", "sdaee");
    res.cookie("name", "joejoe");
    res.send("<h1> Hello this is </h1>")
})

app.get("/getcookie", (req, res) => {
    const { daniela } = req.cookies;
    console.log(daniela)
    
})




app.get("/campgrounds", async (req, res) => {
    const item =  await new models({
        name: "Georgie",
        description: "First camp-ground"
    })
    await item.save()
    res.send(item)
})

app.listen(3000,() => console.log("You are listening to port 3000"))