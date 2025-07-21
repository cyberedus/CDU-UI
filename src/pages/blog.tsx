import { Helmet } from 'react-helmet';

import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { BlogView } from 'src/sections/blog/view';
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Blog - ${CONFIG.appName}`}</title>
        <meta name="description" content="This is log page of cyber-edus" />
        <meta name="keywords" content="cyber-security, blogs" />
      </Helmet>

      <BlogView posts={_posts} />
    </>
  );
}
