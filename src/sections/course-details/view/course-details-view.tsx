import type { AppDispatch } from 'src/redux';

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { getSingleCourse } from 'src/redux/async/courses/courses.async';

import { LoadingScreen } from 'src/components/loading-screen';
import { SomethingWentWrong } from 'src/components/went-wrong';

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
  course_key: '',
  batches: [],
};
export function CourseDetailsView() {
  const dispatch = useDispatch<AppDispatch>();
  const { courseKey } = useParams();
  const [course, setCourse] = useState<Course>(defCourse);
  const [loader, setLoader] = useState(false);

  const getCourseDetail = async () => {
    setLoader(true);
    const payload: getCoursePayload = {
      course_key: courseKey,
    };
    const res = await dispatch(getSingleCourse(payload));
    if (res.meta.requestStatus === 'fulfilled') {
      const data = res.payload.data[0];
      setCourse(data);
      setLoader(false);
    } else {
      setLoader(false);
    }
  };
  useEffect(() => {
    if (courseKey) {
      getCourseDetail();
    }
  }, [courseKey]);

  return (
    <DashboardContent sx={{ minHeight: 'calc(100vh - 100px)', p: 0 }}>
      {loader ? (
        <LoadingScreen />
      ) : (
       course ?  <>
          <Grid container sx={{ pb: 3 }}>
            <CourseDetailsHeader course={course} />
          </Grid>
          <Grid container sx={{ pb: 3 }}>
            <CourseDetailsOverview course={course} />
          </Grid>
        </> : <SomethingWentWrong/>
      )}
    </DashboardContent>
  );
}
