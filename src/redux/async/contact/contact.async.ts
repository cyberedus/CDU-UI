import { createAsyncThunk } from '@reduxjs/toolkit';

import { customAxiosClient } from 'src/service';

export const getContactDetails = createAsyncThunk(
  'contact/getContactDetails',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'get',
      '/v1/contact/contact-details',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
