import axios from 'axios';

export const requestPayment = async (options: any) => {
	const res = await axios.post('http://localhost:33714/payment/create_payment_url', options);
	return res;
};
