import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LLMChat from './pages/LLMChat';
import DataPage from './pages/data';  // 引入数据平台页面
import StrategyPage from './pages/strategy';  // 其他页面的示例
import StrategyBuilder from './pages/StrategyBuilder';
import FactorsPage from './pages/factors';
import ProgrammingPage from './pages/programming';
import Register from './pages/register';
import Trading from './pages/trading';
import Settings from './pages/Settings';
import About from './pages/About';
import Knowledge from './pages/Knowledge';
import Auth from './pages/Auth';  
import './styles/main.css';
import './styles/pages/settings.css';
import './styles/pages/strategyBuilder.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 定义主页路径 */}
        <Route path="/" element={<App />} />
        {/* 数据平台页面路径 */}
        <Route path='/llmchat' element={<LLMChat />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/strategy/builder" element={<StrategyBuilder />} />
        <Route path="/factors" element={<FactorsPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
