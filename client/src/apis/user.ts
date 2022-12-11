import { User } from '@auth0/auth0-react';
import axios from 'axios';

export const sendUser = (user: User | undefined) => {
	const response = axios.post(
		`${process.env.SERVER_API || 'http://localhost:33714'}/auth/login/auth0`,
		user
	);
};

export const getUser = (username: string | undefined) => {
	const response = axios.post(
		`${process.env.SERVER_API || 'http://localhost:33714'}/user/findOne/${username}`
	);
	return response;
};
