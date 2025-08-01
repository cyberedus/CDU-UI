import './courses.style.scss';

import { motion } from 'framer-motion';
import { Carousel } from 'primereact/carousel';

import { Box, Grid, Button, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { responsiveOptionsCourse } from 'src/utils/course-helper';

import CourseCard from 'src/sections/common/course/course-card';
import NoCoursesFound from 'src/sections/common/no-cousres-found';
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

const titleVariants: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

interface PopularCourses {
  courses: CourseList;
  [key: string]: any;
}
// Use a standard function declaration
export const PopularCourses = ({ courses }: PopularCourses) => {
  const router = useRouter();

  const handleGotoCourses = () => {
    router.push('/courses');
  };

  return (
    <Box sx={{ pt: 4, width: 1, textAlign: 'center' }}>
      {/* --- HEADING --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        <Grid container gap={1} justifyContent="center" alignItems="center">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Our Popular
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              background: `linear-gradient(to right, #1250A3, #5C86D5)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Courses
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
            mb: 1,
            color: '#666',
            fontSize: 27.2,
          }}
        >
          Discover industry-leading courses designed by industry Expert
        </Typography>
      </motion.div>

      {/* --- COURSES GRID --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid>
          {courses.length > 0 ? (
            <Carousel
              value={courses}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptionsCourse}
              className="custom-carousel"
              contentClassName="container-carousel"
              autoplayInterval={30000}
              itemTemplate={(course: Course) => (
                <Grid
                  size={{
                    xs: 12,
                    sm: 11,
                    lg: courses.length === 1 ? 4 : 11,
                  }}
                  py={3}
                  pb={5}
                  m={{
                    xs: 0,
                    sm: 2,
                  }}
                  height={1}
                  width={1}
                >
                  <CourseCard course={course} variants={itemVariants} />
                </Grid>
              )}
            />
          ) : (
            <NoCoursesFound />
          )}
        </Grid>
      </motion.div>

      {/* --- EXPLORE BUTTON --- */}
      <Box textAlign="center" sx={{ mt: 2 }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              background: 'linear-gradient(to right, #E77D19, #F5A74D)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(to right, #C76614, #E5943C)',
              },
            }}
            onClick={handleGotoCourses}
          >
            Explore All Courses
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};
