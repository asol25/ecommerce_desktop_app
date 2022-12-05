import * as React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography } from '@mui/material';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Iconify from '../iconify';
import storage from '../../apis/firebaseConfig';
import * as apis from '../../apis/apis';

export default function NewVideos(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [videoUrl, setVideoUrl] = React.useState('');
  const [videoThumbnail, setVideoThumbnail] = React.useState('');
  const [percent, setPercent] = React.useState(0);

  const thumbnailRef = `/files/images/`;
  const videoRef = `/files/videos/`;

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeVideoUrl = (event) => {
    const videoStorageRef = ref(storage, videoRef + event.target.files[0].name);
    const uploadTask = uploadBytesResumable(videoStorageRef, event.target.files[0]);
    handleUploading(uploadTask, setVideoUrl);
  };

  const handleChangeVideoThumbnail = (event) => {
    const thumbnailStorageRef = ref(storage, thumbnailRef + event.target.files[0].name);
    console.log(thumbnailStorageRef);
    const uploadTask = uploadBytesResumable(thumbnailStorageRef, event.target.files[0]);
    handleUploading(uploadTask, setVideoThumbnail);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUploading = (uploadTask, setUrl) => {
    setUrl(undefined);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        setPercent(progress);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
        });
      }
    );
  };

  const handleClose = async (status) => {
    if (status) {
      await apis.videos.createVideo({ title, description, videoThumbnail, videoUrl }, props.courseId);
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
          {percent ? <Typography>progress: {percent}%</Typography> : null}
          <TextField
            sx={{ my: 3 }}
            fullWidth
            label="title-video"
            id="fullWidth"
            onChange={(event) => handleChangeTitle(event)}
          />
          <TextField
            sx={{ my: 3 }}
            fullWidth
            label="description-video"
            id="fullWidth"
            onChange={(event) => handleChangeDescription(event)}
          />
          <Button sx={{ mr: 3 }} variant="contained" component="label">
            Upload ThumbnailUrl
            <input hidden accept="image/*" type="file" onChange={(event) => handleChangeVideoThumbnail(event)} />
          </Button>

          <Button variant="contained" component="label">
            Upload Videos
            <input hidden accept="video/*" multiple type="file" onChange={(event) => handleChangeVideoUrl(event)} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
