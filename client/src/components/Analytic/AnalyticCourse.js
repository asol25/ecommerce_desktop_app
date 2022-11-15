import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.course.title}
        </TableCell>
        <TableCell align="right">{row.viewCount}</TableCell>
        <TableCell align="right">{row.bookingCount}</TableCell>
        <TableCell align="right">{row.watchTime}</TableCell>
        <TableCell align="right">{4}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Videos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell align="right">Comments</TableCell>
                    <TableCell align="right">Views</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.videos.map((video) => (
                    <TableRow key={video.id}>
                      <TableCell component="th" scope="row">
                        {video.createdDate}
                      </TableCell>
                      <TableCell>{video.title}</TableCell>
                      <TableCell align="right">{video.comments}</TableCell>
                      <TableCell align="right">
                        {993}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function AnalyticCourse({ analytic }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Course (Title)</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Bookings</TableCell>
            <TableCell align="right">Like</TableCell>
            <TableCell align="right">Dislike</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {analytic.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
