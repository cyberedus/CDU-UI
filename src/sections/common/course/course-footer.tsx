import type { AppDispatch } from 'src/redux';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FileDownloadOutlined } from '@mui/icons-material';
import { Box, Button, CircularProgress } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { useDownload } from 'src/hooks/useDownload';

import { setInterestedCourse } from 'src/redux/index.slices';
import { downloadCourseSyllabus } from 'src/redux/index.async';

import DialogSlide from 'src/components/dialog/slide-dialog';

import ConsultForm from '../user-consult/consult-form';

interface CourseFooterProps {
  course: Course;
  isHome?: boolean;
}
const CourseFooter = ({ course, isHome }: CourseFooterProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleDownload, downloading } = useDownload();
  const { visitorRelated } = useSelector((state: reduxState) => state.appSettings);
  const [consultformOpen, setConsultformOpen] = useState<boolean>(false);
  const router = useRouter();

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

  const handleNavigateView = () => {
    dispatch(setInterestedCourse(course.course_name));
    router.push(isHome ? `/courses/${course.id}` : `${course.id}`);
  };
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'text.secondary',
          gap: 1,
          my: 3,
          px: 2,
        }}
      >
        {course.syllabus_link && (
          <Button
            size="small"
            variant="outlined"
            color="warning"
            onClick={downloadSyllabus}
            disabled={downloading}
            startIcon={
              downloading ? (
                <CircularProgress color="inherit" size={15} />
              ) : (
                <FileDownloadOutlined />
              )
            }
          >
            Syllabus
          </Button>
        )}
        <Button color="secondary" size="small" onClick={handleNavigateView}>
          View Details
        </Button>
      </Box>
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

export default CourseFooter;
