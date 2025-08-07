import { varAlpha } from 'minimal-shared/utils';

import { Box, LinearProgress, linearProgressClasses } from '@mui/material';

interface LoadingScreen {
  sx?: object;
}
const LoadingScreen = ({ sx, ...other }: LoadingScreen) => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
      height: 800,
      ...sx,
    }}
    {...other}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export default LoadingScreen;
