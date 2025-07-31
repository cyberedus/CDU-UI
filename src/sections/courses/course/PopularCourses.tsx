import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { Box, Grid } from '@mui/material';

import { UIDV4 } from 'src/utils/course-helper';

import CourseCard from './CourseCard'; // Make sure the path is correct

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};
interface PopularCourses {
  courses: CourseList;
  [key: string]: any;
}
// Use a standard function declaration
export const PopularCourses = ({ courses }: PopularCourses) => {
  const refreshId = useMemo(() => UIDV4(), [courses]);
  return (
    <Box sx={{ width: 1, textAlign: 'center' }}>
      {/* --- COURSES GRID --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        key={refreshId}
      >
        <Grid container spacing={2} textAlign="left">
          {courses.map((course: Course) => (
            <Grid
              key={course.id}
              size={{
                xs: 12,
                sm: 6,
                lg: 4,
              }}
            >
              <CourseCard course={course} variants={itemVariants} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
      {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={2} textAlign="left">
          <CustomCarousel slides={courses} />
          text
        </Grid>
      </motion.div> */}
    </Box>
  );
};
