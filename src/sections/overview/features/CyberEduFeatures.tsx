import React from 'react';
import { motion } from 'framer-motion';

import GroupsIcon from '@mui/icons-material/Groups';
import ScienceIcon from '@mui/icons-material/Science';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Box, Grid, Paper, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundColor: string;
}

const features: FeatureItem[] = [
  {
    icon: <ScienceIcon sx={{ fontSize: 40, color: '#FF7043' }} />,
    title: '80% Practical Approach',
    description:
      'Unlike traditional institutes, 80% of our curriculum is hands-on practice with real projects and industry tools.',
    backgroundColor: '#FFF3E0',
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 40, color: '#2563EB' }} />,
    title: 'Real Industry Projects',
    description:
      'Work on actual client projects and build a portfolio that impresses employers from day one.',
    backgroundColor: '#e6efff',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
    title: 'Industry Mentorship',
    description: 'Learn directly from industry professionals currently working in top companies.',
    backgroundColor: '#f3e5f5',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
    title: 'Placement Support',
    description:
      'Comprehensive placement assistance including resume building, interview prep, and direct company connections.',
    backgroundColor: '#e8f5e9',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#FFC107' }} />,
    title: '100% Internship',
    description:
      'Guaranteed internship opportunities with leading cybersecurity firms to kickstart your career.',
    backgroundColor: '#fff8e1',
  },
];

const cardVariants: any = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const titleVariants: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export const CyberEduFeatures = () => (
  <Box
    sx={{
      pt: 4,
      textAlign: 'center',
    }}
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={titleVariants}
    >
      <Grid container gap={1} justifyContent="center" alignItems="center">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Why You Should Choose
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={[
            (theme) => ({
              background: `linear-gradient(to right, ${theme.vars.palette.primary.main}, ${theme.vars.palette.primary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              color: 'transparent',
              // mb: { xs: 3, md: 4 },
            }),
          ]}
        >
          CyberEdu?
        </Typography>
      </Grid>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={subtitleVariants}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 6,
          color: '#666',
          fontSize: 27.2,
        }}
      >
        What makes us different from other institutes
      </Typography>
    </motion.div>

    <Grid container spacing={2} justifyContent="space-between" alignItems="stretch">
      {features.map((feature, index) => (
        <Grid
          key={feature.title}
          size={{
            xs: 12,
            sm: 6,
            md: 2.3,
          }}
          sx={{ height: 'auto' }}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            style={{ height: '100%' }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  backgroundColor: feature.backgroundColor,
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  p: 1.5,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  color: '#333',
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: 'center',
                  color: '#555',
                  flexGrow: 1,
                }}
              >
                {feature.description}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);
