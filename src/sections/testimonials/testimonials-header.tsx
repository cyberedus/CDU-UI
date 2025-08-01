import React from 'react';
import { motion } from 'framer-motion';

import { Grid, Typography } from '@mui/material';

const titleVariants: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const TestimonialsHeader = () => (
  <Grid textAlign="center">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={titleVariants}
    >
      <Grid container gap={1} justifyContent="center" alignItems="center">
        <Typography
          variant="h1"
          component="h1"
          sx={[
            (theme) => ({
              background: `linear-gradient(to right, ${theme.vars.palette.common.black}, ${theme.vars.palette.common.black})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              color: 'transparent',
            }),
          ]}
        >
          Student
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={[
            (theme) => ({
              background: `linear-gradient(to right, ${theme.vars.palette.secondary.dark},  ${theme.vars.palette.secondary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              color: 'transparent',
            }),
          ]}
        >
          Success Stories
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
        Discover how our graduates have transformed their careers with CyberEdu{`'`}s cutting-edge
        cybersecurity and development programs
      </Typography>
    </motion.div>
  </Grid>
);

export default TestimonialsHeader;
