import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DataPage from './pages/data';  // 引入数据平台页面
import StrategyPage from './pages/strategy';  // 其他页面的示例
import FactorsPage from './pages/factors';
import ProgrammingPage from './pages/programming';
import Login from './pages/Login';
import Trading from './pages/trading';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 定义主页路径 */}
        <Route path="/" element={<App />} />
        {/* 数据平台页面路径 */}
        <Route path="/data" element={<DataPage />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/factors" element={<FactorsPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
          <Route path="/Login" element={<Login />} />
        <Route path="/trading" element={<Trading />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
