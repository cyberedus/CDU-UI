import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { varAlpha } from 'minimal-shared/utils';
import { Outlet, Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

import AuthProvider from 'src/auth/auth-provider';

// ----------------------------------------------------------------------

export const CourseDetailsPage = lazy(() => import('src/pages/course-details'));
export const CoursesPage = lazy(() => import('src/pages/courses'));
export const ContactUsPage = lazy(() => import('src/pages/contact-us'));
export const DashboardPage = lazy(() => import('src/pages/dashboard'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const TestimonialsPage = lazy(() => import('src/pages/testimonials'));

const renderFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
      height: 800,
    }}
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

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      // { index: true, element: <DashboardPage /> },
      { path: '/', element: <Navigate replace to="/home" /> },
      { path: '/home', element: <DashboardPage /> },
      {
        path: 'courses',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <CoursesPage />,
          },
          {
            path: ':courseId',
            element: <CourseDetailsPage />,
          },
        ],
      },
      {
        path: 'contact-us',
        element: <ContactUsPage />,
      },
      { path: 'user', element: <UserPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      {
        path: 'admin',
        element: (
          <AuthProvider>
            <BlogPage />
          </AuthProvider>
        ),
      },
    ],
  },
  {
    path: 'sign-in',
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    ),
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
];
