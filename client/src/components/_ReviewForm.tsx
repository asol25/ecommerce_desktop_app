import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface IReviewFormProps {
	products: any;
}

const ReviewForm: React.FunctionComponent<
	IReviewFormProps
> = (props) => {
	const { products } = props;

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				<ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary={products.title} />
					<Typography variant="body2">
						${products.newPrice}
					</Typography>
				</ListItem>
				<ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary="Total" />
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: 700 }}
					>
						${products.newPrice}
					</Typography>
				</ListItem>
			</List>
		</React.Fragment>
	);
};

export default ReviewForm;
