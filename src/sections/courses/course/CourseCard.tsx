import React, { useMemo } from 'react'; // Import React for JSX
import { motion } from 'framer-motion';

import { Box, Card, Chip, Grid, Avatar, Typography, CardContent } from '@mui/material';
import {
  Timer,
  Laptop,
  DateRange,
  AccessTime,
  WorkspacePremium,
  MenuBook as MenuBookIcon,
} from '@mui/icons-material';

import { fDate } from 'src/utils/format-time';
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
      key={course.id}
    >
      <Card
        sx={{
          borderRadius: 4,
          p: {
            xs: 0,
            sm: 1,
            lg: 1,
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
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
          }}
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
              mt={1}
            >
              {course.course_name}
            </Typography>
          </Grid>
          {/* <Grid>

            <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
              {course.course_name}
            </Typography>
          </Grid> */}

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
                color="info"
                size="small"
                sx={{ mb: 2, alignSelf: 'flex-start' }}
              />
            )}
          </Grid>

          <Typography
            textAlign="left"
            className="line-clamp-5"
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            {course.course_overview}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <DateRange sx={{ fontSize: 16, mr: 0.4 }} />
            <Typography sx={{ mr: 0.4 }} variant="body1">
              Start Date :
            </Typography>
            <Typography variant="body2">{fDate(course.start_date, 'DD/MM/YYYY')}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Timer sx={{ fontSize: 16, mr: 0.4 }} />
            <Typography sx={{ mr: 0.4 }} variant="body1">
              Start Time :
            </Typography>
            <Typography variant="body2">{course.batch_timing}</Typography>
          </Box>
          <Box mt={1}>
            <Typography sx={{ mr: 0.4 }} variant="subtitle1">
              Tools and Technologies
            </Typography>
            <Typography variant="body2">{course?.tools_and_technologies?.join(', ')}</Typography>
          </Box>
          <Box mt={1}>
            <Typography sx={{ mr: 0.4 }} variant="subtitle1">
              What You{`'`}ll Learn
            </Typography>
            <Typography variant="body2">{course.what_you_will_learn}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              color: 'text.secondary',
              gap: 1,
              mt: 2,
              flexWrap: 'wrap',
            }}
          >
            <Chip
              label={`${course.lesson_count} Lessons`}
              icon={<MenuBookIcon />}
              size="small"
              // sx={{ bgcolor: `${getColor}.lighter`, color: `${getColor}.dark` }}
            />
            <Chip
              label={`${course.mode}`}
              icon={<Laptop />}
              size="small"
              // sx={{ bgcolor: `${getColor}.lighter`, color: `${getColor}.dark` }}
            />
            <Chip
              label={course.duration}
              icon={<AccessTime />}
              size="small"
              // sx={{ bgcolor: `${getColor}.lighter`, color: `${getColor}.dark` }}
            />
            {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MenuBookIcon sx={{ fontSize: 16, mr: 0.5 }} />
              <Typography variant="body2">{course.lesson_count} Lessons</Typography>
            </Box>
            <Typography variant="caption">{40}%</Typography> */}
          </Box>
        </CardContent>
        <CourseFooter course={course} />
      </Card>
    </Box>
  );
}
