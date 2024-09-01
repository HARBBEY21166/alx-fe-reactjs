import axios from 'axios';

const fetchUser = async () => {
  const response = await axios.get('https://example.com/api/users');
  return response.data;
};
