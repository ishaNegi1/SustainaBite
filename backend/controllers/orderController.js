const Order = require("../models/orderModel");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate("productId", "image name price")
      .sort({ date: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postOrders = async (req, res) => {
  try {
    const { productId, address, pincode, phone, landmark } = req.body;
    const order = new Order({
      productId,
      address,
      pincode,
      phone,
      landmark,
      userId: req.user.id,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrders, postOrders };
