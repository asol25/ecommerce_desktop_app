import { Button } from '@mui/material';
import * as React from 'react';
import Products from '../components/_Products';
import { ProductMock } from '../mock/_ProductMock';

interface IManagementProductsPageProps {}

const ManagementProductsPage: React.FunctionComponent<IManagementProductsPageProps> = (props) => {
	const { products, handleSetLimit } = ProductMock();

	return (
		<>
			<Products products={products} />
			{products.length > 0 ? (
				<section className="container center">
					<Button onClick={() => handleSetLimit(products.length + 9)}>New Courses</Button>
				</section>
			) : null}
		</>
	);
};

export default ManagementProductsPage;
