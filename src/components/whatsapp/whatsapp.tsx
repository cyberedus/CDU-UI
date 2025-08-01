import { motion } from 'framer-motion';

import { Box, Stack, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsApp = () => (
  <Box
    component={motion.div}
    initial={{ width: 40 }}
    whileHover={{ width: 180 }}
    transition={{ duration: 0.3 }}
    sx={{
      position: 'fixed',
      bottom: {
        xs: 20,
        sm: 50,
      },
      right: {
        xs: 10,
        sm: 30,
      },
      zIndex: 900,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#25D366',
      overflow: 'hidden',
      cursor: 'pointer',
      color: '#fff',
      boxShadow: 3,
      px: 1,
    }}
    onClick={() => window.open('https://wa.me/918485858656', '_blank')}
  >
    <Stack direction="row" alignItems="center" spacing={1} height={1}>
      <WhatsAppIcon />
      <Typography
        variant="body2"
        component={motion.span}
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        sx={{ whiteSpace: 'nowrap', width: 1, height: 1, pt: 1 }}
      >
        Chat Now
      </Typography>
    </Stack>
  </Box>
);

export default WhatsApp;
