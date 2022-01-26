const mongoose = require("mongoose")


const Post = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    name: {
        type: String,
    },

    text: {
        type: String,
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: {
                type: String,
                
            },
            name: {
                type: String,
            }
        }
    ]
})

module.exports  = mongoose.model('Post', Post)