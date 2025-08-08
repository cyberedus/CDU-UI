import { createSlice } from '@reduxjs/toolkit';

import { getDashboardDetails } from 'src/redux/async/dashboard/dashboard.async';

const initialState: DashboardState = {
  loading: false,
  data: null,
  error: null,
  interestedCourseOptions: [],
  interestedCourse: null,
  dashboardCourseList: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setInterestedCourse: (state, action) => {
      state.interestedCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.interestedCourseOptions = [];
        state.dashboardCourseList = [];
      })
      .addCase(getDashboardDetails.fulfilled, (state, action) => {
        state.loading = false;
        const { courses = [] } = action.payload.data;
        state.dashboardCourseList = courses.filter((course: Course) => course.on_dashboard)
        state.interestedCourseOptions = [
          ...new Set(courses.map((course: Course) => course.course_name)),
        ];
      })
      .addCase(getDashboardDetails.rejected, (state, action) => {
        state.dashboardCourseList = [];
        state.interestedCourseOptions = [];
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setInterestedCourse } = dashboardSlice.actions;

export default dashboardSlice.reducer;
