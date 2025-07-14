import { CONFIG } from 'src/config-global';

import { AllCoursesView } from 'src/sections/courses/view';

// ----------------------------------------------------------------------

export default function Courses() {
  return (
    <>
      <title>{`Courses - ${CONFIG.appName}`}</title>

      <AllCoursesView />
    </>
  );
}
