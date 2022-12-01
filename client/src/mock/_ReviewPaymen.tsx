import * as React from 'react';

const ReviewPaymentMock = () => {
	const [product, setProduct] =
		React.useState({});

	React.useEffect(() => {
		localStorage.setItem(
			'items',
			JSON.stringify(product)
		);
	}, [product]);

	const handleChangeCart = (
		data: object
	) => {
		setProduct(data);
	};

	return {
		handleChangeCart,
	};
};
export default ReviewPaymentMock;
