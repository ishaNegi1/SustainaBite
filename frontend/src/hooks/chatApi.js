import api from './api'

const getChats = async() => {
  try {
    const res = await api.get('/chats/getChats'); 
    return res.data;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return [];
  }
}

const getChatById = async (chatId) => {
  try {
    const res = await api.get(`/chats/getMessages/${chatId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching chat by ID:", error);
    return null;
  }
};

const startNewChat = async(title) => {
  try {
    const res = await api.post('/chats/newChat', {title});
    return res.data;
  } catch (error) {
    console.error("Error starting new chat:", error);
    return null;
  }
}

const sendMsg = async (chatId, content) => {
  try {
    const response = await api.post(`/chats/saveChat/${chatId}`, {
      content: content,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export {getChats, getChatById, startNewChat, sendMsg}