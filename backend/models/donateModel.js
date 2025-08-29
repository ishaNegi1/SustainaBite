const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 10,
    match: /^[0-9]{10}$/,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
    maxlength: 6,
    match: /^[0-9]{6}$/,
  },
  foodType: {
    type: [String],
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  preferredTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Picked up"],
    default: "Pending",
  },
  coin: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Donate", donateSchema);
