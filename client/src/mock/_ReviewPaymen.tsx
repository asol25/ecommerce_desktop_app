import * as React from 'react';

const ReviewPaymentMock = () => {
	const [product, setProduct] = React.useState({});

	React.useEffect(() => {
		localStorage.setItem('items', JSON.stringify(product));
	}, [product]);

	const getProducts = () => {
		return;
	};

	const handleChange = (data: object) => {
		setProduct(data);
	};

	return {
		handleChange,
	};
};
export default ReviewPaymentMock;
