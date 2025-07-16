import React from 'react';
import { motion } from 'framer-motion';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Card, Typography, CardContent } from '@mui/material';

const ContactInfoCard: React.FC<ContactDetialsProps> = ({ conatctDetails }) => {
  // Framer Motion variants for each detail row (optional: for staggered animation)
  const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <Card>
      <CardContent>
        {/* Remove default padding */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          {/* <InfoIcon color="primary" sx={{ mr: 1 }} /> */}
          <Typography variant="h4"> Contact Information</Typography>
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
              <Typography variant="body2">{conatctDetails.address}</Typography>
              {/* <Typography variant="body2">Pune, Maharashtra 411001</Typography>
              <Typography variant="body2">India</Typography> */}
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
              <Typography variant="body2">{conatctDetails.phone_number}</Typography>
              <Typography variant="body2">{conatctDetails.alternate_phone_number}</Typography>
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
              <Typography variant="body2">{conatctDetails.email}</Typography>
              <Typography variant="body2">{conatctDetails.alternate_email}</Typography>
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
              <Typography variant="body2">{conatctDetails.office_hours}</Typography>
              <Typography variant="body2">Sunday: Closed</Typography>
            </div>
          </Box>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;
