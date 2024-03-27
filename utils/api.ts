/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
  baseURL: "https://0679-14-191-31-192.ngrok-free.app",
});

export default api;
