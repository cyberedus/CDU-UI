import React from 'react';
import { motion } from 'framer-motion';

import { Box, Card, Grid, Stack, Typography, CardContent } from '@mui/material';

import { LoadingScreen } from 'src/components/loading-screen';

import { ConsultForm } from '../common';
import ContactOptions from './to-connect';
import ContactInfoCard from './contact-info';

const ContactHeader = ({ loading, conatctDetails }: ContactDetialsProps) => {
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

  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Grid
        container
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        alignItems="start"
        justifyContent="space-between"
      >
        {/* Left Section - Course Details */}
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
                Get in
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
                Touch
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

        {/* Right Section - Video Thumbnail */}
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Grid size={{ xs: 12 }} container rowGap={3} pb={2}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 0, md: 3 } }}>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent>
                      <Grid container>
                        <Typography variant="h4">Send Us Message</Typography>
                      </Grid>
                      <ConsultForm buttonTitle="Send Message" />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 0, md: 3 } }} height={1}>
                <motion.div variants={itemVariants}>
                  <ContactInfoCard conatctDetails={conatctDetails} />
                </motion.div>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Stack spacing={{ xs: 2 }} pb={3}>
                <motion.div variants={itemVariants}>
                  <Grid container justifyContent="center" textAlign="center" gap={1}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                      Other Ways to
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
                        }),
                      ]}
                    >
                      Connect
                    </Typography>
                  </Grid>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography variant="h6" sx={{ color: '#555', textAlign: 'center' }}>
                    Choose the option that works best for you
                  </Typography>
                </motion.div>
              </Stack>
              <ContactOptions />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ContactHeader;
