import React from 'react';

import { Grid } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import ContactHeader from '../contact-header';
import ContactUsPage from '../new-contact-page';

export function ContactUsView() {
  return (
    <DashboardContent>
      <Grid spacing={3}>
        <ContactHeader />
      </Grid>
      <ContactUsPage />
    </DashboardContent>
  );
}

export default ContactUsView;
