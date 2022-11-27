import * as React from 'react';
import * as apis from '../apis/apis';
import { useAuth0, User } from '@auth0/auth0-react';

const CartMock = () => {
	const [productsCart, setProductsCart] = React.useState([]);
	const { user } = useAuth0();

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchData = async (user: User | undefined) => {
				const response = await apis.products.findAllByCoursesBought(user?.email);
				const { data, status } = response;
				if (status === 200 && data.length > 0) {
					setProductsCart(data);
				}
			};

			fetchData(user);
		}

		return () => {
			isChecked = false;
		};
	}, [user]);

	return {
		productsCart,
	};
};

export default CartMock;
