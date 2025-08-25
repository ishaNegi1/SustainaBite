import React, { useState, useEffect } from "react";
import { leftover1 } from "../assets/pictures";
import { getChats, getChatById, startNewChat, sendMsg, delChat } from "../hooks/chatApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import PageSeo from "../components/PageSeo";

const Recipes = () => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(true);
  const [chatError, setChatError] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [dishType, setDishType] = useState("");

  useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
    try {
      setIsChatLoading(true);
      const data = await getChats();
      if (Array.isArray(data)) {
        setChats(data);
        setChatError("");
      } else {
        throw new Error("Invalid chat data format");
      }
    } catch (err) {
      console.error("Failed to load chats:", err);
      setChatError("Failed to load chats. Please try again.");
      setChats([]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleNewChat = async (title) => {
    try {
      const newChat = await startNewChat(title);
      setChats([newChat, ...chats]);
      setActiveChat(newChat);
    } catch (err) {
      console.error("Error starting new chat:", err);
    }
  };

  const handleChatSelect = async (chatId) => {
    try {
      const chat = await getChatById(chatId);
      setActiveChat(chat);
    } catch (err) {
      console.error("Error fetching chat:", err);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!ingredients.trim() || !dishType.trim() || !activeChat) return;
    const content = `The leftover ingredients are: ${ingredients}. Give recipes that are ${dishType} and easy to make in text format.`;
    try {
      setLoading(true);
      const updatedChat = await sendMsg(activeChat._id, content);
      setActiveChat(updatedChat);
      setInput("");
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async(chatId) => {
     const confirmed = confirm("Do you want to delete the chat?");
     if(confirmed){
      const result = await delChat(chatId)
     if (result.error) return alert(result.error);
     setChats(chats.filter((c) => c._id !== chatId));
     loadChats();
     setActiveChat(null);
     }
  }

  return (
    <>
    <PageSeo
  title="Leftover Recipes"
  description="Discover creative leftover recipes that turn yesterday's meals into delicious dishes."
  keywords="leftover recipes, food waste, cooking ideas, SustainaBite"
/>

      <div
        className="text-center py-20 px-4 bg-[#133221] text-white relative"
        style={{
          backgroundImage: `url(${leftover1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Leftover Recipes</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Deliciously resourceful - turning yesterday's meals into today's
            magic. Discover smart, tasty ways to reduce waste and make every
            ingredient count.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-4">
        <div className="w-full sm:w-1/3 bg-[#133221] text-white p-4 sm:block overflow-y-auto sm:overflow-y-visible max-h-[60vh] sm:max-h-none">
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

          {isChatLoading ? (
            <div className="text-center text-gray-300">Loading chats...</div>
          ) : chatError ? (
            <div className="text-red-300 text-sm text-center mb-2">
              {chatError}
            </div>
          ) : chats.length === 0 ? (
            <div className="text-center text-gray-300">No chats found.</div>
          ) : (
            <ul>
              {chats.map(
                (chat) =>
                  chat && (
                    <li
                      key={chat._id}
                      onClick={() => handleChatSelect(chat._id)}
                      className={`cursor-pointer p-2 text-base my-2 font-medium rounded ${
                        activeChat && activeChat._id === chat._id
                          ? "bg-[#85CA81] text-[#133221] border-2 border-[#fa453c]"
                          : "bg-[#25603f] text-[#ffffff] hover:bg-[#85CA81]"
                      }`}
                    >
                    <div className=" flex justify-between items-center">
                      {chat.title || "New Chat"}
                      <FontAwesomeIcon icon={faTrash} className=" transition-all duration-500 ease-linear transform hover:scale-110" onClick={() => handleDelete(chat._id)}/>
                      </div>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>

        <div className="w-full sm:w-3/4 p-4 flex flex-col">
          {!activeChat ? (
            <div className="text-gray-500 font-medium text-lg mx-auto my-auto text-center">
              Select a chat to start
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto mb-4 max-h-[90vh] p-4 border-2 border-[#133221] dark:border-[#ffffff] rounded-lg">
                {(activeChat?.messages || []).map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 text-sm ${
                      msg.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block p-2 rounded max-w-lg text-left text-sm ${
                        msg.role === "user" ? "bg-green-200" : "bg-gray-300"
                      }`}
                    >
                      {msg.content}
                    </span>
                  </div>
                ))}
              </div>
              <form className="flex flex-col gap-5 my-3" onSubmit={handleSend}>
              <div className="flex flex-col mt-6">
              <label htmlFor="ingredients" className=" font-Nunito dark:text-[#ffffff]">Ingredients: </label>
                <input
                  type="text"
                  id="ingredients"
                  value={ingredients}
                  required
                  onChange={(e) => setIngredients(e.target.value)}
                  className=" p-2 rounded-md mt-2 border-0 border-b-2 bg-transparent dark:border-[#FFFFFF] border-[#133221]"
                  placeholder="e.g. rice, tomato, cheese, chappati, coconut"
                />
                </div>
                <div className="flex flex-col mt-6">
                <label htmlFor="type" className=" font-Nunito dark:text-[#ffffff]">Dish Type: </label>
                <input
                  type="text"
                  id="type"
                  required
                  value={dishType}
                  onChange={(e) => setDishType(e.target.value)}
                  className="p-2 rounded-md mt-2 border-0 border-b-2 bg-transparent dark:border-[#FFFFFF] border-[#133221]"
                  placeholder="e.g. spicy, breakfast, indian, sweet"
                />
                </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#fa453c] text-white p-2 rounded-md font-medium w-1/2 mx-auto transition-all duration-500 ease-linear transform hover:scale-110 mt-7"
              >
                {loading ? "Sending..." : "Send"}
              </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Recipes;
