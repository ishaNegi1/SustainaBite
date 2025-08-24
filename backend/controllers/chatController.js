require("dotenv").config();
const Chat = require("../models/chatModel");
const { OpenAI } = require("openai");

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1", 
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "https://sustaina-bite.vercel.app/", 
    "X-Title": "Leftover Recipe Chat",         
  },
});

const getAllChats = async(req,res) => {
   try {
    const chats = await Chat.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllMessages = async(req,res) => {
 const chatId = req.params.id;
  try {
    const chat = await Chat.findOne({ _id: chatId, userId: req.user.id });
    if (!chat) return res.status(404).json({ error: "Chat not found" });
    res.json(chat);
  } catch (error) {
    res.status(500).json({message: error.message})
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
    res.status(500).json({message: error.message})
  }
}

const saveMessages = async (req, res) => {
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
      model: "openai/gpt-oss-20b:free",
      messages: chat.messages.map((m) => ({
        role: m.role === "bot" ? "assistant" : m.role,
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
    res.status(500).json({message: error.message})
  }
};

const deleteChat = async(req, res) => {
  try{
  const chat = await Chat.findById(req.params.id);
  if (!chat) return res.status(404).json({ message: "Chat not found" });
  if(chat.userId.toString() !== req.user.id) return res.status(403).json({ message: "Unauthorized" });
  await Chat.findByIdAndDelete(req.params.id)
  res.json({ message: "Chat deleted" }); 
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
}


module.exports = {getAllChats, getAllMessages, createNewChat, saveMessages, deleteChat}