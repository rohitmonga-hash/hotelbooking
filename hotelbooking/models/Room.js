const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String
});

module.exports = mongoose.model("Room", roomSchema);