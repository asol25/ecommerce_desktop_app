import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Select, MenuItem, SelectChangeEvent, Box, FormControl, InputLabel } from '@mui/material';

interface IPaymentFormProps {
	Banking: string;
	onHandleSetBanking: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentForm: React.FunctionComponent<IPaymentFormProps> = (props) => {
	const handleChange = (event: SelectChangeEvent) => {
		props.onHandleSetBanking(event.target.value as string);
	};

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Payment method
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardName"
						label="Name on card"
						fullWidth
						autoComplete="cc-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="Card number"
						fullWidth
						autoComplete="cc-number"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="expDate"
						label="Expiry date"
						fullWidth
						autoComplete="cc-exp"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV"
						helperText="Last three digits on signature strip"
						fullWidth
						autoComplete="cc-csc"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Banking</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={props.Banking}
								label="Banking"
								onChange={handleChange}
							>
								<MenuItem value="123"> None</MenuItem>
								<MenuItem value="NCB"> Ngan hang NCB</MenuItem>
								<MenuItem value="AGRIBANK"> Ngan hang Agribank</MenuItem>
								<MenuItem value="SCB"> Ngan hang SCB</MenuItem>
								<MenuItem value="SACOMBANK">Ngan hang SacomBank</MenuItem>
								<MenuItem value="EXIMBANK"> Ngan hang EximBank</MenuItem>
								<MenuItem value="MSBANK"> Ngan hang MSBANK</MenuItem>
								<MenuItem value="NAMABANK"> Ngan hang NamABank</MenuItem>
								<MenuItem value="VNMART"> Vi dien tu VnMart</MenuItem>
								<MenuItem value="VIETINBANK">Ngan hang Vietinbank</MenuItem>
								<MenuItem value="VIETCOMBANK"> Ngan hang VCB</MenuItem>
								<MenuItem value="HDBANK">Ngan hang HDBank</MenuItem>
								<MenuItem value="DONGABANK"> Ngan hang Dong A</MenuItem>
								<MenuItem value="TPBANK"> Ngân hàng TPBank</MenuItem>
								<MenuItem value="OJB"> Ngân hàng OceanBank</MenuItem>
								<MenuItem value="BIDV"> Ngân hàng BIDV</MenuItem>
								<MenuItem value="TECHCOMBANK"> Ngân hàng Techcombank</MenuItem>
								<MenuItem value="VPBANK"> Ngan hang VPBank</MenuItem>
								<MenuItem value="MBBANK"> Ngan hang MBBank</MenuItem>
								<MenuItem value="ACB"> Ngan hang ACB</MenuItem>
								<MenuItem value="OCB"> Ngan hang OCB</MenuItem>
								<MenuItem value="IVB"> Ngan hang IVB</MenuItem>
								<MenuItem value="VISA"> Thanh toan qua VISA/MASTER</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default PaymentForm;
