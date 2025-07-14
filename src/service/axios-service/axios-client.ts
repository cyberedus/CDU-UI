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
    Authorization: `Bearer ${localStorage.getItem('accesstoken') || ''}`,
  },
  baseURL: config.API_URL,
  signal, // Using a global signal here; consider per-request signals for fine-grained control
});

// ******************************
// * 3. Request Interceptor
// ******************************
axiosclient.interceptors.request.use(
  (request: any) => {
    // Update Authorization header for every request
    request.headers = request.headers || {}; // Ensure headers object exists
    request.headers.Authorization = `Bearer ${localStorage.getItem('accesstoken') || ''}`;

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

interface customError {
  name: string;
  response: {
    status: number;
    data: Record<string, number | string>;
    message: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  toJSON: () => {};
  message?: string;
}

// 3. Your Axios Interceptor with improved typing
axiosclient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: customError) => {
    // Use our custom typed error here
    // *Return For Aborted Calls
    // Use `error?.name` for safety as `error` itself might be null/undefined in very rare edge cases
    if (axios.isCancel(error) || error?.name === 'CanceledError') {
      // Request was aborted, nothing more to do
      return Promise.resolve(); // Resolve to prevent further handling as an error
    }

    // Access properties safely using optional chaining (?)
    const status = error.response?.status;
    const errorMessage: any = error.response?.data?.message || error.message; // Fallback to error.message

    switch (status) {
      case 401:
        // Unauthorized
        notify('Session Expired. Please Login Again.', 'error', 'Authentication Error'); // Using your notify function
        // navigateHome(); // Assuming navigateHome redirects
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
        console.error('API Error:', error.toJSON ? error.toJSON() : error); // More detailed error logging
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

export const AxiosClient: AxiosClientFunction = async (
  type,
  api,
  payload,
  toolkit,
  isRejectWithErrorMsg,
  responseType
) => {
  try {
    const requestConfig: AxiosClientPayload = {
      url: api,
      method: type,
      // Safely access properties from payload based on their presence
      data: payload?.signal
        ? payload.request // Assuming payload.request is the actual data
        : payload?.isShowProgress
          ? payload?.formData
          : (payload ?? {}), // Default to entire payload if no specific flags
      // Pass the signal from the payload if provided, otherwise use the global one
      signal: payload?.signal || signal,
      onUploadProgress: payload?.onUploadProgress,
      onDownloadProgress: payload?.onDownloadProgress,
    };

    if (responseType) {
      requestConfig.responseType = responseType;
    }

    const response: AxiosResponse = await axiosclient(requestConfig);

    // Handle successful responses (2xx family)
    if (response.status >= 200 && response.status < 300) {
      // Specifically handle 299 if it has special meaning
      if (response.status === 299) {
        return toolkit?.fulfillWithValue({ data: response.data, status: response.status });
      }
      return toolkit?.fulfillWithValue(response.data);
    }
    // Handle specific status codes that are not direct errors but need special action
    else if (response.status === 403) {
      // This block will actually be hit if the interceptor resolved the promise
      // However, given the interceptor now rejects for 403, this part might not be reached directly
      // unless the original error was swallowed and a resolved response with status 403 came through.
      // Assuming the interceptor passes through 403 with a rejected promise:
      //   toolkit.dispatch(
      //     setDisplayMessage({
      //       message: response?.data?.message || 'Access Denied',
      //       type: 'error',
      //       autoHide: false,
      //     })
      //   );
      // Reject with a structured error message
      const rejectionPayload: CustomErrorResponse =
        response?.request?.responseType === 'blob'
          ? { message: 'Access Denied' }
          : { message: response.data?.message || 'Forbidden', statusCode: 403 };
      return toolkit?.rejectWithValue(rejectionPayload);
    }
    // Generic case for other non-2xx statuses if they somehow bypass interceptor error handling
    else {
      return toolkit?.rejectWithValue(response.data || response.data); // Use response.data consistently
    }
  } catch (error: any) {
    // Catch AxiosError specifically
    let rejectPayload: string | CustomErrorResponse;

    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        rejectPayload =
          isRejectWithErrorMsg && error.response.data
            ? error.response.data // If you want to return the raw response data
            : {
                message: error.response.data?.message || error.message,
                statusCode: error.response.status,
              };
      } else if (error.request) {
        // The request was made but no response was received
        rejectPayload = error.message;
      } else {
        // Something happened in setting up the request that triggered an Error
        rejectPayload = error.message;
      }
    } else {
      // Non-Axios error
      rejectPayload = error.message || 'An unknown error occurred';
    }

    return toolkit?.rejectWithValue(rejectPayload);
  }
};

export default AxiosClient;
