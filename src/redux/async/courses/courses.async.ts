import { createAsyncThunk } from '@reduxjs/toolkit';

import { customAxiosClient } from 'src/service';

export const getAllCourseList = createAsyncThunk(
  'courses/getAllCourseList',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/courses/all-courses',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
export const getSingleCourse = createAsyncThunk(
  'courses/getSingleCourse',
  async (payload: getCoursePayload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/courses/all-courses',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);

export const createCourseDetails = createAsyncThunk(
  'courses/createCourseDetails',
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/courses/create-course',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true
    )
);
export const downloadCourseSyllabus = createAsyncThunk(
  'courses/downloadCourseSyllabus',
  async (payload: downloadCourse, { fulfillWithValue, rejectWithValue, dispatch }) =>
    await customAxiosClient(
      'post',
      '/v1/courses/download-syllabus',
      payload,
      {
        fulfillWithValue,
        rejectWithValue,
        dispatch,
      },
      true,
      'blob'
    )
);
