import * as React from 'react';
import { ProductMock } from '../mock/_ProductMock';
const Products = React.lazy(() => import('../components/_Products'));

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
