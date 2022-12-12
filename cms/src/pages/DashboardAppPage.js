import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth0 } from "@auth0/auth0-react";

// @mui
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// components
import axios from 'axios';
import Iconify from '../components/iconify';
// sections
import * as apis from '../apis/apis';
import {
  AppConversionRates, AppCurrentVisits, AppTrafficBySite, AppWebsiteVisits, AppWidgetSummary
} from '../sections/@dashboard/app';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const { isAuthenticated, user } = useAuth0();
  const [chartLabelsFlowMonth, setChartLabelsFlowMonth] = React.useState([]);
  const [chartLabelsFlowYear, setChartLabelsFlowYear] = React.useState([]);

  const [chartDataIntoChartLabelsFlowMonth, setChartDataIntoChartLabelsFlowMonth] = React.useState([]);
  const [chartDataIntoChartLabelsFlowYear, setChartDataIntoChartLabelsFlowYear] = React.useState([]);

  const [chartInformation, setChartInformation] = React.useState({});

  React.useEffect(() => {
    let isChecked = true;
    const month = new Date().getMonth() + 1;

    if (isChecked) {
      const fetchData = async () => {
        const response = await apis.analytic.getAnalyticFlowNowMonth(month);
        const result = await apis.analytic.getAnalyticFlowNowYear(1);
        const { data, status } = await response;
        if (response.status === 200 && response.data.length > 0) {
          response.data.map((node) => {
            const convertDate = new Date(node.date).toLocaleDateString("en-US");
            return [
              setChartLabelsFlowMonth(oldArray => [...oldArray, convertDate]),
              setChartDataIntoChartLabelsFlowMonth(oldArray => [...oldArray, node.sales])
            ];
          })
        }

        if (result.data.length > 0 && result.status === 200) {
          result.data.map((node) => {
            const convertDate = new Date(node.date).toLocaleDateString("en-US");
            return [
              setChartLabelsFlowYear(oldArray => [...oldArray, convertDate]),
              setChartDataIntoChartLabelsFlowYear(oldArray => [...oldArray, node.sales])
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
  console.log("🚀 ~ file: DashboardAppPage.js:244 ~ DashboardAppPage ~  process.env.EMAIL", process.env.REACT_APP_VERCEL_ENV_EMAIL)
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      {(isAuthenticated && user.email === (process.env.NEXT_PUBLIC_EMAIL || "usool.203@gmail.com")) ? <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        <Grid container spacing={3}>
          {
            chartInformation[0] && chartInformation[1] && chartInformation[2] ?
              <>
                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Total Users" total={chartInformation[0]} icon={'ant-design:android-filled'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Total Courses" total={chartInformation[1]} color="info" icon={'ant-design:apple-filled'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Item Orders" total={chartInformation[2]} color="warning" icon={'ant-design:windows-filled'} />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary title="Total Money Earn" total={chartInformation[chartInformation.length - 1].totalPrices} color="error" icon={'ant-design:bug-filled'} />
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
              <AppWebsiteVisits
                title="Bought Courses Flow Year"
                subheader="(+43%) than last year"
                chartData={[
                  {
                    name: 'Month',
                    type: 'column',
                    fill: 'solid',
                    data: chartDataIntoChartLabelsFlowYear,
                  },
                ]}
                chartLabels={chartLabelsFlowYear}

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
      </Container> : <>
        <h1>You login invalid</h1>
        <p>Please login incorrect account to using CMS Dashboard</p>
      </>}
    </>
  );
}
