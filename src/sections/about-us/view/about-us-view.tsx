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
const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const mentors = [
  { name: 'Ankita Sharma', role: 'Senior Mentor - Data Science', img: '/images/ankita.jpg' },
  {
    name: 'Kaustubhmani Gothivarekar',
    role: 'Managing Head at CyberNeedle Solutions',
    img: '/assets/images/mentors/kaustubhamani-20-20.jpg',
  },
  { name: 'Neha Verma', role: 'Career Coach', img: '/images/neha.jpg' },
];

const AboutUsPage = () => {
  console.log('sd');
  return (
    <Box sx={{ width: 1, pb: 5 }}>
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
        <Grid size={{ xs: 12 }} textAlign="center">
          <motion.div variants={itemVariants}>
            <Grid container justifyContent="center" textAlign="center" gap={1}>
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
                Driven by Purpose, Powered by
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                sx={[
                  (theme) => ({
                    background: `linear-gradient(to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.secondary.light})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    color: 'transparent',
                  }),
                ]}
              >
                Passion
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
                mb: 3,
                color: '#666',
                fontSize: {
                  xs: 17.2,
                  sm: 20.2,
                },
                textAlign: 'center',
              }}
            >
              Ready to start your journey? We{`'`}re here to help you every step of the way
            </Typography>
          </motion.div>
        </Grid>

        <motion.div variants={itemVariants}>
          <Typography variant="h6" sx={{ color: '#666', maxWidth: 750, mx: 'auto', mt: 2 }}>
            We are committed to providing quality education and hands-on experience through expert
            mentors, industry-backed curriculum, and personalized support to help you reach your
            career goals.
          </Typography>
          <Typography variant="body1" sx={{ color: '#444', maxWidth: 800, mx: 'auto', mt: 3 }}>
            Our mission is to bridge the gap between academia and the industry by equipping students
            with the right skills, mindset, and tools required for the evolving tech landscape. From
            foundational learning to advanced real-world projects, we ensure our learners are
            prepared for challenges in their careers.
          </Typography>
          <Typography variant="body1" sx={{ color: '#444', maxWidth: 800, mx: 'auto', mt: 2 }}>
            Whether you{`'`}re a beginner or looking to upskill, our structured programs are
            designed to meet diverse learning needs. With support that extends beyond course
            completion — including resume building, mock interviews, and career counseling — we walk
            every step of your journey with you.
          </Typography>
        </motion.div>
        {/* MENTORS SECTION */}
        <Grid size={{ xs: 12 }}>
          <motion.div variants={itemVariants}>
            <Grid container gap={1} justifyContent="center">
              <Typography
                variant="h2"
                sx={(theme) => ({
                  background: `linear-gradient(to right, ${theme.vars.palette.common.black}, ${theme.vars.palette.common.black})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                })}
              >
                Meet Our
              </Typography>
              <Typography
                variant="h2"
                sx={(theme) => ({
                  background: `linear-gradient(to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.secondary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                })}
              >
                Mentors
              </Typography>
            </Grid>
          </motion.div>
        </Grid>

        {mentors.map((mentor) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={mentor.name}>
            <motion.div variants={itemVariants}>
              <Card sx={{ py: 3 }}>
                <Stack spacing={2} alignItems="center">
                  <Avatar src={mentor.img} alt={mentor.name} sx={{ width: 100, height: 100 }} />
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
