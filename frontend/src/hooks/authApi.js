import api from './api'

const signupUser = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Signup failed" };
  }
};

const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Login failed" };
  }
};

export { signupUser, loginUser} 
