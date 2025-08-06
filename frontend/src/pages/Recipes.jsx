import React, { useState, useEffect, useRef } from "react";
import { leftover1 } from "../assets/pictures";
import {
  getChats,
  getChatById,
  startNewChat,
  sendMessage,
} from "../hooks/chatApi";

const Recipes = () => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTitleInput, setShowTitleInput] = useState(false);
const [titleInput, setTitleInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
    try {
      const data = await getChats();
      if (Array.isArray(data)) {
        setChats(data);
      } else {
        console.error("Invalid chat data:", data);
        setChats([]);
      }
    } catch (err) {
      console.error("Failed to load chats:", err);
      setChats([]);
    }
  };

  const handleNewChat = async (title) => {
    const newChat = await startNewChat(title);
    setChats([newChat, ...chats]);
    setActiveChat(newChat);
  };

  const handleChatSelect = async (chatId) => {
    const chat = await getChatById(chatId);
    setActiveChat(chat);
  };

  const handleSend = async () => {
    if (!input.trim() || !activeChat) return;
    setLoading(true);
    const updatedChat = await sendMessage(activeChat._id, input);
    setActiveChat(updatedChat);
    setInput("");
    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat]);

  return (
    <>
      <div
        className="text-center py-20 px-4 bg-[#133221] text-white relative"
        style={{
          backgroundImage: `url(${leftover1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Leftover Recipes</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Deliciously resourceful - turning yesterday's meals into today's
            magic. Discover smart, tasty ways to reduce waste and make every
            ingredient count.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row h-[85vh] my-4">
  <div className="w-full sm:w-1/3 bg-[#133221] text-white p-4 sm:block 
             overflow-y-auto sm:overflow-y-visible 
             max-h-[60vh] sm:max-h-none">
    {!showTitleInput ? (
      <button
        onClick={() => setShowTitleInput(true)}
        className="bg-[#fa453c] p-2 font-medium rounded w-full mb-4"
      >
        + New Chat
      </button>
    ) : (
      <div className="mb-4">
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Enter chat title"
          className="w-full p-2 text-black rounded mb-2"
        />
        <button
          onClick={async () => {
            await handleNewChat(titleInput.trim() || "New Chat");
            setTitleInput("");
            setShowTitleInput(false);
          }}
          className="bg-[#85CA81] p-2 w-full rounded font-medium"
        >
          Start Chat
        </button>
      </div>
    )}
    <ul>
      {(chats || []).map((chat) =>
        chat ? (
          <li
            key={chat._id}
            onClick={() => handleChatSelect(chat._id)}
            className={`cursor-pointer p-2 hover:bg-gray-700 rounded ${
              activeChat && activeChat._id === chat._id
                ? "bg-gray-700"
                : ""
            }`}
          >
            {chat.title || "New Chat"}
          </li>
        ) : null
      )}
    </ul>
  </div>

  <div className="w-full sm:w-3/4 p-4 flex flex-col border-t-4 sm:border-t-0 sm:border-l-4 border-[#85CA81]">
    {!activeChat ? (
      <div className="text-gray-500 font-medium text-lg mx-auto my-auto text-center">
        Select a chat to start
      </div>
    ) : (
      <>
        <div className="flex-1 overflow-y-auto mb-4 max-h-[60vh] pr-2">
          {(activeChat?.messages || []).map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-2 rounded max-w-lg ${
                  msg.role === "user" ? "bg-green-200" : "bg-gray-300"
                }`}
              >
                {msg.content}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border p-2 rounded-l"
            placeholder="Ask for a recipe using leftovers..."
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-green-600 text-white px-4 rounded-r disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </>
    )}
  </div>
</div>

    </>
  );
};

export default Recipes;
