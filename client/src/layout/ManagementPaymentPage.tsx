import * as React from 'react';
import Checkout from '../components/_Checkout';

interface IManagementPaymentPageProps {}

const ManagementPaymentPage: React.FunctionComponent<IManagementPaymentPageProps> = (props) => {
	return (
		<>
			<Checkout />
		</>
	);
};

export default ManagementPaymentPage;
