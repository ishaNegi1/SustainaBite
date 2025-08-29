const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  getAllChats,
  getAllMessages,
  createNewChat,
  saveMessages,
  deleteChat,
} = require("../controllers/chatController");

router.get("/getChats", protect, getAllChats);
router.get("/getMessages/:id", protect, getAllMessages);
router.post("/newChat", protect, createNewChat);
router.post("/saveChat/:id", protect, saveMessages);
router.delete("/deleteChat/:id", protect, deleteChat);

module.exports = router;
