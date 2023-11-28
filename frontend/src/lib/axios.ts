import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backend-lms-3.onrender.com/',
})
