import type { AppDispatch } from 'src/redux';

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { getSingleCourse } from 'src/redux/async/courses/courses.async';

import { LoadingScreen } from 'src/components/loading-screen';

import CourseDetailsOverview from '../details';
import CourseDetailsHeader from '../course-details-header';

const defCourse: Course = {
  id: 0,
  course_name: '',
  overview_points: [],
  level: 'Beginner',
  topics_count: 0,
  certificate_included: false,
  syllabus_link: null,
  on_dashboard: false,
  course_category: '',
  duration: '',
  price: '',
  course_image_link: null,
  tags: [],
  course_description: '',
  course_tagline: '',
  what_you_will_learn: [],
  career_opportunities: [],
  tools_and_technologies: [],
  curriculum: [],
  course_icon: '',
  batches: [],
};
export function CourseDetailsView() {
  const dispatch = useDispatch<AppDispatch>();
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course>(defCourse);
  const [loader, setLoader] = useState(false);

  const getCourseDetail = async () => {
    setLoader(true);
    const payload: getCoursePayload = {
      id: courseId,
    };
    const res = await dispatch(getSingleCourse(payload));
    if (res.meta.requestStatus === 'fulfilled') {
      const data = res.payload.data;
      setCourse(data[0]);
      setLoader(false);
    } else {
      setLoader(false);
    }
  };
  useEffect(() => {
    if (courseId) {
      console.log('courseId');
      getCourseDetail();
    }
  }, [courseId]);

  return (
    <DashboardContent maxWidth="xl">
      {loader ? (
        <LoadingScreen />
      ) : (
        <>
          <Grid container sx={{ pb: 3 }}>
            <CourseDetailsHeader course={course} />
          </Grid>
          <Grid container sx={{ pb: 3 }}>
            <CourseDetailsOverview course={course} />
          </Grid>
        </>
      )}
    </DashboardContent>
  );
}
