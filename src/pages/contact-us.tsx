import { Helmet } from 'react-helmet';

import { CONFIG } from 'src/config-global';

import ContactUsView from 'src/sections/contact/view/contact-us-view';

// ----------------------------------------------------------------------

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>{`Contact Us - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="This is a contact-us page which you can see our personal contact details and you can directly message to consultant"
        />
        <meta name="keywords" content="cyber-security, consultant, contact-us, contact" />
      </Helmet>
      <ContactUsView />
    </>
  );
}
