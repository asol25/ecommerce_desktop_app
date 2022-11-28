import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IPoliciesProps {
	open: boolean;
	scroll: DialogProps['scroll'];
	handleClickOpen: (scrollType: DialogProps['scroll']) => () => void;
	handleClose: () => void;
	descriptionElementRef: React.RefObject<HTMLElement>;
}

const Policies: React.FunctionComponent<IPoliciesProps> = (props) => {
	const { open, scroll, handleClickOpen, handleClose, descriptionElementRef } = props;

	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
						{[...new Array(50)]
							.map(
								() => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
							)
							.join('\n')}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Next Step</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Policies;
