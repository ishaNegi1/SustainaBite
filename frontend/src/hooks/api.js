import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sustainabite-mhc1.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export default api;
