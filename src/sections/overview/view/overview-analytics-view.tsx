import type { AppDispatch } from 'src/redux';

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';

import { setIsOpenTalk } from 'src/redux/index.slices';
import { DashboardContent } from 'src/layouts/dashboard';
import { getDashboardDetails } from 'src/redux/async/dashboard/dashboard.async';

import HomePageHeader from '../landing-side-page';
import { ReadyToStart } from '../../common/index';
import { HiringPartners } from '../features/partners';
import { PopularCourses } from '../course/PopularCourses';
import { CyberEduFeatures } from '../features/CyberEduFeatures';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [courseList, setCourseList] = useState<CourseList>([]);
  const [hiringPartners, setHiringPartners] = useState<Company[]>([]);

  const getDashboardDetailsData = async () => {
    try {
      setLoading(true);
      const res: any = await dispatch(getDashboardDetails());
      if (res.meta.requestStatus === 'fulfilled') {
        const data = res.payload.data.courses;
        const hiring = res.payload.data.hiringPartners;
        setCourseList(data);
        setHiringPartners(hiring);
        setLoading(false);
      } else {
        console.error(res);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardDetailsData();

    return () => {
      dispatch(setIsOpenTalk(false));
    };
  }, []);

  return (
    <DashboardContent maxWidth="xl" sx={{ pb: 3 }}>
      <Grid container sx={{ pb: 3 }}>
        <HomePageHeader />
      </Grid>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" minHeight={200}>
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid container spacing={3} sx={{ pt: 1 }}>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.5 }}>
              <AnalyticsWidgetSummary
                title="Students Trained"
                percent={0}
                total={200}
                nextSign="+"
                icon={<img alt="Students Trained" src="/assets/icons/glass/ic-glass-users.svg" />}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.5 }}>
              <AnalyticsWidgetSummary
                title="Placement Rate"
                percent={-0.1}
                total={97.5}
                nextSign="%"
                color="secondary"
                icon={<img alt="Placement Rate" src="/assets/icons/glass/ic-glass-buy.svg" />}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.5 }}>
              <AnalyticsWidgetSummary
                title="Industry Partners"
                percent={2.8}
                total={40}
                nextSign="+"
                color="warning"
                icon={<img alt="Industry Partners" src="/assets/icons/glass/ic-glass-buy.svg" />}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.5 }}>
              <AnalyticsWidgetSummary
                title="Success Rate"
                percent={3.6}
                total={100}
                nextSign="%"
                color="error"
                icon={<img alt="Success Rate" src="/assets/icons/glass/ic-glass-message.svg" />}
              />
            </Grid>

            {/* End */}
            {/* <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentVisits
            title="Current visits"
            chart={{
              series: [
                { label: 'America', value: 3500 },
                { label: 'Asia', value: 2500 },
                { label: 'Europe', value: 1500 },
                { label: 'Africa', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsConversionRates
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentSubject
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

            {/* <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsTrafficBySite title="Traffic by site" list={_traffic} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid> */}
          </Grid>

          <Grid container spacing={3}>
            <CyberEduFeatures />
          </Grid>
          <Grid container spacing={3}>
            <PopularCourses courses={courseList} />
          </Grid>
          <Grid container spacing={3}>
            <ReadyToStart />
          </Grid>
          <Grid container spacing={3} width={1}>
            <HiringPartners hiringPartners={hiringPartners} />
          </Grid>
        </>
      )}
    </DashboardContent>
  );
}
