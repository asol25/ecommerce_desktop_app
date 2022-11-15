import { Helmet } from 'react-helmet-async';
import { useState, useEffect, React } from 'react';
// @mui
import { Container, Typography } from '@mui/material';
// components
// mock
import AnalyticCourse from '../components/Analytic/AnalyticCourse';
import * as apis from '../apis/apis';
// ----------------------------------------------------------------------


export default function AnalyticPage() {
  const [analytic, setAnalytic] = useState([]);

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

      <Container sx={{p:3}} >
      <Typography variant="h4" sx={{ mb: 5 }}>
        Analytic
      </Typography>
      {
        analytic.length > 0 ? <AnalyticCourse analytic={analytic} /> : null
      }
    </Container>
    </>
  );
}
