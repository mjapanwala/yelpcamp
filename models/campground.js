const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    name: "String",
    description: "String",
})


const models = mongoose.model("Campground", campgroundSchema);

module.exports = models;