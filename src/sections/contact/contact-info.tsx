import React from 'react';
import { motion } from 'framer-motion';

import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Card, Typography, CardContent } from '@mui/material';

const ContactInfoCard: React.FC = () => {
  // Framer Motion variants for the main card animation
  const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  // Framer Motion variants for each detail row (optional: for staggered animation)
  const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card
        sx={{
          backgroundColor: '#fff',
          borderRadius: 4, // Equivalent to theme.shape.borderRadius * 2
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          padding: 3,
          maxWidth: 400,
        }}
      >
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          {' '}
          {/* Remove default padding */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <InfoIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" fontWeight="bold">
              Contact Information
            </Typography>
          </Box>
          {/* Address */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  backgroundColor: 'primary.light', // theme.palette.primary.light
                  color: 'primary.contrastText', // theme.palette.primary.contrastText
                  borderRadius: '50%',
                  p: 1, // Padding
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40, // theme.spacing(4)
                  height: 40, // theme.spacing(4)
                }}
              >
                <LocationOnIcon />
              </Box>
              <div>
                <Typography variant="subtitle1" fontWeight="bold">
                  Address
                </Typography>
                <Typography variant="body2">CyberEdu India, 123 Cyber Street</Typography>
                <Typography variant="body2">Pune, Maharashtra 411001</Typography>
                <Typography variant="body2">India</Typography>
              </div>
            </Box>
          </motion.div>
          {/* Phone */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                  borderRadius: '50%',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                }}
              >
                <PhoneIcon />
              </Box>
              <div>
                <Typography variant="subtitle1" fontWeight="bold">
                  Phone
                </Typography>
                <Typography variant="body2">+91 98765 43210</Typography>
                <Typography variant="body2">+91 87654 32109</Typography>
              </div>
            </Box>
          </motion.div>
          {/* Email */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                  borderRadius: '50%',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                }}
              >
                <EmailIcon />
              </Box>
              <div>
                <Typography variant="subtitle1" fontWeight="bold">
                  Email
                </Typography>
                <Typography variant="body2">info@cyberedus.com</Typography>
                <Typography variant="body2">admissions@cyberedus.com</Typography>
              </div>
            </Box>
          </motion.div>
          {/* Office Hours */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              {' '}
              {/* No mb for the last item */}
              <Box
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                  borderRadius: '50%',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                }}
              >
                <AccessTimeIcon />
              </Box>
              <div>
                <Typography variant="subtitle1" fontWeight="bold">
                  Office Hours
                </Typography>
                <Typography variant="body2">Mon - Sat: 9:00 AM - 7:00 PM</Typography>
                <Typography variant="body2">Sunday: Closed</Typography>
              </div>
            </Box>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfoCard;
