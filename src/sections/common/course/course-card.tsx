import React, { useMemo } from 'react'; // Import React for JSX
import { motion } from 'framer-motion';

import { WorkspacePremium } from '@mui/icons-material';
import { Box, Card, Chip, Grid, Typography, CardContent } from '@mui/material';

import { getCourseColor } from 'src/utils/course-helper';

import { CourseFooter } from 'src/sections/common';

// Define the props interface for the component
type CourseCardProps = {
  course: Course;
  variants: any;
};

// Use a standard function declaration
export default function CourseCard({ course, variants }: Readonly<CourseCardProps>) {
  const getColor = useMemo(() => getCourseColor(course.level), [course]);

  // const GetCourseIcon = useMemo(() => getCourseIcon(course.course_category), [course]);
  return (
    <Box
      component={motion.div}
      variants={variants}
      whileHover={{
        y: -8,
        boxShadow: '0px 20px 30px rgba(0,0,0,0.1)',
        borderRadius: 10,
      }}
      whileTap={{ scale: 0.98 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        elevation={1}
      >
        <Box
          sx={{
            marginBottom: '0px',
            position: 'relative',
            height: 240,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={course.course_image_link ?? '/assets/images/cover/cover-1.webp'}
            alt={course.course_name}
            width={1}
            height={1}
            sx={{
              borderRadius: '0px 0 50% 50%',
              position: 'absolute',
              left: 0,
            }}
          />
          <Box
            sx={{
              borderRadius: '70% 70% 180% 180%',
              position: 'absolute',
              background: (theme) => theme.palette.primary.main,
              zIndex: -1,
              top: 97,
              left: 25,
              right: 25,
              height: 152,
            }}
          />
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            p: {
              xs: 3,
              lg: 4,
            },
            pt: 0,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Chip
              label={course.level}
              color={getColor}
              size="small"
              sx={{ mb: 2, alignSelf: 'flex-start' }}
            />
            {course.certificate_included && (
              <Chip
                label="Certified"
                icon={<WorkspacePremium />}
                size="small"
                color="info"
                sx={{
                  mb: 2,
                  alignSelf: 'flex-start',
                }}
              />
            )}
          </Grid>
          <Grid container gap={2} alignItems="center" flexWrap="nowrap" justifyContent="start">
            <Typography
              variant="h5"
              component="div"
              fontWeight="bold"
              gutterBottom
              textAlign="left"
            >
              {course.course_name}
            </Typography>
          </Grid>
          <Typography
            className="line-clamp-5"
            variant="body2"
            color="text.secondary"
            textAlign="left"
            sx={{ flexGrow: 0, mb: 2 }}
          >
            {course.course_description}
          </Typography>

          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              color: 'text.secondary',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            <Chip
              label={`${course.topics_count} Lessons`}
              icon={<MenuBookIcon />}
              size="small"
              sx={{ alignSelf: 'flex-start' }}
            />
            <Chip
              label={`${course.mode}`}
              icon={<Laptop />}
              size="small"
              sx={{ alignSelf: 'flex-start' }}
            />
            <Chip
              label={course.duration}
              icon={<AccessTime />}
              size="small"
              sx={{ alignSelf: 'flex-start' }}
            />
            {course.upcoming_batch_date && (
              <Chip
                label={`Upcoming Batch: ${fDate(course.upcoming_batch_date)}`}
                color="success"
                variant="outlined"
                size="small"
              />
            )}
          </Box>
          {course.available_seats && (
            <Alert severity="info" sx={{ mt: 2 }}>
              Only {course.available_seats} seats available
            </Alert>
          )} */}
        </CardContent>
        <CourseFooter course={course} isHome />
      </Card>
    </Box>
  );
}
