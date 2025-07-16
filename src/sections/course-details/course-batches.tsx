import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import BatchCard from './batch-card';

const CourseBatches = ({ course }: CourseProps) => {
  console.log();
  return (
    <Box px={4}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Upcoming Batches
      </Typography>
      <Grid container spacing={3}>
        {course.batches.map((batch: CourseBatch) => (
          <Grid key={'bat-' + batch.batch_id} size={{ xs: 12, sm: 4, md: 3 }}>
            <BatchCard batch={batch} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseBatches;
