/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
  baseURL: "https://m4ldw0bn-8080.asse.devtunnels.ms",
});

export default api;
