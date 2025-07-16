import React from 'react';
import { motion } from 'framer-motion';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // For "What You'll Learn"
import {
  Box,
  List,
  Chip,
  Grid,
  Paper,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const CourseOverView = ({ course }: CourseProps) => {
  console.log('');
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 8 }}
      sx={{ p: { xs: 2, md: 4 }, pt: { xs: 3, md: 4 } }}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column - Course Overview */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ pr: { md: 4 } }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
            >
              This course teaches how to:
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <List sx={{ pt: 0 }}>
              {course.overview_points.map((item) => (
                <ListItem key={item} sx={{ py: 0.5, pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 'unset', mr: 1, color: '#616161' }}>
                    • {/* Custom bullet point, or use a proper list item icon if preferred */}
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    sx={{ '& .MuiListItemText-primary': { color: '#555' } }}
                  />
                </ListItem>
              ))}
            </List>
          </motion.div>
        </Box>
        {/* Tools & Technologies */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
            >
              Tools & Technologies
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1, // Space between chips
            }}
            component={motion.div}
            variants={containerVariants}
          >
            {course.tools_and_technologies.map((tool) => (
              <motion.div key={tool} variants={chipVariants}>
                <Chip
                  label={tool}
                  sx={{
                    bgcolor: '#e8f5e9', // Light green for chips
                    color: '#2e7d32', // Dark green text
                    fontWeight: 'bold',
                    '& .MuiChip-icon': {
                      color: '#2e7d32', // Icon color matches text
                    },
                    borderRadius: '6px', // Slightly less rounded corners
                    p: 0.5, // Padding inside chip
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </Box>
      </Grid>

      {/* Right Column */}
      <Grid size={{ xs: 12, md: 6 }}>
        {/* Career Opportunities */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
            >
              Career Opportunities
            </Typography>
          </motion.div>
          <motion.div variants={containerVariants}>
            {/* Nested container for staggered items */}
            {course.career_opportunities.map((role) => (
              <motion.div key={role} variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: '8px',
                    bgcolor: '#f5f5f5', // Light background for roles
                    mb: 1.5,
                    cursor: 'pointer',
                    '&:hover': { bgcolor: '#e0e0e0' },
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#333', fontWeight: 'medium' }}>
                    {role}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </motion.div>
        </Box>
        {/* What You'll Learn */}
        <Box>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}
            >
              What You{`'`}ll Learn
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2, // Space between learn items
            }}
            component={motion.div}
            variants={containerVariants}
          >
            {course.what_you_will_learn.map((topic) => (
              <motion.div key={topic} variants={chipVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    borderRadius: '8px',
                    bgcolor: '#f5f5f5', // Light background
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    flexGrow: 1, // Allows items to grow to fill space
                    flexBasis: 'calc(50% - 8px)', // Approx 2 items per row with gap
                    minWidth: '150px', // Ensure minimum width
                    justifyContent: 'flex-start', // Align content to start
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ color: '#2e7d32', fontSize: '1.2rem' }} />
                  <Typography variant="body2" sx={{ color: '#333', fontWeight: 'medium' }}>
                    {topic}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CourseOverView;
