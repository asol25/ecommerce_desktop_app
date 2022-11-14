import * as React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import VideoCard from './Video';
import VideoSteamCard from './VideoLive';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});


export function VideoContainerList({
  open,
  handleClose,
  videos
}) {
  const [videoLive, setVideoLive] = React.useState();

  React.useEffect(() => {
    setVideoLive(videos[0]);
  }, [videos])

  const handleSetVideoLive = (video) => {
    setVideoLive(video);
  }
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <ThemeProvider theme={darkTheme}>
          <AppBar sx={{ position: 'relative' }} color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Course
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <Grid container sx={{ mt: 5 }} justifyContent="center"
          alignItems="flex-start">
          <Grid item xs={12} md={8} sx={{ pr: 2 }}>
            <Item><VideoSteamCard video={videoLive} /></Item>
          </Grid>
          <Grid container rowSpacing={2} justifyContent="center"
            alignItems="center" item md={4}>
            {videos.map((video) => (
              <Grid item key={video.id}>
                <Item ><VideoCard video={video} handleVideoLive={handleSetVideoLive} /></Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
