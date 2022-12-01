import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, {
	DialogProps,
} from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

interface IPoliciesProps {
	open: boolean;
	scroll: DialogProps['scroll'];
	handleClickOpen: (
		scrollType: DialogProps['scroll']
	) => () => void;
	handleClose: () => void;
	descriptionElementRef: React.RefObject<HTMLElement>;
}

const Policies: React.FunctionComponent<
	IPoliciesProps
> = (props) => {
	const {
		open,
		scroll,
		handleClickOpen,
		handleClose,
		descriptionElementRef,
	} = props;

	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">
					Subscribe
				</DialogTitle>
				<DialogContent
					dividers={scroll === 'paper'}
				>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						{[...new Array(50)]
							.map(
								() =>
									`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
							)
							.join('\n')}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>
						Cancel
					</Button>
					<Link to={'/payment/checkout'}>
						Next Step
					</Link>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Policies;
