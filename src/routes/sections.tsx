import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

import { SplashScreen } from 'src/components/loading-screen';

import AuthProvider from 'src/auth/auth-provider';
// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
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
export const AboutUsPage = lazy(() => import('src/pages/about-us'));

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      // { index: true, element: <DashboardPage /> },
      { path: '/', element: <HomePage /> },
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
      { path: 'about-us', element: <AboutUsPage /> },
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
