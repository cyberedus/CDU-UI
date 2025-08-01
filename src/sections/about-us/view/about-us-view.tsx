import React from 'react';
import { motion } from 'framer-motion';

import { Box, Grid, Typography, Stack, Avatar, Card, CardContent } from '@mui/material';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const mentors = [
  { name: 'Ankita Sharma', role: 'Senior Mentor - Data Science', img: '/images/ankita.jpg' },
  { name: 'Rahul Mehra', role: 'Mentor - Full Stack', img: '/images/rahul.jpg' },
  { name: 'Neha Verma', role: 'Career Coach', img: '/images/neha.jpg' },
];

const AboutUsPage = () => {
    console.log("sd")
  return (
    <Box sx={{ width: 1, py: 5 }}>
      <Grid
        container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        spacing={4}
        justifyContent="center"
        textAlign="center"
      >
        {/* ABOUT SECTION */}
        <Grid size = {{xs:12}}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={(theme) => ({
                background: `linear-gradient(to right, ${theme.vars.palette.common.black}, ${theme.vars.palette.common.black})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              })}
            >
              About
            </Typography>
            <Typography
              variant="h1"
              sx={(theme) => ({
                background: `linear-gradient(to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.secondary.light})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              })}
            >
              Us
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h6" sx={{ color: '#666', maxWidth: 750, mx: 'auto', mt: 2 }}>
              We are committed to providing quality education and hands-on experience through expert mentors,
              industry-backed curriculum, and personalized support to help you reach your career goals.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', maxWidth: 800, mx: 'auto', mt: 3 }}>
              Our mission is to bridge the gap between academia and the industry by equipping students with the
              right skills, mindset, and tools required for the evolving tech landscape. From foundational learning
              to advanced real-world projects, we ensure our learners are prepared for challenges in their careers.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', maxWidth: 800, mx: 'auto', mt: 2 }}>
              Whether you{`'`}re a beginner or looking to upskill, our structured programs are designed to meet diverse
              learning needs. With support that extends beyond course completion — including resume building,
              mock interviews, and career counseling — we walk every step of your journey with you.
            </Typography>
          </motion.div>
        </Grid>

        {/* MENTORS SECTION */}
        <Grid size = {{xs:12}}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={(theme) => ({
                background: `linear-gradient(to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.secondary.light})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              })}
            >
              Meet Our Mentors
            </Typography>
          </motion.div>
        </Grid>

        {mentors.map((mentor, index) => (
          <Grid size={{xs:12, sm:6, md:4}}  key={index}>
            <motion.div variants={itemVariants}>
              <Card sx={{ py: 3 }}>
                <Stack spacing={2} alignItems="center">
                  <Avatar
                    src={mentor.img}
                    alt={mentor.name}
                    sx={{ width: 100, height: 100 }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {mentor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mentor.role}
                    </Typography>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUsPage;
