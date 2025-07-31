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
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Login failed" };
  }
};

const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export { signupUser, loginUser, logoutUser} 
