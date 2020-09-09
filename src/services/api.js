import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001' || 'http://192.168.0.45:3001',
})

export default api;