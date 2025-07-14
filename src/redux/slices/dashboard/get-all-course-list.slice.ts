import { createSlice } from '@reduxjs/toolkit';

import { getDashboardDetails } from 'src/redux/async/dashboard/dashboard.async';

const initialState: DashboardState = {
  loading: false,
  data: null,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboardDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getDashboardDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;
