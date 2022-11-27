import * as React from 'react';
import { ICourses } from '../type';
import * as apis from '../apis/apis';

const FeatureMock = () => {
	const [products, setProduct] = React.useState<ICourses[]>([]);
	const [limit, setLimit] = React.useState<number>(3);

	const handleSetProduct = (product: any) => {
		setProduct(product);
	};

	const handleSetLimit = (limit: number) => {
		setLimit(limit);
	};

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchData = async () => {
				const response = await apis.products.getProductByLimit(limit);
				const { data, status } = response;
				if (status === 200 && data.length > 0) {
					setProduct(data);
				}
			};

			fetchData();
		}

		return () => {
			isChecked = false;
		};
	}, [limit]);

	return {
		products,
		handleSetProduct,
		handleSetLimit,
	};
};

export default FeatureMock;
