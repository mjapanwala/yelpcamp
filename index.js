const express = require("express")

const app = express();


app.get("/", (req, res) => {
    console.log("You are listening to port 3000")
})

app.listen(3000,() => console.log("You are listening to port 3000"))