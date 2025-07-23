//import { Helmet } from 'react-helmet';

//import { CONFIG } from 'src/config-global';

import { SignInView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      {/* <Helmet>
        <title>{`Sign in - ${CONFIG.appName}`}</title>
        <meta name="description" content="This is a sign in page" />
      </Helmet> */}

      <SignInView />
    </>
  );
}
