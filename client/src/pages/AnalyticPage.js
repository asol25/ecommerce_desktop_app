import { Helmet } from 'react-helmet-async';
import { useState, useEffect, React } from 'react';
// @mui
import { Container, Typography, styled, InputAdornment, OutlinedInput, alpha } from '@mui/material';
// components
// mock
import AnalyticCourse from '../components/Analytic/AnalyticCourse';
import Iconify from '../components/iconify/Iconify';
import * as apis from '../apis/apis';
// ----------------------------------------------------------------------
const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.customShadows.z8,
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));
export default function AnalyticPage() {
  const [analytic, setAnalytic] = useState([]);
  const [searchNameCourse, setSearchCourse] = useState('');


  const handleFilterByusername = (event) => {
    setSearchCourse(event.target.value);
  };

  useEffect(() => {
    let isChecked = true;

    if (isChecked) {
      const fetchData = async () => {
        const response = await apis.analytic.find();
        const { data, status } = response;
        if (status === 200 && data.length > 0) {
          setAnalytic(data);
        }
      }
      fetchData();
    }
    return () => {
      isChecked = false;
    }
  }, []);
  return (
    <>
      <Helmet>
        <title> Dashboard: Analytic | Minimal UI </title>
      </Helmet>

      <Container sx={{ p: 3 }} >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Analytic
        </Typography>

        <StyledSearch sx={{ mb: 3 }}
          value={searchNameCourse}
          onChange={handleFilterByusername}
          placeholder="Search course..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />

        {
          analytic.length > 0 ? <AnalyticCourse analytic={analytic} search={searchNameCourse}/> : null
        }
      </Container>
    </>
  );
}
