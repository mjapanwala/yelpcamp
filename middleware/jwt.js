const jwt = require('jsonwebtoken')


const signJWT = async (payload) => {
    const {username, password, _id} = payload;
    const payloads = {
        username,
        password,
        _id
    }
    const payloadss = {
        user: payloads._id
    }
    try {
        jwt.sign(payloadss, process.env.secret_key, { expiresIn: 36000}, (err, token) => {
            if (err) {
                console.log(err, "err")
            } else {
                return token
            }
         }) 
    }
    catch(err) {
        console.log(err)
    }
}

const verifyJWT = () => {

}

module.exports = {
    signJWT,
    verifyJWT
}


