const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fertilizer",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
    maxlength: 6,
    match: /^[0-9]{6}$/,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 10,
    match: /^[0-9]{10}$/,
  },
  landmark: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
