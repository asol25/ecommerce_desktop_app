import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React from 'react';

import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import * as apis from '../../apis/apis';
import storage from '../../apis/firebaseConfig';
import Iconify from '../iconify/Iconify';
import HtmlEditor from '../_HtmlEditor';

export default function NewCourse(props) {
  const [title, setTitle] = React.useState('active');
  const [description, setDescription] = React.useState('yes');
  const [thumbnailUrl, setThumbnailUrl] = React.useState(null);
  const [overviews, setOverviews] = React.useState('');
  const [oldPrice, setOldPrice] = React.useState(0);
  const [newPrice, setNewPrice] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState([]);
  const [category, setCategory] = React.useState();
  const [errors, setErrors] = React.useState('');
  const { isCheckedNewCoursesSussecfuly, onChange } = props;
  const [isLoading, setIsLoading] = React.useState(false);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleThumbnailUrl = (event) => {
    const avatarRef = `/files/avatars/`;
    const avatarStorageRef = ref(storage, avatarRef + event.target.files[0].name);
    const uploadTask = uploadBytesResumable(avatarStorageRef, event.target.files[0]);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setIsLoading(true);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setIsLoading(false);
          setThumbnailUrl(url);
        });
      }
    );
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
    if (status === false) {
      setDescription('')
      setThumbnailUrl(null)
      setOverviews('')
      setOldPrice(0)
      setNewPrice(0)
      setOpen(false);
      setErrors('');
      return;
    }

    console.log("🚀 ~ file: NewCourse.js:70 ~ handleClose ~ oldPrice", description.length)
    if (title.length < 5) {
      setErrors('Title invalid limit 5 to 50 character')
      return;
    }

    if (description.length < 50) {
      setErrors('Description invalid limit 50 to 100 character')
      return;
    }

    if (Number(oldPrice) < 0 || Number(oldPrice) === null) {
      setErrors('Old Price invalid must large zero')
      return;
    }

    if (Number(newPrice) < 0 || Number(newPrice) === null) {
      setErrors("New Price invalid must be less than zero")
      return;
    }

    if (thumbnailUrl === '') {
      setErrors('Must provide a thumbnail')
      return;
    }

    if (status) {
      const response = await apis.courses.createCourse({
        title,
        description,
        thumbnailUrl,
        overviews,
        newPrice,
        oldPrice,
        category
      });
      const { data, status } = await response;
      if (status === 200) {
        onChange(!isCheckedNewCoursesSussecfuly)
        setOpen(false);
      }
      setErrors("The process create Course have errors pls try again");
    }
  };

  React.useEffect(() => {
    let isChecked = true;
    if (isChecked) {
      const fetchData = async () => {
        const res = await apis.categorys.find();
        const { data, status } = res;
        setAge(data);
      }

      fetchData();
    }

    return () => {
      isChecked = false;
    }
  }, [open])
  console.log("🚀 ~ file: NewCourse.js:218 ~ NewCourse ~ thumbnailUrl", thumbnailUrl)

  return (
    <>
      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleClickOpen}>
        New Courses
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>New Course</DialogTitle>
        <DialogContent sx={{ py: 3 }}>
          {
            errors ? <Alert variant="outlined" severity="error" sx={{ marginRight: "20px" }}>
              {errors}
            </Alert> : null
          }
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
          <Stack direction="row" alignItems="center" spacing={2} border="1px solid #C1C1C1" justifyContent={'center'} alignContent="center" marginTop={4} borderRadius={"9px"}>
            {isLoading === false ? thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt="nices"
                loading="lazy"
              />
            ) : <Box marginY={"50px"}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" type="file" onChange={(event) => handleThumbnailUrl(event)} />
              </Button>
            </Box> :
              <Box marginY={"50px"}>
                <CircularProgress />
              </Box>
            }
          </Stack>
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

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small"
            fullWidth
          >
            <InputLabel id="demo-select-small">Category</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                age.length > 0 ?
                  age.map((node) => <MenuItem key={node.id} value={node.id}>{node.name}</MenuItem>) : null
              }
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Add</Button>
        </DialogActions>
      </Dialog >
    </>
  );
}
