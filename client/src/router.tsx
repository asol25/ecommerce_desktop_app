import { useRoutes } from 'react-router-dom';
import { CoursesPage } from './layout/CoursesPage';
import Home from './layout/HomePage';
import ApplicationPage from './layout/index';
import ManagementPaymentPage from './layout/ManagementPaymentPage';
import ManagementProductsPage from './layout/ManagementProductsPage';

// ----------------------------------------------------------------------

export default function Router(): ReturnType<typeof useRoutes> {
	const routes = useRoutes([
		{
			path: '/',
			element: <ApplicationPage />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: 'products',
					element: <ManagementProductsPage />,
				},
				{
					path: 'payment/checkout',
					element: <ManagementPaymentPage />,
				},
				{
					path: 'courses',
					element: <CoursesPage />,
				},
			],
		},
	]);
	return routes;
}
