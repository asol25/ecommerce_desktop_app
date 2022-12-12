import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import '../style.css';

interface IProfileProps {}
interface IFromDiaLogProps {
	open: boolean;
	handleClickOpen: () => void;
	handleClose: () => void;
}

function FormDialog({ open, handleClickOpen, handleClose }: IFromDiaLogProps) {
	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Add Picture
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Picture</DialogTitle>
				<DialogContent>
					{/* <Box
						border={'1px solid #C1C1C1'}
						borderRadius="9px"
						justifyContent={'center'}
						alignContent={'center'}
						display="flex"
						paddingY={'40px'}
					>
						<Button variant="contained" component="label">
							Upload
							<input hidden accept="image/*" multiple type="file" />
						</Button>
					</Box> */}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
const Profile: React.FunctionComponent<IProfileProps> = (props) => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	if (isLoading) {
		return <div>Loading ...</div>;
	}
	return (
		<>
			{isAuthenticated && (
				<div className="header__wrapper_profile">
					<div className="cols__container">
						<div className="left__col">
							<div className="img__container">
								<img src={user?.picture} alt="Anna Smith" />
								<span></span>
							</div>
							<h2>{user?.name}</h2>
							<p>UX/UI Designer</p>
							<p>{user?.email}</p>

							<ul className="about">
								<li>
									<span>4,073</span>Followers
								</li>
								<li>
									<span>322</span>Following
								</li>
								<li>
									<span>200,543</span>Attraction
								</li>
							</ul>

							<div className="content">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Morbi
									imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla.
								</p>
							</div>
						</div>
						<div className="right__col">
							<nav>
								<ul>
									<li>
										<a href="">photos</a>
									</li>
								</ul>
								{/* <FormDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} /> */}
							</nav>

							<div className="photos">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU"
									alt="Photo"
								/>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU"
									alt="Photo"
								/>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU"
									alt="Photo"
								/>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU"
									alt="Photo"
								/>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU"
									alt="Photo"
								/>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU"
									alt="Photo"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Profile;
