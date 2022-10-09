import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  timeout: 1000,
});

export default instance;
