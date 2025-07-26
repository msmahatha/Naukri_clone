import axios from 'axios';

// Create an instance of axios that will be used for all API calls
const api = axios.create({
  // This is your live backend URL from Render
  baseURL: 'https://naukri-clone-backend.onrender.com/api', 
  headers: {
    'Content-Type': 'application/json'
  }
});

/*
  This logic is an interceptor that will automatically add the 
  authentication token to the headers of every single request your
  application makes. This means you no longer need to manually add
  the 'x-auth-token' header in your components.
*/
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;