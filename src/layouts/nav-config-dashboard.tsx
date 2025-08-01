// import { Label } from 'src/components/label';
// import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

// const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export const navData: NavItem[] = [
  {
    title: 'Home',
    path: '/home',
    icon: null,
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: null,
    children: [
      {
        title: 'Course With Id',
        path: '/',
        icon: null,
      },
    ],
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: null,
    // icon: icon('ic-blog'),
  },
  {
    title: 'Testimonials',
    path: '/testimonials',
    icon: null,
    // icon: icon('ic-blog'),
  },
  {
    title: 'Contact',
    path: '/contact-us',
    icon: null,
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: null,
  },
  // {
  //   title: 'User',
  //   path: '/user',
  //   icon: icon('ic-user'),
  // },
  // {
  //   title: 'Product',
  //   path: '/products',
  //   icon: icon('ic-cart'),
  //   info: (
  //     <Label color="error" variant="inverted">
  //       +3
  //     </Label>
  //   ),
  // },
  // {
  //   title: 'Sign in',
  //   path: '/sign-in',
  //   icon: icon('ic-lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic-disabled'),
  // },
];
