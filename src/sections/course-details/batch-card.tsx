import React from 'react';
import { motion } from 'framer-motion';

import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/LaptopMac';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, Card, styled, Typography, CardContent } from '@mui/material';

// Props for the individual BatchCard
interface BatchCardProps {
  batch: CourseBatch;
}

// Styled component for the icon-text pair
const IconTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
  marginBottom: theme.spacing(1),
}));

// Individual Batch Card Component
const BatchCard: React.FC<BatchCardProps> = ({ batch }) => {
  const { duration, format, mode, internship, batch_name } = batch;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ flexShrink: 0 }} // Prevent cards from shrinking too much
    >
      <Card sx={{ minWidth: 280, maxWidth: 300, borderRadius: 2, boxShadow: 3, m: 1.5 }}>
        {/* Added margin for spacing between cards */}
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
             {batch_name}
          </Typography>
          <IconTextContainer>
            <CalendarMonthIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Duration: {duration}
            </Typography>
          </IconTextContainer>

          <IconTextContainer>
            <ScheduleIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Format: {format}
            </Typography>
          </IconTextContainer>

          <IconTextContainer>
            <LaptopIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Mode: {mode}
            </Typography>
          </IconTextContainer>

          <IconTextContainer>
            <SchoolIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Internship: {internship}
            </Typography>
          </IconTextContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BatchCard;
