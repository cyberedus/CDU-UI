import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import BarChartIcon from '@mui/icons-material/BarChart';
import { FileDownloadOutlined } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Chip, Grid, Stack, Button, Typography, CircularProgress } from '@mui/material';

import { useDownload } from 'src/hooks/useDownload';

import { downloadCourseSyllabus } from 'src/redux/index.async';

import DialogSlide from 'src/components/dialog/slide-dialog';

import { ConsultForm } from '../common';

interface CourseDetailHeaderPropTypes {
  course: Course;
}
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CourseDetailsHeader = ({ course }: CourseDetailHeaderPropTypes) => {
  const { handleDownload, downloading } = useDownload();
  const { visitorRelated } = useSelector((state: reduxState) => state.appSettings);
  const [consultformOpen, setConsultformOpen] = useState<boolean>(false);

  const downloadSyllabus = async () => {
    if (!visitorRelated) {
      setConsultformOpen(true);
    } else {
      const payload: downloadCourse = {
        syllabus_link: course.syllabus_link,
        resource_type: 'raw',
      };
      await handleDownload(downloadCourseSyllabus, payload, `${course.course_name}syllabus.pdf`);
    }
  };

  const afterFillForm = async () => {
    const payload: downloadCourse = {
      syllabus_link: course.syllabus_link,
      resource_type: 'raw',
    };
    await handleDownload(downloadCourseSyllabus, payload, `${course.course_name}syllabus.pdf`);
  };
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Grid
        container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        alignItems="center"
        justifyContent="space-between"
        direction={{
          xs: 'column-reverse',
          sm: 'column-reverse',
          md: 'row',
        }}
        rowGap={2}
      >
        {/* Left Section - Course Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={{ xs: 2, md: 3 }} sx={{ pr: { md: 4 } }}>
            <motion.div variants={itemVariants}>
              <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
                <Chip
                  key={1}
                  label={course.level}
                  color="primary"
                  sx={{ bgcolor: '#e0f7fa', color: '#007bb2', fontWeight: 'bold' }}
                />
                {course.tags?.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    sx={{ borderColor: '#e0e0e0', color: '#616161', fontWeight: 'bold' }}
                  />
                ))}
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                {course.course_name}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                {course.course_description}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap" rowGap={1}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <AccessTimeIcon sx={{ color: '#616161' }} />
                  <Typography variant="body2" sx={{ color: '#616161' }}>
                    {course.duration}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <BarChartIcon sx={{ color: '#616161' }} />
                  <Typography variant="body2" sx={{ color: '#616161' }}>
                    {course.level}
                  </Typography>
                </Stack>
                {course.certificate_included && (
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <WorkspacePremiumIcon sx={{ color: '#616161' }} />
                    <Typography variant="body2" sx={{ color: '#616161' }}>
                      Certificate Included
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#1976d2', // Primary Blue
                    '&:hover': {
                      bgcolor: '#1565c0', // Darker blue on hover
                    },
                    py: 1.5,
                    px: 4,
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#bdbdbd',
                    color: '#616161',
                    '&:hover': {
                      borderColor: '#9e9e9e',
                      color: '#424242',
                    },
                    py: 1.5,
                    px: 4,
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={downloading}
                  startIcon={
                    downloading ? (
                      <CircularProgress color="inherit" size={15} />
                    ) : (
                      <FileDownloadOutlined />
                    )
                  }
                  onClick={downloadSyllabus}
                >
                  Download Syllabus
                </Button>
              </Stack>
            </motion.div>
          </Stack>
        </Grid>

        {/* Right Section - Video Thumbnail */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '16 / 9', // Standard video aspect ratio
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                backgroundImage: `url('/images/image_429246.png')`, // Replace with actual path or use <img>
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))', // Dark overlay
                  borderRadius: '16px',
                },
                position: 'relative',
              }}
            >
              <Box
                component="img"
                src="/images/image_429246.png" // Update this path to where your image is served
                alt="Certified Ethical Hacker (CEH) Course Thumbnail"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  position: 'absolute',
                  zIndex: 0, // Ensure it's behind the overlay
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1, // Ensure logo is above the overlay
                  p: 2, // Padding for the logo/text inside
                  // Add specific styling for the "PLANETS" logo if it's an SVG or text
                }}
              >
                {/* You might embed the "PLANETS" logo as an SVG or an image here */}
                {/* For now, just a placeholder */}
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                  PLANETS
                </Typography>
                {/* You could add a play button icon here */}
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      {!visitorRelated && (
        <DialogSlide
          maxWidth="md"
          id="consultForm"
          open={consultformOpen}
          setOpen={setConsultformOpen}
          title="Get Your Free Career Consultation"
        >
          <ConsultForm afterFillForm={afterFillForm} />
        </DialogSlide>
      )}
    </Box>
  );
};

export default CourseDetailsHeader;
