const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const { getOrders, postOrders, getBalance } = require("../controllers/orderController");

router.get("/getOrders", protect, getOrders);
router.post("/postOrders", protect, postOrders);
router.get("/balance", protect, getBalance);

module.exports = router;
