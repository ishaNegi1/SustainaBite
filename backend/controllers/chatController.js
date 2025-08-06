const Chat = require("../models/chatModel");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getAllChats = async(req,res) => {
   try {
    const chats = await Chat.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}

const getAllMessages = async(req,res) => {
 const chatId = req.params.id;
  try {
    const chat = await Chat.findOne({ _id: chatId, userId: req.user.id });
    if (!chat) return res.status(404).json({ error: "Chat not found" });
    res.json(chat);
  } catch (error) {
    console.error("Error fetching chat:", error);
    res.status(500).json({ error: "Server error" });
  }
}

const createNewChat = async(req,res) => {
  try {
    const newChat = new Chat({
      userId: req.user.id,
      title: req.body.title,
      messages: [],
    });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    console.error("Error creating chat:", error);
    res.status(500).json({ error: "Server error" });
  }
}

const saveMessages = async(req,res) => {
  const chatId = req.params.id;
  const { content } = req.body;
  try {
    const chat = await Chat.findOne({ _id: chatId, userId: req.user.id });
    if (!chat) return res.status(404).json({ error: "Chat not found" });
    chat.messages.push({
      role: "user",
      content,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: chat.messages.map((m) => ({
        role: m.role === "bot" ? "bot" : m.role,
        content: m.content,
      })),
    });
    const botReply = {
      role: "bot",
      content: completion.choices[0].message.content,
    };
    chat.messages.push(botReply);
    await chat.save();
    res.json(chat);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {getAllChats, getAllMessages, createNewChat, saveMessages}