import { Helmet } from 'react-helmet-async';
import { useState, useEffect, React } from 'react';
// @mui
import { Container, } from '@mui/material';
// components
// mock
import AnalyticCourse from '../components/Analytic/AnalyticCourse';
import * as apis from '../apis/apis';
// ----------------------------------------------------------------------


export default function AnalyticPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Courses | Minimal UI </title>
      </Helmet>

      <Container>
        <AnalyticCourse name={1} calories={1} fat={1} carbs={1} protein={1} price={1}/>
      </Container>
    </>
  );
}
