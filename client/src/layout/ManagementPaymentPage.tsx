import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
import Checkout from '../components/_Checkout';

interface IManagementPaymentPageProps {}

const ManagementPaymentPage: React.FunctionComponent<
	IManagementPaymentPageProps
> = (props) => {
	const { user } = useAuth0();
	return (
		<>
			{user ? (
				<Checkout />
			) : (
				<section className="section container">
					<h1>You must login to Payment</h1>
				</section>
			)}
		</>
	);
};

export default ManagementPaymentPage;
