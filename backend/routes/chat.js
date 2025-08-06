const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const { getAllChats, getAllMessages, createNewChat, saveMessages } = require("../controllers/chatController");

router.get('/getChats', protect, getAllChats)
router.get('/getMessages/:id', protect, getAllMessages)
router.post('/newChat', protect, createNewChat)
router.post('/saveChat/:id', protect, saveMessages)

module.exports = router;