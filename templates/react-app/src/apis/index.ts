/**
 *  api request
 */
import axios from 'axios';

export type Result<T> = {
  error?: Error;
  data?: T;
};

export type ResponseData = {
  code: typeof ResponseCode[keyof typeof ResponseCode];
  message?: string;
  data?: unknown | Record<string, unknown>;
};

/**
 * * Base name
 * @const
 */
export const BASE_NAME = '/api';

/**
 * * Response code
 */
export const ResponseCode = {
  success: 200,
} as const;

/**
 * Creat a instance
 */
export const http = axios.create({
  // timeout: 5000,
  headers: {
    // credentials: 'same-origin'
  },
});

// * Add a request interceptor
http.interceptors.request.use(
  (config) => {
    // add loading animation

    return config;
  },
  (error) => Promise.reject(error)
);

// * Add a response interceptor
http.interceptors.response.use(
  (response) => {
    // clear loading animation

    return response;
  },
  (error) => {
    let status: number;

    // clear loading animation

    // check response status
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.response) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      status = error.response.status;

      if (status >= 400 && status < 500) {
        if (status === 401) {
          // alert(status + ' : Please login!')
        } else {
          alert(`${status} : Client error occurred, please refresh and try again！`);
        }
      } else if (status >= 500) {
        alert(`${status} : Server Error！`);
      }
    }

    return Promise.reject(error);
  }
);
