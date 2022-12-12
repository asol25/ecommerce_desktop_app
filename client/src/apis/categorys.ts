import axios from 'axios';

export const find = async () => {
	const response = await axios.get(`${process.env.REACT_APP_VERCEL_ENV_API}/categorys`);
	return response;
};
