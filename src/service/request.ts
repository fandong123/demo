import axios from "axios";
import router from "@/router";
import { getToken } from "@/utils";

import type { AxiosRequestConfig } from "axios";

export const waitTime = (time: number = 600) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

/* eslint-disable-next-line */
const path = location.pathname;

const service = axios.create();
service.defaults.headers.post['Content-Type'] = 'application/json';
service.defaults.timeout = 10000;
service.defaults.withCredentials = true;

service.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

service.interceptors.response.use(async (response) => {
  await waitTime(1000); 

  if (!path.includes('user')) {
    const token = getToken();
    if (!token) {
      router.navigate('/user/login');
    }
  }
  const { status, data } = response;
  if (status === 200 && data) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, async (error) => {
  waitTime(1000);
  const { status = '' } = error.response;
  switch (status) {
    case 401:
      return router.navigate('/user/login');
    default:
      break;
  }
  return Promise.reject(error.response);
});

export const request = <T = any>(url: string, options: AxiosRequestConfig): Promise<T> => {
  return service(url, options).then(res => {
    return res.data;
  }).catch(() => {
    return { success: false };
  })
};
