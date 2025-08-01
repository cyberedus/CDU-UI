import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

const HomeView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);

  return <Box width={1} height="calc(100vh - 100px)" />;
};

export default HomeView;
