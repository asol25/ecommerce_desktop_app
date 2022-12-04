import axios from 'axios';

export const getProductByLimit = async (_limit: number) => {
	const response = await axios.get(
		`http://localhost:33714/courses/limit/${_limit}`
	);
	return response;
};

export const find = async () => {
	const response = await axios.get('http://localhost:33714/courses/');
	return response;
};

export const findOne = async (id: string) => {
	console.log(`http://localhost:33714/courses/courseById${id}`);

	const response = await axios.get(
		`http://localhost:33714/courses/courseById${id}`
	);
	return response;
};

export const findAllByCoursesBought = async (_email: string | undefined) => {
	const response = await axios.get(
		`http://localhost:33714/orders/payment/${_email}`
	);
	return response;
};
export const getTotalCourse = async () => {
	const response = await axios.get(
		'http://localhost:33714/courses/totalCourseCount'
	);
	return response;
};
