import axios from 'axios';
import { Message } from '../elementui';
import NProgress from '../nprogress';

const BASE_API = process.env.NODE_ENV === 'production' ? '' : '/api';

const $http = axios.create({
  baseURL: BASE_API,
  timeout: 10000,
  withCredentials: true,
});

// 请求拦截
$http.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  err => Promise.reject(err),
);

// 响应拦截
$http.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  err => Promise.resolve(err.response),
);

// 检查状态码
function checkStatus(res) {
  if (!res) {
    NProgress.done();
    return {
      code: 0,
      message: 'Error: 接口请求出错!',
      data: {},
    };
  }
  if (res.status === 200 || res.status === 304) {
    NProgress.done();
    return res.data;
  }
  NProgress.done();
  return {
    code: 0,
    message: `Error: ${res.status} 接口请求出错!`,
    data: res.statusText,
  };
}

// 检查CODE值
function checkCode(res) {
  if (res.code === 0) {
    Message({
      message: res.message,
      type: 'error',
      duration: 2 * 1000,
    });
    throw new Error(res.message);
  }
  return res;
}

const get = (url, params = {}) => {
  if (!url) return;
  return $http({
    method: 'get',
    url,
    params,
  }).then(checkStatus).then(checkCode);
};
const post = (url, data = {}) => {
  if (!url) return;
  return $http({
    method: 'post',
    url,
    data,
  }).then(checkStatus).then(checkCode);
};

export default {
  get,
  post,
};
