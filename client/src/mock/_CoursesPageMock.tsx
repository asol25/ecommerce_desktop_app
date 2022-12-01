import * as React from 'react';
import { ICourses } from '../type';
import * as apis from '../apis/apis';
const CoursesPageMock = () => {
	const [data, setData] = React.useState<ICourses>(
		{} as ICourses
	);

	React.useEffect(() => {
		let isChecked = false;
		if (!isChecked) {
			const fetchData = async () => {
				const stringQuery = window.location.search;
				const response = await apis.products.findOne(
					stringQuery
				);
				const { data, status } = await response;
				if (status === 200) {
					setData(data);
				}
			};

			fetchData();
		}

		return () => {
			isChecked = true;
		};
	}, []);

	return {
		data,
	};
};

export default CoursesPageMock;
