import { api } from './api';
import config from '../config/config';

export const authService = {
  // Login
  login: async (credentials) => {
    const response = await api.post(config.endpoints.login, credentials);
    const data = await response.json();
    if (data.code === 0) {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('userInfo', JSON.stringify({
        username: credentials.username,
        avatar: null,
      }));
    }
    return data;
  },

  // Register
  register: async (userData) => {
    const response = await api.post(config.endpoints.register, userData);
    return response.json();
  },

  // Logout
  logout: async () => {
    const response = await api.post(config.endpoints.logout);
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    return response.json();
  },

  // Get user info
  getUserInfo: async () => {
    const response = await api.get(config.endpoints.userInfo);
    return response.json();
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
}; 