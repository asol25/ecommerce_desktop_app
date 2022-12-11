import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
// @mui
import { Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
// mocks_
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    link: "/dashboard/app"
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    link: "/dashboard/profile"
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    link: "/dashboard/settings"
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  console.log("🚀 ~ file: AccountPopover.js:38 ~ AccountPopover ~ isAuthenticated", isAuthenticated)
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {
        isLoading &&
        <div>Loading ...</div>
      }
      {isAuthenticated && <>
        <IconButton
          onClick={handleOpen}
          sx={{
            p: 0,
            ...(open && {
              '&:before': {
                zIndex: 1,
                content: "''",
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}
        >
          <Avatar src={user.picture} alt="photoURL" />
        </IconButton>

        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1.5,
              ml: 0.75,
              width: 180,
              '& .MuiMenuItem-root': {
                typography: 'body2',
                borderRadius: 0.75,
              },
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {user.email}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack sx={{ p: 1 }}>
            {MENU_OPTIONS.map((option) => (
              <MenuItem key={option.label} onClick={() => handleClose(option.label)}>
                <Link to={option.link} style={{ textDecoration: 'none' }}>{option.label}</Link>
              </MenuItem>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <MenuItem onClick={() => logout({ returnTo: window.location.origin })} sx={{ m: 1 }}>
            Logout
          </MenuItem>
        </Popover>
      </>}
    </>
  );
}
