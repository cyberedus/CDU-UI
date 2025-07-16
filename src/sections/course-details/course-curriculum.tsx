import React from 'react';
import { motion } from 'framer-motion';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  List,
  Paper,
  ListItem,
  Accordion,
  Typography,
  ListItemIcon,
  ListItemText,
  AccordionSummary,
  AccordionDetails,
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

const CourseCurriculum: React.FC<CourseProps> = ({ course }) => {
  // State to manage which accordion is expanded.
  // 'panelX' corresponds to the index of the module.
  const [expandedPanel, setExpandedPanel] = React.useState<string | false>('panel0'); // Expand the first one by default

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '60vh', // Adjust as needed
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 'lg',
          borderRadius: '12px',
          bgcolor: '#fff',
          overflow: 'hidden',
          p: { xs: 2, md: 4 }, // Padding inside the paper
        }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 'bold', color: '#333', mb: { xs: 2, md: 4 } }}
          >
            Course Curriculum
          </Typography>
        </motion.div>

        {course.curriculum.map((module, index) => (
          <motion.div key={module.topic_title} variants={itemVariants} style={{ paddingTop: 7 }}>
            <Accordion
              expanded={expandedPanel === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              elevation={0} // Remove shadow for a flatter look
              sx={{
                border: '1px solid #e0e0e0', // Light border
                borderRadius: '8px',
                mb: 1.5, // Margin between accordions
                '&:last-of-type': { mb: 0 }, // No margin for the last one
                '&:before': {
                  // Remove default accordion line
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '0 0 12px 0', // Keep consistent margin when expanded
                  '&:last-of-type': { mb: 0 },
                  borderRadius: '8px', // Ensure border radius stays when expanded
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#616161' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: expandedPanel === `panel${index}` ? '#fafafa' : '#fff', // Slightly grey when expanded
                  borderRadius: '8px',
                  minHeight: { xs: 48, md: 64 }, // Adjust height
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                    '&.Mui-expanded': {
                      margin: '12px 0',
                    },
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {module.topic_title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 1, pb: 2, px: 2, borderTop: '1px solid #eee' }}>
                <List sx={{ pt: 0 }}>
                  {module.subtopics.map((topic) => (
                    <ListItem key={topic} sx={{ py: 0.5, pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 'unset', mr: 1, color: '#616161' }}>
                        • {/* Custom bullet point */}
                      </ListItemIcon>
                      <ListItemText
                        primary={topic}
                        sx={{ '& .MuiListItemText-primary': { color: '#555' } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Paper>
    </Box>
  );
};

export default CourseCurriculum;
