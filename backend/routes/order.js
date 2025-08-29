const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const { getOrders, postOrders } = require("../controllers/orderController");

router.get("/getOrders", protect, getOrders);
router.post("/postOrders", protect, postOrders);

module.exports = router;
