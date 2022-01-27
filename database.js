const mongoose = require("mongoose")

// const uri = mongodb+srv://<username>:<password>@yelpcamp.uonxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoAtlasUri = "mongodb+srv://moeyshishi:moeyshishi@yelpcamp.uonxr.mongodb.net/yelpcamp?retryWrites=true&w=majority"

try {
  // Connect to the MongoDB cluster
   mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}

//  module.exports = connection;