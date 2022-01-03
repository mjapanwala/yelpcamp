const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");
const userrouter = require("./routes/user")

app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.use("/login", userrouter)




app.listen(3000,() => console.log("You are listening to port 3000"))