//import { Helmet } from 'react-helmet';

//import { CONFIG } from 'src/config-global';

import { AllCoursesView } from 'src/sections/courses/view';

// ----------------------------------------------------------------------

export default function Courses() {
  return (
    <>
      {/* <Helmet>
        <title>{`Courses - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="This is landing page of all courses you can explore all courses and you can see details each and every course"
        />
        <meta name="keywords" content="All courses, cyber-security, CEH," />
      </Helmet> */}

      <AllCoursesView />
    </>
  );
}
