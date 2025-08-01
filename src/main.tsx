import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import App from './app';
import { store, persistor } from './redux/index';
import { routesSection } from './routes/sections';
import { ErrorBoundary } from './routes/components';
import { SplashScreen } from './components/loading-screen';

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    Component: () => (
      <Suspense fallback={<SplashScreen />}>
        <App>
          <Outlet />
        </App>
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root')!);

root.render(
  <Suspense fallback={<SplashScreen />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </Suspense>
);
