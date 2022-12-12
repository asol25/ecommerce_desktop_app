import { User } from '@auth0/auth0-react';
import axios from 'axios';

export const sendUser = (user: User | undefined) => {
	const response = axios.post(`${process.env.REACT_APP_VERCEL_ENV_API}/auth/login/auth0`, user);
};

export const getUser = (username: string | undefined) => {
	const response = axios.post(`${process.env.REACT_APP_VERCEL_ENV_API}/user/findOne/${username}`);
	return response;
};
