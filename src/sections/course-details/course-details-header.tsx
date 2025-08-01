import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import BarChartIcon from '@mui/icons-material/BarChart';
import { ArrowBack, FileDownloadOutlined } from '@mui/icons-material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {
  Box,
  Chip,
  Grid,
  Stack,
  Button,
  Typography,
  IconButton,
  CircularProgress,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';

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
  const navigate = useRouter();
  const { handleDownload, downloading } = useDownload();
  const { visitorRelated } = useSelector((state: reduxState) => state.appSettings);
  const [consultformOpen, setConsultformOpen] = useState<boolean>(false);
  const [enrolling, setEnrolling] = useState<boolean>(false);

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
  const handleEnrollNow = async () => {
    if (!visitorRelated) {
      setEnrolling(true);
      setConsultformOpen(true);
    }
  };

  const afterFillForm = async () => {
    if (!enrolling) {
      const payload: downloadCourse = {
        syllabus_link: course.syllabus_link,
        resource_type: 'raw',
      };
      await handleDownload(downloadCourseSyllabus, payload, `${course.course_name}syllabus.pdf`);
      setEnrolling(false);
    }
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
                <IconButton
                  onClick={() => {
                    navigate.back();
                  }}
                >
                  <ArrowBack />
                </IconButton>
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
                  color="secondary"
                  sx={{
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
                  onClick={handleEnrollNow}
                >
                  Enroll Now
                </Button>
                {course.syllabus_link && (
                  <Button
                    variant="outlined"
                    sx={{
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
                )}
              </Stack>
            </motion.div>
          </Stack>
        </Grid>

        {/* Right Section - Video Thumbnail */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div variants={itemVariants}>
            <Box
              component="img"
              src={course.course_image_link ?? ''}
              alt={course.course_name}
              sx={{
                height: 1,
                objectFit: 'fill',
                borderRadius: 2,
                minHeight: 340,
              }}
            />
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
