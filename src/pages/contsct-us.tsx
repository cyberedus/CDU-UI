import { CONFIG } from 'src/config-global';

import ContactUsView from 'src/sections/contact/view/contact-us-view';

// ----------------------------------------------------------------------

export default function ContactUs() {
  return (
    <>
      <title>{`Contact Us - ${CONFIG.appName}`}</title>

      <ContactUsView />
    </>
  );
}
