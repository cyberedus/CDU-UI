import React, { useState } from 'react';

import { Box, Tab, Tabs, Card, CardContent } from '@mui/material';

import CourseBatches from './course-batches';
import CourseOverView from './course-overview';
import CourseCurriculum from './course-curriculum';

interface CourseDetailsOverviewProps {
  course: Course;
}
const CourseDetailsOverview: React.FC<CourseDetailsOverviewProps> = ({ course }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        width: 1,
        pt: 2,
      }}
    >
      <Card
        sx={{
          width: 1,
          borderRadius: '12px',
          overflow: 'hidden', // Ensures inner content respects border radius
        }}
      >
        {/* Tabs Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 0, width: '100%' }}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="course navigation tabs"
              variant="fullWidth"
              sx={{
                width: '100%',
                '& .MuiTabs-indicator': {
                  backgroundColor: 'primary.main',
                },
              }}
            >
            <Tab
              label="Overview"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                color: '#616161', // Blue when selected
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
            <Tab
              label="Curriculum"
              sx={{ textTransform: 'none', fontWeight: 'bold', color: '#616161' }}
            />
            <Tab
              label="Batches"
              sx={{ textTransform: 'none', fontWeight: 'bold', color: '#616161' }}
            />
            {/* <Tab
              label="Fees"
              sx={{ textTransform: 'none', fontWeight: 'bold', color: '#616161' }}
            /> */}
          </Tabs>
        </Box>
        {/* Content Area */}
        <CardContent sx={{ width: 1 }}>
          {tabValue === 0 && <CourseOverView course={course} />}
          {tabValue === 1 && <CourseCurriculum course={course} />}
          {tabValue === 2 && <CourseBatches course={course} />}
        </CardContent>
        {/* You would add content for other tabs (Curriculum, Batches, Fees) here */}
      </Card>
    </Box>
  );
};

export default CourseDetailsOverview;
