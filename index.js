const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const user = require("./routes/user");
const profile = require("./routes/profile")
const post = require('./routes/post')
const session = require("express-session")
const flash = require("connect-flash")
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(flash())
app.use(session({secret: "greatSecret"}))
require('dotenv').config()

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




app.use('/api/users', user);
app.use('/api/profile', profile);
app.use('/api/posts', post)


app.listen(3000,() => console.log("You are listening to port 3000"))

