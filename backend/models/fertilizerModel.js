const mongoose = require('mongoose');

const fertilizerSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: String,
    enum: ["In Stock", "Out of Stock"],
    required: true,
  },
  like: {
    type: Number,
    default: 0, 
  },
  dislike: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Fertilizer', fertilizerSchema);
