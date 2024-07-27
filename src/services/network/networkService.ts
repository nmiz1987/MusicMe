import axios from 'axios';
import baseUrl from './baseUrl';

const headers = {
  'Content-Type': 'application/json',
};

const network = axios.create({
  baseURL: baseUrl,
  headers,
  validateStatus: status => status < 500, // throw only server error
});

export default network;

export function isOk(status: number) {
  return status >= 200 && status < 300;
}
