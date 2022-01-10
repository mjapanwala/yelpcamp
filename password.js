const bcrypt = require("bcrypt")
const User = require("../yelpcamp/models/User")


const hashpassword = async (passwordtext="s", username) => {
    const salt =  await bcrypt.genSalt(11);
    const hashed = await bcrypt.hash(passwordtext,salt);
    return hashed;
//    if (hashed) {
//        login(passwordtext,hashed, username)
//    }
}
const login = async (passwordtext="s", hash, username) => {
    console.log(passwordtext, hash)
    const compare = await bcrypt.compare(passwordtext, hash);
    if (compare) {
        const postUser = await User({
            username,
            password:hash
        })
        postUser.save()  
    }
    
}


module.exports = {
    hashpassword
}