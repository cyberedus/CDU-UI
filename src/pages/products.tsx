//import { Helmet } from 'react-helmet';

//import { CONFIG } from 'src/config-global';

import { ProductsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      {/* <Helmet>
        <title>{`Products - ${CONFIG.appName}`}</title>
        <meta name="description" content="This is a product" />
      </Helmet> */}
      <ProductsView />
    </>
  );
}
