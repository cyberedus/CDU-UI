import { Helmet } from 'react-helmet';

import { CONFIG } from 'src/config-global';

import { CourseDetailsView } from 'src/sections/course-details/view';

// ----------------------------------------------------------------------

export default function CourseDetails() {
  return (
    <>
      <Helmet>
        <title>{`Course Details - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="This is course detail page of each course you can explore all details"
        />
        <meta
          name="keywords"
          content="cyber-security, CEH, curriculum, batches, overview of course, fees"
        />
      </Helmet>

      <CourseDetailsView />
    </>
  );
}
