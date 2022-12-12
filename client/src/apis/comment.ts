import axios from 'axios';

export const find = async (videoId: number) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/commentes/${videoId}`
	);
	return response;
};

export const create = async (videoId: number, options: any) => {
	const response = await axios.post(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/commentes/create/${videoId}`,
		{
			options,
		}
	);

	return response;
};
