import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, FormHelperText } from '@mui/material';

interface IAddressFormProps {}

const AddressForm: React.FunctionComponent<IAddressFormProps> = (props) => {
	const { user } = useAuth0();

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Information Customer
			</Typography>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							autoComplete="given-name"
							variant="standard"
							value={user?.nickname}
						/>
						<FormHelperText sx={{ ml: 1 }}>Nick Name *</FormHelperText>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="fullName"
							name="fullName"
							fullWidth
							autoComplete="family-name"
							variant="standard"
							value={user?.name}
						/>
						<FormHelperText sx={{ ml: 1 }}>Full Name *</FormHelperText>
					</Grid>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id="email"
							name="email"
							fullWidth
							autoComplete="shipping address-line1"
							variant="standard"
							disabled
							value={user?.email}
						/>
						<FormHelperText sx={{ ml: 1 }}>
							Email important help we send notification when payment success *
						</FormHelperText>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};
export default AddressForm;
