import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LLMChat from './pages/LLMChat';
import DataPage from './pages/data';
import StrategyBuilder from './pages/StrategyBuilder';
import ProgrammingPage from './pages/programming';
import Register from './pages/register';
import Settings from './pages/Settings';
import About from './pages/About';
import Knowledge from './pages/Knowledge';
import Auth from './pages/Auth';
import Home from './pages/Home';
import AIStrategy from './pages/AIStrategy';
import FactorResearch from './pages/FactorResearch';
import StrategyCommunity from './pages/StrategyCommunity';
import MyTrading from './pages/MyTrading';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/strategy/llm-chat" element={<LLMChat />} />
      <Route path="/data" element={<DataPage />} />
      <Route path="/strategy/builder" element={<StrategyBuilder />} />
      <Route path="/strategy/ai" element={<AIStrategy />} />
      <Route path="/strategy/community" element={<StrategyCommunity />} />
      <Route path="/strategy/programming" element={<ProgrammingPage />} />
      <Route path="/factors/research" element={<FactorResearch />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trading/my" element={<MyTrading />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} />
      <Route path="/knowledge" element={<Knowledge />} />
    </Routes>
  );
};

export default App;
