import { Box, Grid, Link, IconButton, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const courseLinks = [
  {
    title: 'Certified Ethical Hacker',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Advanced Cybersecurity',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Bug Bounty Program',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Full Stack Java',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Python Programming',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Interview Preparation',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
];

const aboutLinks = [
  {
    title: 'About Us',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Our Team',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Careers',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Blogs',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Success Stories',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Contact Us',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
];

const supportLinks = [
  {
    title: 'Student Support',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Downloads',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'FAQs',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Privacy Policy',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Terms Of Service',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
  {
    title: 'Refund Policy',
    linkProps: { color: 'text.secondary', sx: { cursor: 'pointer', pt: 1, fontSize: 14 } },
  },
];

const FooterSection = () => (
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
          <Grid container alignItems="center">
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'secondary.main' }}>
              Cyber
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Edus
            </Typography>
          </Grid>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14 }}>
            Transforming careers through hands-on cybersecurity and software development education
            with 80% practical approach.
          </Typography>
        </Box>
        <Box component="div" sx={{ gap: 1, display: 'flex', pt: 3 }}>
          <IconButton
            color="inherit"
            sx={{ bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d5d5d5' } }}
            onClick={() => {}}
          >
            <Iconify icon="socials:facebook" />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d5d5d5' } }}
            onClick={() => {}}
          >
            <Iconify icon="socials:twitter" />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d5d5d5' } }}
            onClick={() => {}}
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
          {courseLinks.map(({ title, linkProps }, i) => (
            <Link key={title + i} {...linkProps} underline="hover">
              {title}
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
);
export default FooterSection;
