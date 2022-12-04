import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
  FormControl,
  Divider,
  Select,
  MenuItem,
} from '@mui/material';
import React from 'react';
import * as user from '../../apis/user';
import Iconify from '../iconify/Iconify';

export function NewUser({ handleSetUser, page }) {
  const [statusSec, setStatus] = React.useState('active');
  const [verified, setVerified] = React.useState('yes');
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleChangeVerified = (event) => {
    setVerified(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (status) => {
    setOpen(false);

    if (status) {
      const response = await user.intertUser(username, password, email, verified, statusSec, page);
      const { data, status } = await response;
      if (status === 200) {
        handleSetUser(data);
      }
    }
  };

  return (
    <div>
      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleClickOpen}>
        New User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <Typography variant="h6" component="h2">
            Username
          </Typography>
          <TextField id="filled-basic" label="Username" variant="filled" onChange={handleUsername} />
          <Typography variant="h6" component="h2">
            Password
          </Typography>
          <Divider />
          <TextField id="filled-basic" label="Filled" variant="filled" onChange={handleChangePassword} />
          <Typography variant="h6" component="h2">
            Email
          </Typography>
          <TextField id="filled-basic" label="Filled" variant="filled" onChange={handleChangeEmail} />
          <Divider />
          <FormControl>
            <Typography variant="h6" component="h2">
              Verified
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={verified}
              label="Age"
              onChange={handleChangeVerified}
            >
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>
          </FormControl>
          <Divider />
          <FormControl>
            <Typography variant="h6" component="h2">
              Status
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={statusSec}
              label="Age"
              onChange={handleChangeStatus}
            >
              <MenuItem value={'active'}>Active</MenuItem>
              <MenuItem value={'banned'}>Banned</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
