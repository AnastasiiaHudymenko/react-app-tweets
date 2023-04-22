import axios from 'axios';

axios.defaults.baseURL = 'https://6422c219001cb9fc202f05b3.mockapi.io';

export const fetchUsers = async (page = 1) => {
  const res = await axios.get(`/users?page=${page}&limit=6`);
  return res.data;
};

export const updateUser = async ({ id, body }) => {
  const res = await axios.put(`/users/${id}`, body);
  return res.data;
};

export const fetchAllUsers = async () => {
  const res = await axios.get(`/users`);
  return res.data;
};
