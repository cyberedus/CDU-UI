import { createAsyncThunk } from '@reduxjs/toolkit';

import { customAxiosClient } from 'src/service';

export const getAllSideMenus = createAsyncThunk(
  'default/getAllSideMenus',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'get',
      '/api/v1/sidemenu/all-routes',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);

export const checkVisitorExists = createAsyncThunk(
  'default/checkVisitorExists',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/leads/fingerprint-exists',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
export const getDefaultRoute = createAsyncThunk(
  'default/getDefaultRoute',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'get',
      '/v1/sidemenu/',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
