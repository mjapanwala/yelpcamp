const bcrypt = require("bcrypt")
const User = require("../yelpcamp/models/User")


const hashpassword = async (passwordtext="s") => {
    const salt =  await bcrypt.genSalt(11);
    const hashed = await bcrypt.hash(passwordtext,salt)
   if (hashed) {
       login(passwordtext,hashed)
   }
}
const login = async (passwordtext="s", hash) => {
    console.log(passwordtext, hash)
    const compare = await bcrypt.compare(passwordtext, hash);
    compare? console.log("logged in") : console.log("not logged in");
}


module.exports = {
    hashpassword
}