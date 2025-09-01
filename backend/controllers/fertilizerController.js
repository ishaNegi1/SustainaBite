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

const toggleLike = async (req, res) => {
  try {
    const userId = req.user.id; 

    const product = await Fertilizer.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.likes.includes(userId)) {
      product.likes.pull(userId);
    } else {
      product.likes.push(userId);
      product.dislikes.pull(userId);
    }

    await product.save();
    res.json({
      likes: product.likes.length,
      dislikes: product.dislikes.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const toggleDislike = async (req, res) => {
  try {
    const userId = req.user.id;

    const product = await Fertilizer.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.dislikes.includes(userId)) {
      product.dislikes.pull(userId);
    } else {
      product.dislikes.push(userId);
      product.likes.pull(userId);
    }

    await product.save();
    res.json({
      likes: product.likes.length,
      dislikes: product.dislikes.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, postProducts, toggleLike, toggleDislike };
