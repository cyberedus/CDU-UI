import { createSlice } from '@reduxjs/toolkit';

import { createLeadsData } from 'src/redux/index.async';

const initialState: appSettingState = {
  appSettingLoader: false,
  data: null,
  error: null,
  visitorRelated: null,
  isRevisited: false,
  isOpenTalk: false,
};

const appSettings = createSlice({
  name: 'app-setting',
  initialState,
  reducers: {
    setRevisited: (state, action) => {
      state.isRevisited = action.payload;
    },
    setVitorId: (state, action) => {
      state.visitorRelated = action.payload;
    },
    setIsOpenTalk: (state, action) => {
      state.isOpenTalk = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLeadsData.pending, (state) => {
        state.appSettingLoader = true;
        // state.error = null;
      })
      .addCase(createLeadsData.fulfilled, (state) => {
        state.appSettingLoader = false;
        // state.data = action.payload;
      })
      .addCase(createLeadsData.rejected, (state) => {
        state.appSettingLoader = false;
        // state.error = action.payload as string;
      });
  },
});

export const { setVitorId, setRevisited, setIsOpenTalk } = appSettings.actions;

export default appSettings.reducer;
