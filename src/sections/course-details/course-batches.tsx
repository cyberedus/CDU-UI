import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import BatchCard from './batch-card';

const CourseBatches = ({ course }: CourseProps) => (
  <Box>
    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', ml: 2 }}>
      Upcoming Batches
    </Typography>
    <Grid container spacing={2} flexWrap="wrap" rowGap={{ xs: 2, md: 1 }}>
      {course.batches.map((batch: CourseBatch) => (
        <Grid key={'bat-' + batch.batch_id} size={{ xs: 12, sm: 6, lg: 3.5 }}>
          <BatchCard batch={batch} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default CourseBatches;
