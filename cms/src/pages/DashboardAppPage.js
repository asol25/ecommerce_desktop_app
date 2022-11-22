import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import axios from 'axios';
import Iconify from '../components/iconify';
// sections
import {
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import * as apis from '../apis/apis'
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const [chartLabelsFlowMonth, setChartLabelsFlowMonth] = React.useState([]);
  const [chartDataIntoChartLabelsFlowMonth, setChartDataIntoChartLabelsFlowMonth] = React.useState([]);
  const [chartInformation, setChartInformation] = React.useState({});

  React.useEffect(() => {
    let isChecked = true;

    if (isChecked) {
      const fetchData = async () => {
        const month = new Date().getMonth();
        const response = await apis.analytic.getAnalyticFlowNowMonth(month);
        const { data, status } = await response;
        if (status === 200 && data.length > 0) {
          data.map((node) => {
            const convertDate = new Date(node.date).toLocaleDateString("en-US");
            return [
              setChartLabelsFlowMonth(oldArray => [...oldArray, convertDate]),
              setChartDataIntoChartLabelsFlowMonth(oldArray => [...oldArray, node.sales])
            ];
          })
        }
      }

      const fetchInformation = async () => {
        try {
          const urls = apis.dashboard.urls();
          console.log(urls);
          const data = await Promise.all(urls.map(url => axios.get(url).catch(err => err)))
          setChartInformation(data.map((node) => node.data))
        } catch (err) {
          console.log(err)
        }
      }

      fetchData();
      fetchInformation();
    }

    return () => {
      isChecked = false;
    }
  }, []);
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          {
            chartInformation[0] && chartInformation[1] && chartInformation[2] ?
              <>
                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Weekly Sales" total={chartInformation[0]} icon={'ant-design:android-filled'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="New Users" total={chartInformation[1]} color="info" icon={'ant-design:apple-filled'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Item Orders" total={chartInformation[2]} color="warning" icon={'ant-design:windows-filled'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
                </Grid>
              </>
              : null

          }

          {
            chartLabelsFlowMonth && chartDataIntoChartLabelsFlowMonth ?
              <Grid item xs={12} md={6} lg={8}>
                <AppWebsiteVisits
                  title="Bought Courses"
                  subheader="(+43%) than now month"
                  chartLabels={chartLabelsFlowMonth}
                  chartData={[
                    {
                      name: 'Month',
                      type: 'column',
                      fill: 'solid',
                      data: chartDataIntoChartLabelsFlowMonth,
                    },
                  ]}

                />
              </Grid> : null
          }

          {
            chartInformation[3] ? <Grid item xs={12} md={6} lg={4}>
              <AppCurrentVisits
                title="Current Visits"
                chartData={chartInformation[3]}
                chartColors={[
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.warning.main,
                  theme.palette.error.main,
                ]}
              />
            </Grid> : null
          }

          {
            chartInformation[4] ? <Grid item xs={12} md={6} lg={8}>
              <AppConversionRates
                title="Conversion Rates"
                subheader="(+43%) than last year"
                chartData={chartInformation[4]}
              />
            </Grid> : null
          }

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
