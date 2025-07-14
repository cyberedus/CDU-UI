import 'src/global.css';

import { useEffect } from 'react';

import { usePathname } from 'src/routes/hooks';

import { ThemeProvider } from 'src/theme/theme-provider';

import LeadsProvider from './leads/leads-provider';
import { ProgressBar } from './components/nprogress-bar';
import { AppToastContainer } from './components/alert/alert';

// ----------------------------------------------------------------------

type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: Readonly<AppProps>) {
  useScrollToTop();
  return (
    <ThemeProvider>
      <ProgressBar />
      <AppToastContainer />
      <LeadsProvider>{children}</LeadsProvider>
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
