import 'src/global.css';

import { useEffect } from 'react';

import { usePathname } from 'src/routes/hooks';

import { ThemeProvider } from 'src/theme/theme-provider';

import { WhatsApp } from './components/whatsapp';
import LeadsProvider from './leads/leads-provider';
import { ProgressBar } from './components/nprogress-bar';
import MotionLazy from './components/animate/lazy-motion';
import { CallToAction } from './components/call-to-action';
import { AppToastContainer } from './components/alert/alert';

// ----------------------------------------------------------------------

type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: Readonly<AppProps>) {
  useScrollToTop();
  return (
    <ThemeProvider>
      <MotionLazy>
        <WhatsApp />
        <CallToAction />
        <ProgressBar />
        <AppToastContainer />
        <LeadsProvider>{children}</LeadsProvider>
      </MotionLazy>
    </ThemeProvider>
  );
}

// ----------------------------------------------------------------------

function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
