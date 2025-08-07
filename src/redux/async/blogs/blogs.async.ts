import { createAsyncThunk } from '@reduxjs/toolkit';

import { customAxiosClient } from 'src/service';

export const getAllBlogsAsync = createAsyncThunk(
  'blogs/getAllBlogsAsync',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'get',
      '/v1/blogs/all-blogs',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);

export const getBlogContentAsync = createAsyncThunk(
  'blogs/getBlogContentAsync',
  async (payload: blogContent, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/blogs/blog-content',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
