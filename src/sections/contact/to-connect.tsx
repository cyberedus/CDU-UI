import React from 'react';
import { motion } from 'framer-motion';

import PeopleIcon from '@mui/icons-material/People';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Card, Button, styled, Typography, CardContent } from '@mui/material';

// Styled components for consistent styling
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: 4,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  backgroundColor: '#fff', // White background
  border: '1px solid #f0f0f0', // Light border
  height: '100%', // Ensure cards have equal height
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#e0f2f7', // Light blue background for the icon circle
  borderRadius: '50%',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const ContactOptions: React.FC = () => {
  const cardVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gap: 3,
        padding: { xs: 0, md: 3 },
        maxWidth: '1200px',
        margin: 'auto',
        borderRadius: 2,
      }}
    >
      {/* WhatsApp Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <StyledCard>
          <IconWrapper>
            <WhatsAppIcon sx={{ fontSize: 40, color: '#25D366' }} /> {/* WhatsApp green */}
          </IconWrapper>
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
              WhatsApp
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
              Quick questions? Chat with us on WhatsApp for instant responses.
            </Typography>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                sx={{
                  backgroundColor: '#2196f3', // Blue color for consistency
                  '&:hover': {
                    backgroundColor: '#1976d2',
                  },
                  textTransform: 'none',
                  padding: '10px 20px',
                  borderRadius: '25px',
                }}
                fullWidth
              >
                Chat Now
              </Button>
            </motion.div>
          </CardContent>
        </StyledCard>
      </motion.div>

      {/* Video Call Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <StyledCard>
          <IconWrapper>
            <VideocamIcon sx={{ fontSize: 40, color: '#f44336' }} /> {/* Red for video */}
          </IconWrapper>
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
              Video Call
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
              Schedule a personalized video consultation with our experts.
            </Typography>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="contained"
                startIcon={<VideocamIcon />}
                sx={{
                  backgroundColor: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#1976d2',
                  },
                  textTransform: 'none',
                  padding: '10px 20px',
                  borderRadius: '25px',
                }}
                fullWidth
              >
                Book a Call
              </Button>
            </motion.div>
          </CardContent>
        </StyledCard>
      </motion.div>

      {/* Visit Us Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <StyledCard>
          <IconWrapper>
            <PeopleIcon sx={{ fontSize: 40, color: '#3f51b5' }} /> {/* Blue for people/visit */}
          </IconWrapper>
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
              Visit Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
              Come say hello! Our team is ready to welcome you at our campus.
            </Typography>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="contained"
                startIcon={<LocationOnIcon />}
                sx={{
                  backgroundColor: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#1976d2',
                  },
                  textTransform: 'none',
                  padding: '10px 20px',
                  borderRadius: '25px',
                }}
                fullWidth
              >
                Get Directions
              </Button>
            </motion.div>
          </CardContent>
        </StyledCard>
      </motion.div>
    </Box>
  );
};

export default ContactOptions;
