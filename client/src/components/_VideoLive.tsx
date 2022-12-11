import { useAuth0 } from '@auth0/auth0-react';
import ErrorIcon from '@mui/icons-material/Error';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { Alert, Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import * as apis from '../apis/apis';
import { IVideo } from '../type';
import Comment from './_Comment';
import HtmlEditor from './_HtmlEditer';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

interface IVideoLiveProps {
	video: IVideo;
}

export default function VideoLive(props: IVideoLiveProps) {
	const { video } = props;
	const [expanded, setExpanded] = React.useState(false);
	const [open, setOpen] = React.useState(true);
	const [comments, setComments] = React.useState([]);
	const [message, setMessage] = React.useState<string>('');
	const [isCheckedSendMessage, setIsCheckSendMessage] = React.useState(false);
	const [like, setLike] = React.useState(video.like);
	const [error, setError] = React.useState<string | boolean>('');
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const { user } = useAuth0();
	const sendMessage = () => {
		if (message.length > 15) {
			setIsCheckSendMessage(!isCheckedSendMessage);
			setOpen(false);
		}
		setError('Message too short, Must be at least 15 characters');
		setOpen(true);
	};

	const handleFavorites = async () => {
		const res = await apis.products.incrementLikeVideo(video.id);

		const { data, status } = await res;

		if (status === 200) {
			setLike(data.like);
		}
	};

	React.useEffect(() => {
		let isChecked = true;
		if (isChecked) {
			const fetchData = async () => {
				if (user?.email && message !== '') {
					setError(false);
					const foundUser = await apis.user.getUser(user.name);

					await apis.comment.create(video.id, {
						userId: foundUser.data[0].id,
						message: message,
					});
				}
				const response = await apis.comment.find(video.id as number);
				const { data, status } = response;
				console.log('🚀 ~ file: _VideoLive.tsx:91 ~ fetchData ~ response', response);
				if (status === 200) {
					setComments(data);
				}
			};

			fetchData();
		}

		return () => {
			isChecked = false;
		};
	}, [isCheckedSendMessage, video.id]);

	React.useEffect(() => {
		let isChecked = true;

		if (isChecked) {
			const fetchData = async () => {
				await apis.products.incrementVideoViewCount(video.id as number);
				const response = await apis.comment.find(video.id as number);
				const { data, status } = response;

				if (status === 200) {
					setComments(data);
				}
			};
			fetchData();
		}

		return () => {
			isChecked = false;
		};
	}, []);

	return (
		<>
			<Card sx={{ maxWidth: '100%' }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={video.title}
					subheader="September 14, 2016"
				/>

				<CardContent>
					<CardMedia component="video" image={video.videoUrl} controls />
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites" onClick={handleFavorites}>
						<FavoriteIcon /> {like}
					</IconButton>

					<IconButton aria-label="add to favorites" onClick={handleFavorites}>
						<ReviewsIcon />
						{props.video.views}
					</IconButton>

					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>Method:</Typography>
						<Typography paragraph>
							Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
						</Typography>
						<Typography paragraph>
							Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
							chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
							minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the
							pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring
							often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
							cups chicken broth; bring to a boil.
						</Typography>
						<Typography paragraph>
							Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
							without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
							medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again
							without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more.
							(Discard any mussels that don&apos;t open.)
						</Typography>
						<Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
					</CardContent>
				</Collapse>

				<Box sx={{ width: '100%' }}>
					{error && (
						<Collapse in={open}>
							<Alert
								action={
									<IconButton
										aria-label="close"
										color="inherit"
										size="small"
										onClick={() => {
											setOpen(false);
										}}
									>
										<ErrorIcon fontSize="inherit" />
									</IconButton>
								}
								sx={{ mb: 2 }}
							>
								{error}
							</Alert>
						</Collapse>
					)}
				</Box>
				<Box padding="10px">
					<HtmlEditor value={message} setValue={setMessage} />
					<Button onClick={sendMessage}>Submit</Button>
				</Box>
				{comments ? <Comment comments={comments} /> : null}
			</Card>
		</>
	);
}
