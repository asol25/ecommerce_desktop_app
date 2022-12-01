import HomeProducts from '../components/_HomeProducts';
import CoursesPageMock from '../mock/_CoursesPageMock';

export interface ICoursesPageProps {}

export function CoursesPage(props: ICoursesPageProps) {
	const { data } = CoursesPageMock();
	return (
		<>
			<HomeProducts course={data} />
		</>
	);
}
