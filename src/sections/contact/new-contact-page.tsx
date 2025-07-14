import React from 'react';
import { motion } from 'framer-motion';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Link, Grid, Paper, Typography, IconButton } from '@mui/material';

import { ConsultForm } from '../common';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// For a custom color scheme, you'd typically use MUI's createTheme
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#FF7F4B', // Example orange from the image
//     },
//     // ... other colors
//   },
// });

const ContactUsPage: React.FC = () => (
  <Box sx={{ minHeight: '100vh', pb: 4 }}>
    {/* Header Section */}
    <Box
      sx={{
        backgroundColor: '#FF7F4B',
        color: 'white',
        py: 8,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div variants={itemVariants}>
        <Grid container justifyContent="center" textAlign="center" gap={1}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Get in
          </Typography>
          <Typography
            variant="h2"
            sx={[
              (theme) => ({
                background: `linear-gradient(to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                color: 'transparent',
                // mb: { xs: 3, md: 4 },
              }),
            ]}
          >
            Touch
          </Typography>
        </Grid>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Ready to start your journey? We{`'`}re here to help you every step of the way
        </Typography>
      </motion.div>
      {/* <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.2 }}>
          <img src="/path/to/world-map.svg" alt="World Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box> */}
    </Box>
    {/* <Grid size={{ xs: 12 }}>
      <Stack spacing={{ xs: 2 }}>
        <motion.div variants={itemVariants}>
          <Grid container justifyContent="center" textAlign="center" gap={1}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              Get in
            </Typography>
            <Typography
              variant="h2"
              sx={[
                (theme) => ({
                  background: `linear-gradient(to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.secondary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  color: 'transparent',
                  // mb: { xs: 3, md: 4 },
                }),
              ]}
            >
              Touch
            </Typography>
          </Grid>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="body1" sx={{ color: '#555', textAlign: 'center' }}>
            Ready to start your journey? We{`'`}re here to help you every step of the way
          </Typography>
        </motion.div>
      </Stack>
    </Grid> */}
    {/* Contact Cards Section */}
    <Grid container spacing={3} justifyContent="center" sx={{ px: 2, mt: -6 }}>
      <Grid
        size={{
          xs: 12,
          sm: 6,
          md: 3.5,
        }}
        zIndex={1}
        height={1}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2, height: 1 }}>
            <IconButton
              color="primary"
              sx={{
                mb: 2,
                backgroundColor: '#FFF5EC',
                '&:hover': { backgroundColor: '#FFEDDB' },
              }}
            >
              <LocationOnIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Zora@Halifax
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              5415 Spring Garden Rd.
            </Typography>
            <Typography variant="body2">Halifax, NS, B3A 0B1</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              +1 902 403 9833
            </Typography>
          </Paper>
        </motion.div>
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 6,
          md: 3.5,
        }}
        zIndex={1}
        height={1}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2, height: 1 }}>
            <IconButton
              color="primary"
              sx={{
                mb: 2,
                backgroundColor: '#FFF5EC',
                '&:hover': { backgroundColor: '#FFEDDB' },
              }}
            >
              <LocationOnIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Zora@Las Vegas
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              317 S. 6th St.
            </Typography>
            <Typography variant="body2">Las Vegas, NV 89101</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              +1 702 605 0067
            </Typography>
          </Paper>
        </motion.div>
      </Grid>

      <Grid
        size={{
          xs: 12,
          sm: 6,
          md: 3.5,
        }}
        zIndex={1}
        height={1}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, height: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              General Contacts
            </Typography>
            <Typography variant="body2">
              Inquiries:{' '}
              <Link href="mailto:hello@zora.io" color="primary">
                hello@zora.io
              </Link>
            </Typography>
            <Typography variant="body2">
              Careers:{' '}
              <Link href="mailto:careers@zora.io" color="primary">
                careers@zora.io
              </Link>
            </Typography>
            <Typography variant="body2">
              Media:{' '}
              <Link href="mailto:pr@zora.io" color="primary">
                pr@zora.io
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Support:{' '}
              <Link href="mailto:help@zora.io" color="primary">
                help@zora.io
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              +1 702 605 0067
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <IconButton aria-label="facebook">
                <FacebookIcon color="primary" />
              </IconButton>
              <IconButton aria-label="twitter">
                <TwitterIcon color="primary" />
              </IconButton>
              <IconButton aria-label="linkedin">
                <LinkedInIcon color="primary" />
              </IconButton>
            </Box>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>

    {/* Send Message & Media Contact Section */}
    <Grid container spacing={4} justifyContent="center" sx={{ px: 2, mt: 6 }}>
      {/* Send us a Message Form */}
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <ConsultForm buttonTitle="Send Message" />
          </Paper>
        </motion.div>
      </Grid>

      {/* Media Contact Information */}
      <Grid size={{ xs: 12, md: 4 }}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Media Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              If you are writing an article or reviewing our product, we{`'`}d love to talk to you
              and provide you with specific information, images or other assets to meet your needs.
            </Typography>
            <Link href="#" variant="body2" sx={{ mt: 2, display: 'block' }}>
              View our PR Page
            </Link>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  </Box>
  // </ThemeProvider>
);

export default ContactUsPage;
