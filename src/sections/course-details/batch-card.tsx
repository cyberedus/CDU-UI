import React from 'react';
import { motion } from 'framer-motion';

import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/LaptopMac';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, Card, styled, Typography, CardContent } from '@mui/material';

// Define the interface for a single batch item
export interface BatchData {
  id: string; // Add an ID for key prop when mapping
  startDate: string;
  time: string;
  mode: string;
  instructor: string;
}

// Props for the individual BatchCard
interface BatchCardProps {
  batch: BatchData;
}

// Styled component for the icon-text pair
const IconTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

// Individual Batch Card Component
const BatchCard: React.FC<BatchCardProps> = ({ batch }) => {
  const { startDate, time, mode, instructor } = batch;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ flexShrink: 0 }} // Prevent cards from shrinking too much
    >
      <Card sx={{ minWidth: 280, maxWidth: 300, borderRadius: 2, boxShadow: 3, m: 1.5 }}>
        {' '}
        {/* Added margin for spacing between cards */}
        <CardContent>
          <IconTextContainer>
            <CalendarMonthIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Start Date: {startDate}
            </Typography>
          </IconTextContainer>

          <IconTextContainer>
            <ScheduleIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Time: {time}
            </Typography>
          </IconTextContainer>

          <IconTextContainer>
            <LaptopIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Mode: {mode}
            </Typography>
          </IconTextContainer>

          <IconTextContainer>
            <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1" color="text.secondary">
              Instructor: {instructor}
            </Typography>
          </IconTextContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BatchCard;
