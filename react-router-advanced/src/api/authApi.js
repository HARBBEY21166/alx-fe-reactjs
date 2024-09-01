import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-auth-api.com/api',
});

const login = async (username, password) => {
  const response = await api.post('/login', { username, password });
  return response.data;
};

const register = async (username, password) => {
  const response = await api.post('/register', { username, password });
  return response.data;
};

export { login, register };
