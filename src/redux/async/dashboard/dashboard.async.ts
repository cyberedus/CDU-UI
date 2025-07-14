import { createAsyncThunk } from '@reduxjs/toolkit';

import { customAxiosClient } from 'src/service';

export const getDashboardDetails = createAsyncThunk(
  'dashboard/getDashboardDetails',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'get',
      '/v1/home/home-page-data',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
export const getHiringPartners = createAsyncThunk(
  'dashboard/getHiringPartners',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'get',
      '/v1/home/hiring-partners',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);

export const createLeadsData = createAsyncThunk(
  'dashboard/createLeadsData',
  async (payload: leadsFormData, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/leads/insert-lead-data',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
