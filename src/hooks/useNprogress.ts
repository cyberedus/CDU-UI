// src/hooks/useNProgress.ts
import { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';

export const useNProgressTheme = () => {
  
  const theme = useTheme();

  useEffect(() => {
    const styleId = 'nprogress-theme';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: ${theme.palette.primary.main};
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main};
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }

      #nprogress .spinner {
        display: none;
      }
    `;

    document.head.appendChild(style);
  }, [theme]);
};
