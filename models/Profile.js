const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const profileSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    company: {
        type: String
      },
      website: {
        type: String
      },
      location: {
        type: String
      },
      status: {
        type: String,
        required: true
      },
      skills: {
        type: [String],
        required: true
      },
      bio: {
        type: String
      },
date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Profile = mongoose.model('Profile', profileSchema);