import React from 'react';

import { Box } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import TestimonialsHeader from '../testimonials-header';

const TestimonialsView = () => {
  console.log('testimonials');
  return (
    <DashboardContent maxWidth="xl" sx={{ height: 'calc(100vh - 100px)' }}>
      <TestimonialsHeader />
      <Box textAlign="center" mt={4}>
        All Testimonials coming soon – stay tuned for expert insights and updates!
      </Box>
    </DashboardContent>
  );
};

export default TestimonialsView;
