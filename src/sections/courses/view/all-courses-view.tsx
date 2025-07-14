import type { AppDispatch } from 'src/redux';

import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import React, { useMemo, useState, useEffect } from 'react';

import { Grid, Typography, CircularProgress } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { getAllCourseList } from 'src/redux/index.async';

import CourseFilter from '../filters';
import { PopularCourses } from '../course/PopularCourses';
import NoCoursesFound from '../../common/no-cousres-found';

const titleVariants: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export function AllCoursesView() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [courseList, setCourseList] = useState<CourseList>([]);
  const [filterList, setFilterList] = useState<CourseList>([]);

  const getDashboardDetailsData = async () => {
    try {
      setLoading(true);
      const res: any = await dispatch(getAllCourseList());
      if (res.meta.requestStatus === 'fulfilled') {
        const data = res.payload.data;
        setLoading(false);
        setCourseList(data);
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
  }, []);

  const onFilterChange = (filteredCoureses: CourseList) => {
    setFilterList(filteredCoureses);
  };

  const renderCourses = useMemo(
    () =>
      filterList.length === 0 && !loading ? (
        <NoCoursesFound />
      ) : (
        <PopularCourses courses={filterList} />
      ),
    [courseList, loading, filterList]
  );

  return (
    <DashboardContent maxWidth="xl">
      <Grid textAlign="center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <Grid container gap={1} justifyContent="center" alignItems="center">
            <Typography
              variant="h1"
              component="h1"
              sx={[
                (theme) => ({
                  background: `linear-gradient(to right, ${theme.vars.palette.common.black}, ${theme.vars.palette.common.black})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  color: 'transparent',
                }),
              ]}
            >
              Our
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={[
                (theme) => ({
                  background: `linear-gradient(to right, ${theme.vars.palette.secondary.dark},  ${theme.vars.palette.secondary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  color: 'transparent',
                }),
              ]}
            >
              Comprehensive Courses
            </Typography>
          </Grid>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={subtitleVariants}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              color: '#666',
              fontSize: 27.2,
            }}
          >
            Choose from our industry-design curriculum with 80% hands-on training, real projects and
            direct placement support
          </Typography>
        </motion.div>
      </Grid>
      <CourseFilter courseList={courseList} onFilterChange={onFilterChange} />
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" minHeight={200}>
          <CircularProgress />
        </Grid>
      ) : (
        renderCourses
      )}
    </DashboardContent>
  );
}

export default AllCoursesView;
