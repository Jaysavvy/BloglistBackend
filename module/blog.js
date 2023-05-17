const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_DB;
console.log("connecting to", url);

mongoose
  .connect(url, {})
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

  const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

  blogSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

  module.exports = mongoose.model('Blog', blogSchema)