const Order = require("../models/orderModel");
const Donate = require("../models/donateModel");
const mongoose = require("mongoose");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate("productId", "image name packSize")
      .sort({ date: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postOrders = async (req, res) => {
  try {
    const { productId, address, pincode, phone, landmark, coinUsed } = req.body;
    const userId = req.user.id;
    const earned = await Donate.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: null, total: { $sum: "$coin" } } }
    ]);

    const spent = await Order.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: null, total: { $sum: "$coinUsed" } } }
    ]);

    const totalEarned = earned.length > 0 ? earned[0].total : 0;
    const totalSpent = spent.length > 0 ? spent[0].total : 0;
    const availableCoins = totalEarned - totalSpent;

    let coinsApplied = 0;
    if (coinUsed && coinUsed > 0) {
      if (coinUsed > availableCoins) {
        return res.status(400).json({ message: "Not enough coins available" });
      }
      coinsApplied = coinUsed;
    }

    const order = new Order({
      productId,
      address,
      pincode,
      phone,
      landmark,
      coinUsed: coinsApplied,
      userId
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBalance = async (req, res) => {
  try {
    const userId = req.user.id;
    const earned = await Donate.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: null, total: { $sum: "$coin" } } }
    ]);
    const spent = await Order.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: null, total: { $sum: "$coinUsed" } } }
    ]);
    const totalEarned = earned.length > 0 ? earned[0].total : 0;
    const totalSpent = spent.length > 0 ? spent[0].total : 0;
    res.json({
      earned: totalEarned,
      spent: totalSpent,
      balance: totalEarned - totalSpent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching balance", error: error.message });
  }
};

module.exports = { getOrders, postOrders, getBalance };
