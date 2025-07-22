import { Helmet } from 'react-helmet';

import { CONFIG } from 'src/config-global';

import { BlogView } from 'src/sections/blog/view';
// ----------------------------------------------------------------------

export default function BlogsPage() {
  return (
    <>
      <Helmet>
        <title>{`Blog - ${CONFIG.appName}`}</title>
        <meta name="description" content="This is blog page of cyber-edus" />
        <meta name="keywords" content="cyber-security, blogs" />
      </Helmet>

      <BlogView />
    </>
  );
}
