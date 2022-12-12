import axios from 'axios';
import { ICourses } from '../type';

export const getProductByLimit = async (_limit: number) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/courses/limit/${_limit}`
	);
	return response;
};

export const find = async () => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/courses/`
	);
	return response;
};

export const findOne = async (id: string) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/courses/courseById${id}`
	);
	return response;
};

export const incrementVideoViewCount = async (videoId: number) => {
	const response = await axios.get(
		`${
			process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'
		}/videos/incrementVideoViewCount/${videoId}`
	);
	return response;
};

export const incrementLikeVideo = async (videoId: number) => {
	const response = await axios.patch(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/videos/like/${videoId}`
	);
	return response;
};

export const getVideosByCourseId = async (courseId: number) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/videos/${courseId}`
	);
	return response;
};

export const findAllByCoursesBought = async (_email: string | undefined) => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/orders/payment/${_email}`
	);
	return response;
};
export const getTotalCourse = async () => {
	const response = await axios.get(
		`${process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714'}/courses/totalCourseCount`
	);
	return response;
};
