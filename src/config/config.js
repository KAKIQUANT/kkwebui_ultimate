const config = {
  development: {
    apiBaseUrl: 'http://10.201.8.89:8000/api/v1',
    wsBaseUrl: 'ws://10.201.8.89:8000/ws',
  },
  production: {
    apiBaseUrl: 'https://api.kakiquant.com/api/v1',
    wsBaseUrl: 'wss://api.kakiquant.com/ws',
  },
  test: {
    apiBaseUrl: 'http://localhost:8000/api/v1',
    wsBaseUrl: 'ws://localhost:8000/ws',
  }
};

const env = import.meta.env.MODE || 'development';

export default {
  ...config[env],
  endpoints: {
    // Auth endpoints
    login: '/login',
    register: '/register',
    logout: '/logout',
    userInfo: '/users/info',
    
    // Strategy endpoints
    strategies: '/strategies',
    strategyById: (id) => `/strategies/${id}`,
    exportStrategy: '/strategies/export',
    backtest: '/strategies/backtest',
    
    // Data endpoints
    marketData: '/data/market',
    stockList: '/data/stocks',
    
    // User settings
    updateUser: '/users/update',
    apiQuota: '/users/api-quota',
    apiKeys: '/users/api-keys',
  }
}; 