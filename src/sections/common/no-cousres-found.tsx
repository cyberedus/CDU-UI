import React from 'react';
import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Using a Material-UI icon for the magnifier

const NoCoursesFound = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh', // Adjust as needed for your layout
      textAlign: 'center',
      p: 3,
    }}
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <SearchIcon sx={{ fontSize: 100, color: '#90CAF9' }} />{' '}
      {/* Large, light blue magnifier icon */}
    </motion.div>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Typography variant="h5" component="h2" sx={{ mt: 3, fontWeight: 'bold' }}>
        No courses found
      </Typography>
    </motion.div>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
        Try adjusting your search criteria or filters.
      </Typography>
    </motion.div>
  </Box>
);

export default NoCoursesFound;
