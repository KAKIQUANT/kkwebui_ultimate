import { api } from './api';
import config from '../config/config';

export const strategyService = {
  // Get all strategies
  getStrategies: async () => {
    const response = await api.get(config.endpoints.strategies);
    return response.json();
  },

  // Get strategy by ID
  getStrategyById: async (id) => {
    const response = await api.get(config.endpoints.strategyById(id));
    return response.json();
  },

  // Save new strategy
  saveStrategy: async (strategyData) => {
    const response = await api.post(config.endpoints.strategies, strategyData);
    return response.json();
  },

  // Update existing strategy
  updateStrategy: async (id, strategyData) => {
    const response = await api.put(config.endpoints.strategyById(id), strategyData);
    return response.json();
  },

  // Delete strategy
  deleteStrategy: async (id) => {
    const response = await api.delete(config.endpoints.strategyById(id));
    return response.json();
  },

  // Export strategy to Jupyter notebook
  exportStrategy: async (strategyData) => {
    const response = await api.post(config.endpoints.exportStrategy, strategyData);
    return response.blob();
  },

  // Run backtest
  runBacktest: async (strategyData) => {
    const response = await api.post(config.endpoints.backtest, strategyData);
    return response.json();
  }
}; 