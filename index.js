const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const userrouter = require("./routes/user");
const hashpassword = require("./password");
const session = require("express-session")
const flash = require("connect-flash")
const methodOverride = require("method-override");
const morgan = require("morgan")

app.use(methodOverride('_method'));
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(flash())
app.use(session({secret: "greatSecret"}))

// app.use(morgan("tiny"));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next()
})


app.use((req, res, next) => {
    res.locals.messages = req.flash("success");
    next()
})
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.use("/user", userrouter);

app.listen(3000,() => console.log("You are listening to port 3000"))

