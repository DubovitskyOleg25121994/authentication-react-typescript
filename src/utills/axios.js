import axios from 'axios';

const url = 'http://localhost:5000';

export const instance = axios.create({
  baseURL: url,
  timeout: 6000
  //   headers: { 'X-Custom-Header': 'foobar' }
});
