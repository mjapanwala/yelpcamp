const bcrypt = require("bcrypt")
const User = require("../models/User")


const hashpassword = async (passwordtext="s") => {
    const salt =  await bcrypt.genSalt(11);
    const hashed = await bcrypt.hash(passwordtext,salt);
    return hashed;
}




module.exports = {
    hashpassword
}