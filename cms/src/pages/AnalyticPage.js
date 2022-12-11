import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from 'react-helmet-async';
// @mui
import { alpha, Container, InputAdornment, OutlinedInput, styled, Typography } from '@mui/material';
// components
// mock
import * as apis from '../apis/apis';
import AnalyticCourse from '../components/analytic/AnalyticCourse';
import Iconify from '../components/iconify/Iconify';
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
  const { isAuthenticated, user } = useAuth0();
  const handleFilterByusername = (event) => {
    setSearchCourse(event.target.value);
  };

  useEffect(() => {
    let isChecked = true;

    if (isChecked) {
      const fetchData = async () => {
        const response = await apis.analytic.find();
        const { data, status } = response;
        if (status === 200) {
          setAnalytic(data);
        }
      };
      fetchData();
    }
    return () => {
      isChecked = false;
    };
  }, []);
  return (
    <>
      <Helmet>
        <title> Dashboard: Analytic | Minimal UI </title>
      </Helmet>

      {(isAuthenticated && user.email === (process.env.EMAIL || "usool.203@gmail.com")) && <>
        <Container sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Analytic
          </Typography>
          <StyledSearch
            sx={{ mb: 3 }}
            value={searchNameCourse}
            onChange={handleFilterByusername}
            placeholder="Search course..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          />

          {analytic.length > 0 ? <AnalyticCourse analytic={analytic} search={searchNameCourse} /> : null}
        </Container>
      </>
      }
    </>
  );
}
