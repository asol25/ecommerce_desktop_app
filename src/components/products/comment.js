import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Comment({ comments }) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {
        comments.map((comment) => {
          return (
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/242591087_1547005492329911_8269254286194252691_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=U_Ua5gWBZ44AX_IHfrr&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfD87ybdAmFB2GYA-z5_Egqh8SDdij1-jDnnxbxLYXQx7A&oe=637767B0" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline', pr: 1 }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors <span>: </span>
                      </Typography>
                      {comment.comment}
                    </>
                  }
                />
                <Divider variant="inset" component="li" />
              </ListItem>
          )
        })}
    </List>
  );
}