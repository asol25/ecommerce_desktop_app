import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface IArticleProductProps {
	title: string;
	description: string;
	thumbnailUrl: string;
}

export default function ArticleCart(props: IArticleProductProps) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component="img" height="140" image={props.thumbnailUrl} alt="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Watch</Button>
				<Button size="small">Report</Button>
			</CardActions>
		</Card>
	);
}
