const express = require("express");
const {
  getProducts,
  postProducts,
  toggleLike,
  toggleDislike,
} = require("../controllers/fertilizerController");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

router.get("/getProducts", protect, getProducts);
router.post("/postProducts", postProducts);
router.put("/like/:id", protect, toggleLike);
router.put("/dislike/:id", protect, toggleDislike);

module.exports = router;
