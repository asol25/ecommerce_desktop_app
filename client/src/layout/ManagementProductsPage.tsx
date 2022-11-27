import * as React from 'react';
import Products from '../components/_Products';
import { ProductMock } from '../mock/_ProductMock';

interface IManagementProductsPageProps {}

const ManagementProductsPage: React.FunctionComponent<
	IManagementProductsPageProps
> = (props) => {
	const { products, handleSetLimit } = ProductMock();

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			handleSetLimit(20);
		}

		return () => {
			isChecked = false;
		};
	}, []);

	return (
		<>
			<Products products={products} />
		</>
	);
};

export default ManagementProductsPage;
