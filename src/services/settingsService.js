import { api } from './api';
import config from '../config/config';

export const settingsService = {
  // Get user info
  getUserInfo: async () => {
    const response = await api.get(config.endpoints.userInfo);
    return response.json();
  },

  // Update user profile
  updateProfile: async (profileData) => {
    const response = await api.put(config.endpoints.updateUser, profileData);
    return response.json();
  },

  // Change password
  changePassword: async (passwordData) => {
    const response = await api.post(config.endpoints.changePassword, passwordData);
    return response.json();
  },

  // Get API keys
  getApiKeys: async () => {
    const response = await api.get(config.endpoints.apiKeys);
    return response.json();
  },

  // Create new API key
  createApiKey: async (keyData) => {
    const response = await api.post(config.endpoints.apiKeys, keyData);
    return response.json();
  },

  // Delete API key
  deleteApiKey: async (keyId) => {
    const response = await api.delete(`${config.endpoints.apiKeys}/${keyId}`);
    return response.json();
  },

  // Get API quota
  getApiQuota: async () => {
    const response = await api.get(config.endpoints.apiQuota);
    return response.json();
  }
}; 