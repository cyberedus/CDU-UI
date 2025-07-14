// src/components/ProgressBar.tsx
import { useEffect } from 'react';
import NProgress from 'nprogress';
import { useLocation } from 'react-router-dom';

import { useNProgressTheme } from 'src/hooks';

export const ProgressBar = () => {

  const location = useLocation();
  useNProgressTheme();

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 50); // simulate load delay or wait for real loading

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return null;
};
