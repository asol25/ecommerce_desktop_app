import { useRoutes } from 'react-router-dom';
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
			],
		},
	]);
	return routes;
}
