import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import { Box } from '@mui/material';

export const InfinityCarousel: React.FC<infinityCarouselProps> = ({
  children,
  width = 128,
  gap = 64,
}) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array to create a seamless loop
  const duplicatedPartners = [...children];

  const itemWidth = width; // 8rem in pixels
  const gapWidth = gap; // 16gap in pixels
  const totalItemAndGapWidth = itemWidth + gapWidth; // 192px

  const contentWidthToScroll = children.length * totalItemAndGapWidth; // Total width of one set of partners

  useEffect(() => {
    const startAnimation = async () => {
      controls.start({
        x: -contentWidthToScroll,
        transition: {
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    };

    if (!isHovered) {
      startAnimation();
    } else {
      controls.stop(); // Stop the animation on hover
    }

    return () => {
      controls.stop(); // Clean up animation on unmount
    };
  }, [controls, isHovered, contentWidthToScroll]);

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden', // Hides overflowing content
        py: 4, // Padding top/bottom
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '64px', // Equivalent to Tailwind 'gap-16' (16 * 4px = 64px)
          width: `${duplicatedPartners.length * totalItemAndGapWidth}px`, // Set a large enough width for all duplicated content
          minWidth: '100%', // Ensure it takes at least 100% width
          alignItems: 'center',
          flexShrink: 0, // Prevent flex items from shrinking
        }}
        component={motion.div}
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedPartners}
      </Box>
    </Box>
  );
};
