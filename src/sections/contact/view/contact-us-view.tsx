import type { AppDispatch } from 'src/redux';

import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { getContactDetails } from 'src/redux/index.async';

import ContactHeader from '../contact-header';

const contactInitialData: ContactInfo = {
  id: 1,
  address: '',
  email: '',
  alternate_email: '',
  phone_number: '',
  alternate_phone_number: '',
  office_hours: '',
};

export function ContactUsView() {
  const dispatch = useDispatch<AppDispatch>();
  const [contactDetails, setContactDetails] = useState<ContactInfo>(contactInitialData);

  const getDefaultContactDetails = async () => {
    const res = await dispatch(getContactDetails());
    if (res.meta.requestStatus === 'fulfilled') {
      const contactData = res.payload.data;
      setContactDetails(contactData[0]);
    }
  };
  console.log(contactDetails, 'contactDetails');

  useEffect(() => {
    getDefaultContactDetails();
  }, []);

  return (
    <DashboardContent>
      <Grid spacing={3}>
        <ContactHeader conatctDetails={contactDetails} />
      </Grid>
      {/* <ContactUsPage /> */}
    </DashboardContent>
  );
}

export default ContactUsView;
