import { Helmet } from 'react-helmet';

import { CONFIG } from 'src/config-global';

import { TestimonialsView } from 'src/sections/testimonials/view';
// ----------------------------------------------------------------------

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>{`Testimonials - ${CONFIG.appName}`}</title>
        <meta name="description" content="This is testimonials page of cyber-edus" />
        <meta name="keywords" content="cyber-security, testimonials" />
      </Helmet>

      <TestimonialsView />
    </>
  );
}
