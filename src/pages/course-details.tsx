import { CONFIG } from 'src/config-global';

import { CourseDetailsView } from 'src/sections/course-details/view';

// ----------------------------------------------------------------------

export default function CourseDetails() {
  return (
    <>
      <title>{`Contact Details - ${CONFIG.appName}`}</title>

      <CourseDetailsView />
    </>
  );
}
