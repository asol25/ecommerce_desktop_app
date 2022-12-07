import { User } from '@auth0/auth0-react';
import axios from 'axios';

export const sendUser = (user: User | undefined) => {
	const rensponse = axios.post(`http://localhost:33714/auth/login/auth0`, user);
};

export const getUser = (username: string | undefined) => {
	const rensponse = axios.post(
		`http://localhost:33714/user/findOne/${username}`
	);
	return rensponse;
};
