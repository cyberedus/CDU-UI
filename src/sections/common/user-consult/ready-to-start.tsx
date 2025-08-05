import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { ForumRounded } from '@mui/icons-material';
import { Box, Grid, Button, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import DialogSlide from 'src/components/dialog/slide-dialog';

import ConsultForm from './consult-form';

const titleVariants: any = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subtitleVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

// Use a standard function declaration
export const ReadyToStart = () => {
  const { visitorRelated } = useSelector((state: reduxState) => state.appSettings);
  const [consultformOpen, setConsultformOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleToggle = () => {
    if (visitorRelated) {
      setConsultformOpen(false);
      router.push('/contact-us');
    } else {
      setConsultformOpen(true);
    }
  };

  return (
    <Box sx={{
    pb: 4,
    pt: 4,
    my: 3,
    width: 1,
    textAlign: 'center',
    background: '#e7eaf3',
    borderRadius:2
  }}>
      {/* --- HEADING --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        <Grid container gap={1} justifyContent="center" alignItems="center">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Ready To Start Your
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
              // mb: { xs: 3, md: 4 },
            }}
          >
            Journey?
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
            fontSize: {
              xs: 17.2,
              sm: 20.2,
            },
          }}
        >
          Join thousands who’ve transformed their careers with our practical approach
        </Typography>
      </motion.div>
      <Box textAlign="center" sx={{ mt: 6 }}>
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<ForumRounded />}
            onClick={handleToggle}
            sx={{
              borderRadius: 8,
              background: 'linear-gradient(to right, #E77D19, #F5A74D)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(to right, #C76614, #E5943C)',
              }
            }}
          >
            Let{`'`}s Talk
          </Button>
        </motion.div>
      </Box>
      {!visitorRelated && (
        <DialogSlide
          maxWidth="md"
          id="consultForm"
          open={consultformOpen}
          setOpen={setConsultformOpen}
          title="Get Your Free Career Consultation"
        >
          <ConsultForm afterFillForm={handleToggle} />
        </DialogSlide>
      )}
    </Box>
  );
};
