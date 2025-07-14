import React, { useMemo } from 'react'; // Import React for JSX
import { motion } from 'framer-motion';

import { Box, Card, Chip, Grid, Avatar, Typography, CardContent } from '@mui/material';
import {
  Laptop,
  AccessTime,
  WorkspacePremium,
  MenuBook as MenuBookIcon,
} from '@mui/icons-material';

import { getCourseIcon, getCourseColor } from 'src/utils/course-helper';

import { CourseFooter } from 'src/sections/common';

// Define the props interface for the component
type CourseCardProps = {
  course: Course;
  variants: any;
};

// Use a standard function declaration
export default function CourseCard({ course, variants }: Readonly<CourseCardProps>) {
  const getColor = useMemo(() => getCourseColor(course.level), [course]);

  const GetCourseIcon = useMemo(() => getCourseIcon(course.course_category), [course]);
  return (
    <Box
      component={motion.div}
      variants={variants}
      whileHover={{
        y: -8,
        boxShadow: '0px 20px 30px rgba(0,0,0,0.1)',
        borderRadius: 30,
      }}
      whileTap={{ scale: 0.98 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          borderRadius: 4,
          p: {
            xs: 0,
            sm: 1,
            lg: 2,
          },
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        elevation={1}
      >
        <CardContent
          sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', borderRadius: 4 }}
        >
          <Grid container gap={2} alignItems="left" flexWrap="nowrap">
            <Avatar sx={{ bgcolor: 'grey.300', color: `common.black`, mb: 2 }}>
              <GetCourseIcon />
            </Avatar>

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

          <Typography
            className="line-clamp-5"
            variant="body2"
            color="text.secondary"
            textAlign="left"
            sx={{ flexGrow: 0, mb: 2 }}
          >
            {course.course_overview}
          </Typography>

          <Box
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
              label={`${course.lesson_count} Lessons`}
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
          </Box>
        </CardContent>
        <CourseFooter course={course} isHome />
      </Card>
    </Box>
  );
}
