import React from 'react';
import { motion } from 'framer-motion';

import { Box, Card, Button, styled, Typography, CardContent } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: 2 * 3, // More rounded corners
  boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.08)', // Deeper shadow
  backgroundColor: '#ffffff',
  height: '100%', // Ensure cards have equal height in a grid
  border: '1px solid #f0f0f0',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth transition for hover
  '&:hover': {
    transform: 'translateY(-8px)', // Lift effect on hover
    boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.12)', // Enhanced shadow on hover
  },
}));

// 3. Icon Wrapper for styling the icon
const IconWrapper = styled(Box)<{ iconcolor?: string }>(({ theme, iconcolor }) => ({
  backgroundColor: iconcolor || theme.palette.primary.light, // Use prop color or default primary light
  borderRadius: '50%',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
}));

// 4. Framer Motion Variants for animations
const cardVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0,0,0,0.2)' },
  tap: { scale: 0.95 },
};

// 5. FeatureCard Component Definition
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: IconComponent, // Renamed to avoid conflict with 'icon' prop
  title,
  description,
  buttonText,
  onClick,
  iconColor,
}) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <StyledCard>
      <IconWrapper iconcolor={iconColor}>
        <IconComponent sx={{ fontSize: 50, color: '#ffffff' }} />{' '}
        {/* Icon always white inside colored circle */}
      </IconWrapper>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: buttonText ? 2 : 0 }}>
          {description}
        </Typography>
        {buttonText && onClick && (
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2196f3',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
                textTransform: 'none',
                padding: '10px 25px',
                borderRadius: '25px',
                mt: 2,
              }}
              onClick={onClick}
              fullWidth
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </CardContent>
    </StyledCard>
  </motion.div>
);

export default FeatureCard;
