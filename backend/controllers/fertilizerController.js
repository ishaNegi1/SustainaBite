const Fertilizer = require("../models/fertilizerModel");

const getProducts = async (req, res) => {
  try {
    const products = await Fertilizer.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProducts = async (req, res) => {
  try {
    const { image, name, description, price, packSize, stock } = req.body;
    const newProduct = new Fertilizer({
      image,
      name,
      description,
      price,
      packSize,
      stock,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, postProducts };
