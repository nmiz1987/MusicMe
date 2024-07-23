import axios from 'axios';
import baseUrl from './baseUrl';

export default function httpClient(token = '') {
  const headers = {
    'Content-Type': 'application/json',
  };
  const network = axios.create({
    baseURL: baseUrl,
    headers,
    validateStatus: status => status < 500, // throw only server error
  });
  network.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  });

  return network;
}
