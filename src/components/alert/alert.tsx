import 'react-toastify/dist/ReactToastify.css'; // Import default styles for basic ToastContainer appearance

import type { TypeOptions } from 'react-toastify';
import type { Theme } from '@mui/material/styles';

// src/components/Notifier.tsx
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Alert, useTheme, AlertTitle, IconButton } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

// Custom component to render inside the toast
const CustomAlertToast: React.FC<CustomToastProps> = ({
  message,
  type,
  title,
  toastId,
  onClose,
}) => {
  const theme: Theme = useTheme();

  // Determine severity based on toast type
  const severity = type === 'default' ? 'info' : type;

  return (
    // Use Box to act as the direct child of react-toastify's toast
    <Box sx={{ width: '100%' }}>
      <Alert
        severity={severity}
        variant="filled" // Or 'standard', 'outlined' based on preference
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
          error: <ErrorOutlineIcon fontSize="inherit" />,
          info: <InfoOutlinedIcon fontSize="inherit" />,
          warning: <WarningAmberOutlinedIcon fontSize="inherit" />,
          // default will use info icon or you can customize it
        }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              if (toastId) {
                toast.dismiss(toastId); // Dismiss the specific toast
              }
              onClose?.(); // Call any provided onClose handler
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{
          // Apply theme background color for better contrast with filled variant
          // Or just leave it as default to use MUI's Alert filled colors
          // bgcolor: theme.palette[severity].main, // This line is usually not needed for 'filled' variant
          color: '#FFFFFF', // Ensure text is visible
          '& .MuiAlert-icon': {
            opacity: 1, // Ensure icon is visible with filled variant
          },
          minWidth: '250px', // Ensure alerts have a decent minimum width
          boxShadow: theme.shadows[3], // Add a subtle shadow
        }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Box>
  );
};

// Helper function to show a notification
// This function can be used throughout your application
export const notify = (
  message: string,
  type: TypeOptions = 'default',
  title?: string,
  options?: Record<string, any> // Additional react-toastify options
) => {
  // Use the custom component as the content of the toast
  const content = (
    <CustomAlertToast
      message={message}
      type={type}
      title={title}
      // toastId and onClose will be passed by react-toastify internally
    />
  );

  return toast(content, {
    type,
    ...options,
    // Custom close button is handled within CustomAlertToast
    closeButton: false,
    // Pause toast on hover (default for react-toastify)
    pauseOnHover: true,
    // Optionally: Make draggable
    draggable: true,
  });
};

// Main ToastContainer component to be placed at the root of your app
export const AppToastContainer: React.FC = () => (
  <ToastContainer
    position="top-right" // You can change this to "top-center", "bottom-left", etc.
    autoClose={5000} // Close after 5 seconds
    hideProgressBar // Hide the progress bar
    newestOnTop={false} // Show newest toasts at the bottom of the stack
    closeOnClick // Close toast when clicked
    rtl={false} // Right-to-left support
    pauseOnFocusLoss // Pause autoClose when window loses focus
    draggable // Allow dragging toasts
    limit={5} // Max number of toasts to show at once
    // By default, react-toastify handles the styling of the container itself
    // and injects the toast content. We're providing custom content.
    // You can add more props here from react-toastify documentation
  />
);
