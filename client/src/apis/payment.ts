import axios from 'axios';

export const requestPayment = async (options: any) => {
	const headers = {
		headers: { 'Access-Control-Allow-Origin': '*' },
	};
	const res = await axios.post(
		'http://localhost:33714/payment/create_payment_url',
		options,
		headers
	);

	return res;
};

export const created = async (options: any) => {
	const { accountsId, coursesId } = options;
	console.log(options);

	const headers = {
		headers: { 'Access-Control-Allow-Origin': '*' },
	};

	return await axios.get(
		`http://localhost:33714/orders/created/account/${accountsId}/course/${coursesId}`,
		headers
	);
};

export const getOrdersBySlug = async (
	_id: number,
	_email: string | undefined
) => {
	const headers = {
		headers: { 'Access-Control-Allow-Origin': '*' },
	};

	return await axios.get(
		`http://localhost:33714/orders/getOrdersBySlug/${_id}/${_email}`,
		headers
	);
};
