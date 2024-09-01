import axios from 'axios';

const login = async (username, password) => {
  const response = await axios.post('https://example.com/api/login', { username, password });
  return response.data;
};
