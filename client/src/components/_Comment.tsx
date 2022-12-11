import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface ICommentProps {
	comments: any;
}
export default function Comment(
	props: ICommentProps
) {
	return (
		<List
			sx={{
				width: '100%',
				bgcolor: 'background.paper',
			}}
		>
			{props.comments.map((comment: any) => {
				return (
					<ListItem
						key={comment.id}
						alignItems="flex-start"
					>
						<ListItemAvatar>
							<Avatar
								alt={comment.account.username}
								src={comment.account.picture}
							/>
						</ListItemAvatar>
						<ListItemText
							primary={comment.account.username}
							secondary={
								<>
									<Typography
										dangerouslySetInnerHTML={{
											__html: comment.comment,
										}}
									/>
								</>
							}
						/>
						<Divider variant="inset" component="li" />
					</ListItem>
				);
			})}
		</List>
	);
}
