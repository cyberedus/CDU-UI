import { useSelector } from 'react-redux';

import { Box, Grid, Link, IconButton, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const linkDataProps = { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } }

const aboutLinks = [
  {
    title: 'About Us',
    linkProps: linkDataProps,
  },
  {
    title: 'Our Team',
    linkProps: linkDataProps,
  },
  {
    title: 'Careers',
    linkProps: linkDataProps,
  },
  {
    title: 'Blogs',
    linkProps: linkDataProps,
  },
  {
    title: 'Success Stories',
    linkProps: linkDataProps,
  },
  {
    title: 'Contact Us',
    linkProps: linkDataProps,
  },
];

const supportLinks = [
  {
    title: 'Student Support',
    linkProps: linkDataProps,
  },
  {
    title: 'Downloads',
    linkProps: linkDataProps,
  },
  {
    title: 'FAQs',
    linkProps: linkDataProps,
  },
  {
    title: 'Privacy Policy',
    linkProps: linkDataProps,
  },
  {
    title: 'Terms Of Service',
    linkProps: linkDataProps,
  },
  {
    title: 'Refund Policy',
    linkProps: linkDataProps,
  },
];

const FooterSection = () => {
  const { dashboardCourseList } = useSelector(
    (state: reduxState) => state.dashboardData
  );

  return (
    <Box
      component="footer"
      sx={{
        py: {
          xs: 3,
          sm: 4,
          md: 6,
        },
        px: {
          xs: 5,
          sm: 6,
          md: 10,
        },
        bgcolor: '#F4F6F8',
        color: 'text.primary',
      }}
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 6, md: 3 }}>
          <Box component="div" sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                src="/logo_full.svg"
                alt="CyberEdus Logo"
                sx={{
                  height: { xs: '60px', md: '70px' },
                  width: '190px',
                  mr: 2,
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14 }}>
              Transforming careers through hands-on cybersecurity and software development education
              with 80% practical approach.
            </Typography>
          </Box>
          <Box component="div" sx={{ gap: 1, display: 'flex', pt: 3 }}>
            <IconButton
              color="inherit"
              sx={{ bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d5d5d5' } }}
              onClick={() => { }}
            >
              <Iconify icon="socials:facebook" />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d5d5d5' } }}
              onClick={() => { }}
            >
              <Iconify icon="socials:twitter" />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d5d5d5' } }}
              onClick={() => { }}
            >
              <Iconify icon="socials:linkedin" />
            </IconButton>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Courses
          </Typography>
          <Box display="flex" flexDirection="column" pt={3}>
            {dashboardCourseList.map(({ course_name, id }, i) => (
              <Link href={'/courses/' + id} key={course_name + i} {...linkDataProps} underline="hover">
                {course_name}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Company
          </Typography>
          <Box display="flex" flexDirection="column" pt={3}>
            {aboutLinks.map(({ title, linkProps }) => (
              <Link key={title} {...linkProps} underline="hover">
                {title}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Contact
          </Typography>
          <Box display="flex" flexDirection="column" pt={3}>
            {supportLinks.map(({ title, linkProps }) => (
              <Link key={title} {...linkProps} underline="hover">
                {title}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ pt: 1, borderTop: '1px solid #ccc', mt: 5 }}>
        <Box
          display="flex"
          flexDirection={{
            xs: 'column',
            sm: 'row',
          }}
          justifyContent="space-between"
          pt={3}
          textAlign={{
            xs: 'center',
            sm: 'left',
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2025 CyberEdus. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Made in Pune, India
          </Typography>
        </Box>
      </Grid>
    </Box>
  )
};
export default FooterSection;
