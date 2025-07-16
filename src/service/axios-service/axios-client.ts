import type { AxiosError, AxiosResponse } from 'axios';

import axios from 'axios';

import { config } from 'src/config/config';

import { notify } from 'src/components/alert/alert';

// ******************************
// * 2. Axios Client Setup
// ******************************

// * Signal Method To Implement the Abort Action
// Note: A new AbortController instance should ideally be created per request
// if you intend to abort specific requests. If this global one is to abort ALL
// pending requests, it's fine, but be aware of its scope.
const abortController = new AbortController();
const signal = abortController.signal;

// Function to retrieve configIDs from localStorage
const getConfigIDsFromLocalStorage = (): string | null => {
  const configIDs = localStorage.getItem('configIDs');
  return configIDs;
};

const axiosclient = axios.create({
  headers: {
    // Initial Authorization header; will be updated by interceptor
    Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
  },
  baseURL: config.API_URL,
  signal,
});

// ******************************
// * 3. Request Interceptor
// ******************************
axiosclient.interceptors.request.use(
  (request: any) => {
    // Update Authorization header for every request
    request.headers = request.headers || {}; // Ensure headers object exists
    request.headers.Authorization = `Bearer ${localStorage.getItem('accessToken') || ''}`;

    // Retrieve config Ids from localStorage and set header
    const configIDs = getConfigIDsFromLocalStorage();
    if (configIDs) {
      request.headers['config-ID'] = configIDs;
    }

    return request;
  },
  (error: AxiosError) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// 3. Your Axios Interceptor with improved typing
axiosclient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: customError) => {
    if (axios.isCancel(error) || error?.name === 'CanceledError') {
      return Promise.resolve();
    }
    const status = error.response?.status;
    let errorMessage = '';
    const contentType = error.response.headers['content-type'];
    if (contentType && contentType.includes('application/json')) {
      // Read JSON from blob
      const errorBlob = error.response.data as Blob;
      const text = await errorBlob.text();
      const jsonError = JSON.parse(text);
      errorMessage = jsonError.error?.message ?? error.message;
    } else {
      errorMessage = error.response?.data?.error?.message || error.message; // Fallback to error.message
    }

    switch (status) {
      case 401:
        // Unauthorized
        notify('Session Expired. Please Login Again.', 'error', 'Authentication Error'); // Using your notify function
        return Promise.reject(error); // Still reject to allow caller to catch

      case 403:
        // Forbidden
        console.warn('Access Forbidden:', errorMessage);
        notify(errorMessage || 'Access Denied.', 'warning', 'Forbidden'); // Using your notify function
        return Promise.reject(error);

      case 404: // Example: Handle 404 specifically
        notify(errorMessage || 'Resource not found.', 'error', 'Not Found');
        return Promise.reject(error);

      case 500: // Example: Handle 500 specifically
        notify('An internal server error occurred.', 'error', 'Server Error');
        return Promise.reject(error);

      default: {
        // For all other errors, use a generic notification
        console.error('API Error:', error.response); // More detailed error logging
        // Check if there's a specific message from the server, otherwise use a generic one
        const displayMessage =
          errorMessage || `An unexpected error occurred (Status: ${status || 'Unknown'}).`;
        notify(displayMessage, 'error', 'Error');
        return Promise.reject(error);
      }
    }
  }
);

// ******************************
// * 5. AxiosClient Function (for Redux Toolkit Thunks)
// ******************************
const createData = (payload: AxiosClientPayload | Record<string, any> | void) => {
  if (payload?.signal) {
    return payload?.request;
  } else if (payload?.isShowProgress) {
    return payload?.formData;
  }
  return payload ?? {};
};
export const AxiosClient: AxiosClientFunction = async (
  type,
  api,
  payload,
  toolkit,
  isRejectWithErrorMsg,
  responseType
) => {
  const data = createData(payload);
  try {
    const requestConfig: AxiosClientPayload = {
      url: api,
      method: type,
      data,
      signal: payload?.signal || signal,
      onUploadProgress: payload?.onUploadProgress,
      onDownloadProgress: payload?.onDownloadProgress,
    };

    if (responseType) {
      requestConfig.responseType = responseType;
    }

    const response: AxiosResponse = await axiosclient(requestConfig);

    if (response.status >= 200 && response.status < 300) {
      if (response.status === 299) {
        return toolkit?.fulfillWithValue({ data: response.data, status: response.status });
      }
      return toolkit?.fulfillWithValue(response.data);
    } else if (response.status === 403) {
      const rejectionPayload: CustomErrorResponse =
        response?.request?.responseType === 'blob'
          ? { message: 'Access Denied' }
          : { message: response.data?.message || 'Forbidden', statusCode: 403 };
      return toolkit?.rejectWithValue(rejectionPayload);
    } else {
      return toolkit?.rejectWithValue(response.data); // Use response.data consistently
    }
  } catch (error: any) {
    let rejectPayload: string | CustomErrorResponse;

    if (axios.isAxiosError(error)) {
      if (error.response) {
        rejectPayload =
          isRejectWithErrorMsg && error.response.data
            ? error.response.data // If you want to return the raw response data
            : {
                message: error.response.data?.message || error.message,
                statusCode: error.response.status,
              };
      } else if (error.request) {
        rejectPayload = error.message;
      } else {
        rejectPayload = error.message;
      }
    } else {
      rejectPayload = error.message || 'An unknown error occurred';
    }

    return toolkit?.rejectWithValue(rejectPayload);
  }
};

export default AxiosClient;
