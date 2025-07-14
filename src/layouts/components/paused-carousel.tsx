import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '@mui/material/styles';
import { Box, IconButton, MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// Framer Motion variants for slide animation
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    position: 'absolute', // Ensures exiting slide doesn't affect layout during animation
    width: '100%', // Important for absolute positioning
  }),
};

interface CustomCarouselProps {
  autoPlayInterval?: number; // Optional: interval for auto-play in ms (default: 3000ms)
  children: React.ReactNode[];
}

export const CustomPausedCarousel: React.FC<CustomCarouselProps> = ({
  autoPlayInterval = 3000,
  children = [],
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(0); // 0 for initial, 1 for next, -1 for previous
  const [isHovered, setIsHovered] = useState(false); // New state for hover status

  const maxSteps = children.length; // Use children.length to determine maxSteps

  // Handle next slide
  const handleNext = () => {
    setDirection(1);
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  // Handle previous slide
  const handleBack = () => {
    setDirection(-1);
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  // Auto-play effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isHovered && maxSteps > 1) {
      // Only auto-play if not hovered and more than one slide
      timer = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [activeStep, autoPlayInterval, isHovered, maxSteps]); // Add isHovered and maxSteps to dependencies

  return (
    <Box
      sx={{
        flexGrow: 1,
        mx: 'auto',
        mt: 4,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: 3,
        height: 'auto',
        // Event handlers for pause/resume on hover
        '&:hover': {
          cursor: 'pointer', // Indicate that it's interactive
        },
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hovered to false on mouse leave
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            // position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children[activeStep]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          px: 1,
          zIndex: 1,
        }}
      >
        <IconButton
          onClick={handleBack}
          disabled={maxSteps <= 1} // Disable if only one slide
          sx={{ bgcolor: 'rgba(255,255,255,0.7)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={maxSteps <= 1} // Disable if only one slide
          sx={{ bgcolor: 'rgba(255,255,255,0.7)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
      </Box>

      {/* Dots Indicator */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<div />}
        backButton={<div />}
        sx={{
          bgcolor: 'background.paper',
          justifyContent: 'center',
          p: 2,
        }}
      />
    </Box>
  );
};
