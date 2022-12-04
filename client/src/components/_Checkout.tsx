import { useAuth0 } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import * as apis from '../apis/apis';
import AddressForm from './_AddressForm';
import PaymentForm from './_PaymentForm';
import ReviewForm from './_ReviewForm';

const steps = ['Information Customer', 'Payment details', 'Review your order'];

const theme = createTheme();

interface ICheckoutProps {}

const Checkout: React.FunctionComponent<ICheckoutProps> = (props) => {
	let date = new Date();
	const [activeStep, setActiveStep] = React.useState(0);
	const [vnp_Locale, setVnpLocale] = React.useState('vn');
	const [vnp_TxnRef, setVnpTxnRef] = React.useState(
		`${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
	);
	const [vnp_OrderInfo, setVnpOrder] = React.useState('Thanh toan Courese');
	const [vnp_OrderType, setOrderType] = React.useState('topup');
	const [vnp_Amount, setVnpAmount] = React.useState(0);
	const [vnp_IpAddr, setIpAddr] = React.useState('172.71.218.9');
	const [vnp_CreateDate, setCreatedDate] = React.useState(
		`${date.getFullYear()}${date.getMonth()}${date.getDate()}${
			date.getHours() + 1
		}${date.getMinutes()}${date.getSeconds()}`
	);
	const [vnp_BankCode, setBankCode] = React.useState<string>('');
	const [redirectUri, setRedirectUri] = React.useState<string>('');
	const { user } = useAuth0();
	const products = JSON.parse(localStorage.getItem('items') || '{}');

	function getStepContent(step: number) {
		switch (step) {
			case 0:
				return <AddressForm />;
			case 1:
				return (
					<PaymentForm Banking={vnp_BankCode} onHandleSetBanking={setBankCode} />
				);
			case 2:
				return <ReviewForm products={products} onHandleAmount={setVnpAmount} />;
			default:
				throw new Error('Unknown step');
		}
	}

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked && user?.name && products.id) {
			if (activeStep === 3) {
				const fetchData = async () => {
					const res = await apis.payment.requestPayment({
						vnp_Amount,
						vnp_BankCode,
						vnp_IpAddr,
						vnp_Locale,
						vnp_OrderInfo,
						vnp_OrderType,
						vnp_TxnRef,
						vnp_CreateDate,
					});

					const { data, status } = await res;

					if (status !== 404 || data !== undefined) {
						return setRedirectUri(data);
					}
				};
				fetchData();
			}
			if (
				window.location.search.includes('vnp_ResponseCode=00') &&
				user?.name &&
				products.id
			) {
				apis.user
					.getUser(user?.name)
					.then((value) => value)
					.then(async (value) => {
						const res = await apis.payment.created({
							accountsId: value.data[0].id,
							coursesId: products.id,
						});

						const { data, status } = await res;
						if (data !== undefined && status === 200) {
							setActiveStep(3);
						}
					});
			}
		}

		return () => {
			isChecked = false;
		};
	}, [activeStep]);
	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<section className="section container">
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 10 }}>
					<Paper
						variant="outlined"
						sx={{
							my: { xs: 3, md: 6 },
							p: { xs: 2, md: 3 },
						}}
					>
						<Typography component="h1" variant="h4" align="center">
							Checkout
						</Typography>
						<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
									Thank you for your order.
								</Typography>
								<Typography variant="subtitle1">
									Your order number is #{vnp_TxnRef}. We have emailed your order
									confirmation, and will send you an update when your order has shipped.
								</Typography>
								<a href={redirectUri}>Click Here To Payment</a>
							</React.Fragment>
						) : (
							<React.Fragment>
								{getStepContent(activeStep)}
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									{activeStep !== 0 && (
										<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
											Back
										</Button>
									)}
									<Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
										{activeStep === steps.length - 1 ? 'Place order' : 'Next'}
									</Button>
								</Box>
							</React.Fragment>
						)}
					</Paper>
				</Container>
			</ThemeProvider>
		</section>
	);
};

export default Checkout;
function moment(dateTo: any) {
	throw new Error('Function not implemented.');
}
