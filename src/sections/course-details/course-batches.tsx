import React from 'react';

import { Box, Typography } from '@mui/material';

import BatchCard from './batch-card';

const CourseBatches = () => {
  console.log();
  return (
    <Box px={4}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Upcoming Batches
      </Typography>

      <BatchCard
        batch={{
          id: 'sdsf',
          startDate: '2025-06-20',
          time: '10:00 - 12:00',
          mode: 'Online',
          instructor: 'John Doe',
        }}
      />
    </Box>
  );
};

export default CourseBatches;
