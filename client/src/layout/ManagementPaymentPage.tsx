import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
import { redirect } from 'react-router-dom';
import Checkout from '../components/_Checkout';

interface IManagementPaymentPageProps {}

const ManagementPaymentPage: React.FunctionComponent<IManagementPaymentPageProps> = (props) => {
	const { user, loginWithRedirect } = useAuth0();
	return (
		<>
			{user ? (
				<Checkout />
			) : (
				<section className="section container">
					<h1>
						You must{' '}
						<span className="span__login" onClick={() => loginWithRedirect()}>
							Login
						</span>{' '}
						to Payment Course
					</h1>
				</section>
			)}
		</>
	);
};

export default ManagementPaymentPage;
