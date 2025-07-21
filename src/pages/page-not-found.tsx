import { Helmet } from 'react-helmet';

import { CONFIG } from 'src/config-global';

import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`404 page not found! | Error - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="This is a page not found page which you can see our interactive not found message"
        />
      </Helmet>

      <NotFoundView />
    </>
  );
}
