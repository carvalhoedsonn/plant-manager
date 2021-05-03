import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOURIP:3333'
})

export default api;  