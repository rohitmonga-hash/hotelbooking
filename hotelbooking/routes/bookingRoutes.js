const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json({
    success: true,
    booking
  });
});

module.exports = router;