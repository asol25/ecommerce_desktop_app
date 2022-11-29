import {
	Avatar,
	Chip,
	Grid,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Paper,
	Rating,
	styled,
	Typography,
} from '@mui/material';
import React from 'react';
import TabProductDetail from '../components/_TabProductsDetail';

export interface ICoursesPageProps {}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export function CoursesPage(props: ICoursesPageProps) {
	const [value, setValue] = React.useState<number | null>(2);
	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{ mx: 'auto ' }}
				className="section container"
			>
				<Grid item xs={12} md={4}>
					<Item>
						<Avatar
							alt="Remy Sharp"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 56, height: 56, m: 3 }}
						/>
						<Typography
							sx={{ m: 3 }}
							variant="h5"
							component="h2"
							textAlign={'left'}
						>
							Nodejs With Osmose
						</Typography>

						<ListItem>
							<ListItemText primary="Price: " />
							<Typography
								variant="h5"
								component="h2"
								textAlign={'left'}
							>
								$800
							</Typography>
						</ListItem>

						<ListItem>
							<ListItemText primary="Ranting: " />
							<Rating
								name="simple-controlled"
								value={value}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
							/>
						</ListItem>

						<ListItem>
							<ListItemText primary="Tag: " />
							<Chip label="Chip Filled" />
						</ListItem>
					</Item>
				</Grid>
				<Grid item xs={12} md={8}>
					<Item>
						<TabProductDetail />
					</Item>
				</Grid>
			</Grid>
		</>
	);
}
