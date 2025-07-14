import type { AppDispatch } from 'src/redux';
import type { SubmitHandler } from 'react-hook-form';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Send } from '@mui/icons-material';
import {
  Box,
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  CircularProgress,
} from '@mui/material';

import { UIDV4 } from 'src/utils/course-helper';

import { createLeadsData } from 'src/redux/index.async';
import { setVitorId, setIsOpenTalk } from 'src/redux/index.slices';

import { notify } from 'src/components/alert/alert';

const formVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

interface ConsultationProps {
  afterFillForm?: () => void;
  children?: React.ReactElement<any, any>;
  buttonTitle?: string;
}

const ConsultForm = ({ afterFillForm, children, buttonTitle }: ConsultationProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { appSettingLoader } = useSelector((state: reduxState) => state.appSettings);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<leadsFormData>({
    defaultValues: {
      username: '',
      email: '',
      phone_number: '',
      course_interested: '',
      message: '',
      device_fingerprint: '',
    },
  });

  const onSubmit: SubmitHandler<leadsFormData> = async (data: leadsFormData) => {
    console.log('Form Data Submitted:', data);
    const device_fingerprint: string = UIDV4();
    const res = await dispatch(createLeadsData({ ...data, device_fingerprint }));
    if (res.meta.requestStatus === 'fulfilled') {
      notify(
        'Thank you for your enquiry! Our team will get in touch with you shortly.',
        'success',
        'We’ve Got Your Request!'
      );
      localStorage.setItem('device_fingerprint', device_fingerprint);
      dispatch(setVitorId(device_fingerprint));
      dispatch(setIsOpenTalk(false));
      if (afterFillForm) {
        afterFillForm();
      }
      reset(); // Reset form after successful submission
    } else {
      notify('Something went wrong', 'error', 'We’ve Got wrong Request!');
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={formVariants}>
      {children}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate // Disable browser default validation
        sx={{ mt: 3 }}
      >
        <Grid container spacing={3}>
          {/* Full Name */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <motion.div variants={itemVariants}>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'Full Name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    autoFocus
                    label="Full Name *"
                    variant="outlined"
                    fullWidth
                    error={!!errors.username}
                    helperText={errors.username ? errors.username.message : ''}
                    placeholder="Enter your full name"
                  />
                )}
              />
            </motion.div>
          </Grid>

          {/* Email Address */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <motion.div variants={itemVariants}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email Address *"
                    variant="outlined"
                    fullWidth
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    placeholder="Enter your email"
                  />
                )}
              />
            </motion.div>
          </Grid>

          {/* Phone Number */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <motion.div variants={itemVariants}>
              <Controller
                name="phone_number"
                control={control}
                rules={{
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^[0-9]{10,15}$/, // Simple digit-only pattern for example
                    message: 'Invalid phone number (10-15 digits)',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number *"
                    variant="outlined"
                    fullWidth
                    type="tel"
                    error={!!errors.phone_number}
                    helperText={errors.phone_number ? errors.phone_number.message : ''}
                    placeholder="Enter your phone number"
                  />
                )}
              />
            </motion.div>
          </Grid>

          {/* Course Interest */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <motion.div variants={itemVariants}>
              <FormControl fullWidth error={!!errors.course_interested}>
                <InputLabel id="course-interest-label">Course Interest</InputLabel>
                <Controller
                  name="course_interested"
                  control={control}
                  rules={{ required: 'Please select a course' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="course-interest-label"
                      id="course-interest-select"
                      label="Course Interest"
                    >
                      <MenuItem value="">
                        <em>Select a course</em>
                      </MenuItem>
                      <MenuItem value="cybersecurity">Cybersecurity Fundamentals</MenuItem>
                      <MenuItem value="ethical_hacking">Ethical Hacking</MenuItem>
                      <MenuItem value="data_privacy">Data Privacy & Compliance</MenuItem>
                      <MenuItem value="cloud_security">Cloud Security</MenuItem>
                    </Select>
                  )}
                />
                {errors.course_interested && (
                  <Typography variant="caption" color="error" sx={{ ml: 2, mt: 0.5 }}>
                    {errors.course_interested.message}
                  </Typography>
                )}
              </FormControl>
            </motion.div>
          </Grid>

          {/* Message (Optional) */}
          <Grid
            size={{
              xs: 12,
            }}
          >
            <motion.div variants={itemVariants}>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message (Optional)"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Tell us about your goals and how we can help you"
                  />
                )}
              />
            </motion.div>
          </Grid>

          {/* Submit Button */}
          <Grid container justifyContent="center" width={1}>
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<Send />}
                disabled={appSettingLoader}
                startIcon={appSettingLoader ? <CircularProgress size={15} /> : null}
                sx={{
                  mt: 3,
                  px: 5,
                  py: 1.5,
                  bgcolor: '#2f4858', // Custom darker blue from your image
                  '&:hover': {
                    bgcolor: '#3c5a6d', // Slightly lighter on hover
                  },
                }}
              >
                {buttonTitle ?? 'Get Started Today'}
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default ConsultForm;
