import React, { useMemo } from 'react'; // Import React for JSX
import { motion } from 'framer-motion';

import { AccessTime, WorkspacePremium, MenuBook as MenuBookIcon } from '@mui/icons-material';
import { Box, Card, Chip, Grid, Alert, Avatar, Typography, CardContent } from '@mui/material';

import { getCourseIcon, getCourseColor } from 'src/utils/course-helper';

import { fDate } from 'src/utils';

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
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        elevation={1}
      >
        <Box sx={{
          marginBottom: '30px',
          position: 'relative',
          height: 240,
          display: 'flex',
          justifyContent: 'center'
        }}>

          <Box component='img' src={course.course_image_link ?? '/assets/images/cover/cover-1.webp'} width={1} height={1} sx={{
            borderRadius: '0px 0 50% 50%',
            position: 'absolute',
            left: 0
          }} />
          <Box sx={{
            borderRadius: '0px 0 49% 49%',
            position: 'absolute',
            background: (theme) => theme.palette.primary.main,
            zIndex: -1,
            top: 0,
            left: 8,
            right: 8,
            height: 253,
          }} />
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            p: {
              xs: 0,
              sm: 2,
              lg: 4,
            },
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
            {course.course_description}
          </Typography>

          <Box mt={1}>
            <Typography sx={{ mr: 0.4 }} variant="subtitle1">
              Tools and Technologies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course?.tools_and_technologies?.join(', ')}
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography sx={{ mr: 0.4 }} variant="subtitle1">
              What You{`'`}ll Learn
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.what_you_will_learn}
            </Typography>
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
              label={`${course.topics_count} Lessons`}
              icon={<MenuBookIcon />}
              size="small"
            // sx={{ bgcolor: `${getColor}.lighter`, color: `${getColor}.dark` }}
            />

            <Chip
              label={course.duration}
              icon={<AccessTime />}
              size="small"
            // sx={{ bgcolor: `${getColor}.lighter`, color: `${getColor}.dark` }}
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
          )}
        </CardContent>
        <CourseFooter course={course} />
      </Card>
    </Box>
  );
}
