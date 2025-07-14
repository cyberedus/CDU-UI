import { createAsyncThunk } from '@reduxjs/toolkit';

import { customAxiosClient } from 'src/service';

export const signInAsync = createAsyncThunk(
  'admin/signInAsync',
  async (payload: signInData, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/admin/login',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
