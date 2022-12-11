import * as React from 'react';
import { ICategories } from '../type';
import * as apis from '../apis/apis';

const FilterMock = () => {
	const [categories, setCategories] =
		React.useState<ICategories[]>([]);

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchData = async () => {
				const response = await apis.categorys.find();
				const { data, status } = await response;
				if (status === 200 && data.length > 0) {
					setCategories(data);
				}
			};

			fetchData();
		}

		return () => {
			isChecked = false;
		};
	}, []);

	return {
		categories,
	};
};

export default FilterMock;
