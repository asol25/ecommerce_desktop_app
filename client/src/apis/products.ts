import axios from 'axios';
import { ICourses } from '../type';

export const getProductByLimit = async (_limit: number) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API}/courses/limit/${_limit}`
	);
	return response;
};

export const find = async () => {
	const response = await axios.get(`${process.env.REACT_APP_VERCEL_ENV_API}/courses/`);
	return response;
};

export const findOne = async (id: string) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API}/courses/courseById${id}`
	);
	return response;
};

export const incrementVideoViewCount = async (videoId: number) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API}/videos/incrementVideoViewCount/${videoId}`
	);
	return response;
};

export const incrementLikeVideo = async (videoId: number) => {
	const response = await axios.patch(
		`${process.env.REACT_APP_VERCEL_ENV_API}/videos/like/${videoId}`
	);
	return response;
};

export const getVideosByCourseId = async (courseId: number) => {
	const response = await axios.get(`${process.env.REACT_APP_VERCEL_ENV_API}/videos/${courseId}`);
	return response;
};

export const findAllByCoursesBought = async (_email: string | undefined) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API}/orders/payment/${_email}`
	);
	return response;
};
export const getTotalCourse = async () => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API}/courses/totalCourseCount`
	);
	return response;
};
