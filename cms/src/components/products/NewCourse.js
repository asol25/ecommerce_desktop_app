import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography } from '@mui/material';
import React from 'react';
import * as apis from '../../apis/apis';
import Iconify from '../iconify/Iconify';
import HtmlEditor from '../_HtmlEditor';

export default function NewCourse(props) {
  const [title, setTitle] = React.useState('active');
  const [description, setDescription] = React.useState('yes');
  const [thumbnailUrl, setThumbnailUrl] = React.useState(null);
  const [overviews, setOverviews] = React.useState('');
  const [oldPrice, setOldPrice] = React.useState(null);
  const [newPrice, setNewPrice] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleThumbnailUrl = (event) => {
    setThumbnailUrl(event.target.value);
  };

  const handleChangeNewPrice = (event) => {
    setNewPrice(event.target.value);
  };

  const handleChangeOldPrice = (event) => {
    setOldPrice(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (status) => {
    if (status) {
      const response = await apis.courses.createCourse({
        title,
        description,
        thumbnailUrl,
        newPrice,
        oldPrice,
      });

      const { data } = await response;
      if (data && status === 200) {
        props.onHandleSussesUploadVideo(!props.stateSusses);
      }
    }
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleClickOpen}>
        New Courses
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>New Course</DialogTitle>
        <DialogContent sx={{ py: 3 }}>
          <TextField
            sx={{ my: 3 }}
            fullWidth
            label="title-course"
            id="fullWidth"
            onChange={(event) => handleChangeTitle(event)}
          />
          <TextField
            sx={{ my: 3 }}
            fullWidth
            label="description-course"
            id="fullWidth"
            onChange={(event) => handleChangeDescription(event)}
          />
          <Typography>Overviews-course</Typography>
          <HtmlEditor onChange={(event) => event} value={overviews} setValue={setOverviews} />
          <TextField
            sx={{ my: 3 }}
            fullWidth
            label="thumbnailUrl-course"
            id="fullWidth"
            onChange={(event) => handleThumbnailUrl(event)}
          />
          <TextField
            sx={{ my: 3 }}
            fullWidth
            label="oddPrice-course"
            id="fullWidth"
            onChange={(event) => handleChangeOldPrice(event)}
          />
          <TextField
            sx={{ my: 3 }}
            fullWidth
            label="newPrice-course"
            id="fullWidth"
            onChange={(event) => handleChangeNewPrice(event)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
