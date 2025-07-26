import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'primereact/carousel';

import { Box, Grid, Typography } from '@mui/material';

import { responsiveOptions } from 'src/utils/course-helper';

const titleVariants: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export const HiringPartners = ({ hiringPartners }: HiringPartnersProps) => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <Box
      sx={{
        pt: 0,
        textAlign: 'center',
        width: 1,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        <Grid container gap={1} textAlign="center" justifyContent="center" alignItems="center">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Our
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
                background: `linear-gradient(to right, #1250A3, #5C86D5)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                color: 'transparent',
              }}
          >
            Hiring Partners
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
            mb: 1,
            color: '#666',
            fontSize: 27.2,
          }}
        >
          What makes us different from other institutes
        </Typography>
      </motion.div>

      <Carousel
        value={hiringPartners}
        numVisible={5}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={1000}
        itemTemplate={(partner: Company) => (
          <Grid py={2} m={2} height={1}>
            <Box
              key={partner.name}
              sx={{
                flexShrink: 0,
                height: '4rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => handleClick(partner.website_url)}
            >
              {/* Inner div to apply grayscale and hover effects */}
              <Box
                sx={{
                  width: '8rem', // Corresponds to Tailwind w-32 (128px)
                  height: '4rem', // Corresponds to Tailwind h-16 (64px)
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'grayscale(100%)', // Initial grayscale
                  transition: 'filter 0.5s ease-in-out', // Transition for grayscale
                  '&:hover': {
                    filter: 'grayscale(0%)', // Remove grayscale on hover
                  },
                  position: 'relative', // For absolute positioning of images
                }}
              >
                {/* Black and white image */}
                <Box
                  component="img"
                  src={partner.logo_url}
                  alt={`${partner.name} BW`}
                  sx={{
                    display: 'block',
                    width: 'auto',
                    height: '3rem', // Corresponds to Tailwind h-12 (48px)
                    objectFit: 'contain',
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: 1, // Initially visible
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                {/* Color image, initially hidden, visible on hover */}
                <Box
                  component="img"
                  src={partner.logo_url}
                  alt={`${partner.name} Color`}
                  sx={{
                    display: 'block',
                    width: 'auto',
                    height: '3rem',
                    objectFit: 'contain',
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: 0, // Initially hidden
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="color-logo" // Add a class for direct CSS targeting if needed
                />
              </Box>
            </Box>
          </Grid>
        )}
      />
    </Box>
  );
};
