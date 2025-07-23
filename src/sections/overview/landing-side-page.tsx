import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { Box, Card, Grid, Button, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import DialogSlide from 'src/components/dialog/slide-dialog';

import ConsultForm from '../common/user-consult/consult-form';

const MotionCard = motion.create(Card);

const HomePageHeader = () => {
  const router = useRouter();

  const [consultformOpen, setConsultformOpen] = useState<boolean>(false);
  const { visitorRelated } = useSelector((state: reduxState) => state.appSettings);

  const handleToggle = () => {
    if (visitorRelated) {
      router.push('/courses');
    } else {
      setConsultformOpen(true);
    }
  };

  const afterFillForm = () => {
    router.push('/courses');
  };
  return (
    <Grid container sx={{ pb: 3, width: 1 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography 
          variant="h1" 
          component="p" 
          sx={{ 
            background: 'linear-gradient(to right, #1250A3, #376BBC)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            color: 'transparent',
            mb: 0, 
            fontSize: 50, 
            fontWeight: 900 
          }}>
          Master In
        </Typography>
        <Typography
          variant="h1"
          component="p"
          sx={{
            background: 'linear-gradient(to right, #376BBC, #5C86D5 )',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            color: 'transparent',
            mb: { xs: 3, md: 4 },
            mt: -2,
            fontWeight: 900,
            fontSize: 50,
          }}
        >
          Info-Sec
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 25 }}>
          Professional Info-Sec training with
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 25 }}>
          hands-on experience and
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 25 }}>
          industry certification
        </Typography>
        <Button
          onClick={handleToggle}
          size="large"
          variant="contained"
          sx={{ mt: 6, borderRadius: 10, fontSize: 20 ,
            background: 'linear-gradient(to right, #E77D19, #F5A74D)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(to right, #C76614, #E5943C)',
            }
          }}
        >
          Start Learning
        </Button>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          sx={{
            mt: { xs: 8, lg: 0 }, // Responsive margin top
            width: 1,
          }}
        >
          <MotionCard
            whileHover={{
              scale: 1.02, // Overall card scale on hover
              boxShadow: '0px 20px 40px rgba(0,0,0,0.25)', // Enhanced shadow on hover
            }}
            transition={{ duration: 0.5 }}
            sx={{
              position: 'relative',
              borderRadius: '16px', // rounded-2xl
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)', // border-border/50
              background:
                'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03))',
              backdropFilter: 'blur(10px)', // backdrop-blur-sm
              p: { xs: 1, sm: 4 }, // p-8 (MUI theme spacing)
              boxShadow: '0px 10px 30px rgba(0,0,0,0.1)', // shadow-xl
              transition: 'box-shadow 0.5s', // Smooth transition for shadow
            }}
          >
            {/* Card hover gradient effect */}
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to bottom right, rgba(0, 123, 255, 0.05), transparent, rgba(255, 0, 123, 0.05))', // from-primary/5 to-secondary/5
              }}
            />

            {/* Image container */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: '8px', // rounded-lg
                overflow: 'hidden',
              }}
            >
              <Box
                component={motion.img}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
                alt="Cybersecurity expert working with advanced security systems"
                sx={{
                  width: '100%',
                  maxHeight: '384px', // max-h-96
                  objectFit: 'cover',
                  display: 'block', // To remove bottom space of img
                }}
              />
              {/* Image overlay gradient */}
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)', // from-background/20
                }}
              />
            </Box>
          </MotionCard>
        </Box>
      </Grid>
      {!visitorRelated && (
        <DialogSlide
          maxWidth="md"
          id="consultForm"
          open={consultformOpen}
          setOpen={setConsultformOpen}
          title="Get Your Free Career Consultation"
        >
          <ConsultForm afterFillForm={afterFillForm} />
        </DialogSlide>
      )}
    </Grid>
  );
};

export default HomePageHeader;
