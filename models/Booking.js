const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomId: String,
  checkIn: String,
  checkOut: String,
  totalPrice: Number
});

module.exports = mongoose.model("Booking", bookingSchema);