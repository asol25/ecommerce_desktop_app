import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

interface IReviewFormProps {
	onHandleAmount: React.Dispatch<React.SetStateAction<number>>;
	products: any;
}

const ReviewForm: React.FunctionComponent<IReviewFormProps> = (props) => {
	const { products } = props;

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			props.onHandleAmount(Number(products.newPrice) * 20 * 100);
		}
	}, []);
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				<ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary={products.title} />
					<Typography variant="body2">${products.newPrice}</Typography>
				</ListItem>
				<ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary="Total" />
					<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
						${products.newPrice}
					</Typography>
				</ListItem>
			</List>
		</React.Fragment>
	);
};

export default ReviewForm;
