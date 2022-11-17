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


function descendingComparator(a, b, orderBy) {
  if (typeof a[orderBy] === 'object') {
    const values = Object.values(a[orderBy]);
    a[orderBy] = values.toString();
    b[orderBy] = values.toString();
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  if (query) {
    return array.filter((element) => element.course.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

function Row(props) {
  const { row } = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('comments');
  const [isCheckedOrder, setIsCheckedOrder] = React.useState(false);

  const handleRequestSort = (order, property) => {
    const isAsc = order
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setIsCheckedOrder(!isCheckedOrder);
  };

  const [open, setOpen] = React.useState(false);
  const filterVideos = row.videos ? applySortFilter(row.videos, getComparator(order, orderBy, null)) : null;
  console.log(filterVideos);
  return (
    <>
      <TableRow sx={{ '& > *': {} }}>
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
          {row.course}
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
                  <TableRow sx={{ cursor: 'pointer' }}>
                    <TableCell onClick={() => handleRequestSort(isCheckedOrder, "createdDate")}>Date</TableCell>
                    <TableCell onClick={() => handleRequestSort(isCheckedOrder, "title")}>Course</TableCell>
                    <TableCell onClick={() => handleRequestSort(isCheckedOrder, "comments")} align="right">Comments</TableCell>
                    <TableCell  align="right">Views</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterVideos.map((video) => {
                    return (
                      <TableRow key={video.id} onClick={() => () => handleRequestSort(isCheckedOrder, "title")}>
                        <TableCell component="th" scope="row">
                          {video.createdDate}
                        </TableCell>
                        <TableCell>{video.title}</TableCell>
                        <TableCell align="right">{video.comments}</TableCell>
                        <TableCell align="right">
                          {993}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function AnalyticCourse({ analytic, search }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('course');
  const [isCheckedOrder, setIsCheckedOrder] = React.useState(false);

  const handleRequestSort = (order, property) => {
    const isAsc = order
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setIsCheckedOrder(!isCheckedOrder);
  };

  const filterSort = analytic ? applySortFilter(analytic, getComparator(order, orderBy), search) : null;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ cursor: 'pointer' }}>
            <TableCell />
            <TableCell onClick={() => handleRequestSort(isCheckedOrder, "course")} >Course</TableCell>
            <TableCell onClick={() => handleRequestSort(isCheckedOrder, "viewCount")} align="right">Views</TableCell>
            <TableCell onClick={() => handleRequestSort(isCheckedOrder, "bookingCount")} align="right">Bookings</TableCell>
            <TableCell onClick={() => handleRequestSort(isCheckedOrder, "watchTime")} align="right">Like</TableCell>
            <TableCell >Dislike</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterSort.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
