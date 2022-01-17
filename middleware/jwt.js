const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const token = req.header('x-auth-token')
    // if no token
    if (!token) {
        return res.status(401).json({msg: "no token found"})
    }
    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        req.user = decoded.id;
        next()
        
    }catch(err) {
        res.status(401).json({msg: "Token is not valid"})
    }
}

module.exports = {
    verifyJWT
}


