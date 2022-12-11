import axios from 'axios';

export const find = async (page) => {
  const response = await axios.get(`${process.env.SERVER_API || 'http://localhost:33714'}/user/${page}`);
  return response;
};

export const getCountUsers = async () => {
  const response = await axios.get(`${process.env.SERVER_API || 'http://localhost:33714'}/user/countUsers`);
  return response;
};

export const intertUser = async (username, password, email, verified, status, page) => {
  const response = await axios.put(`${process.env.SERVER_API || 'http://localhost:33714'}/user/create`, {
    username,
    password,
    email,
    verified,
    status,
    page,
  });
  return response;
};

export const deleteById = async (id, page, isCheckedBannedOrActive) => {
  const response = await axios.delete(
    `${process.env.SERVER_API || 'http://localhost:33714'}/user/delete/${id}/page/${page}/status/${isCheckedBannedOrActive}`
  );
  return response;
};
