import React from 'react';
import Navbar from './components/Navbar'; // 引入分离出来的导航栏组件
import Footer from './components/Footer'; // 引入分离出来的页脚组件
import { FaChartLine } from 'react-icons/fa'; // 引入图标
import './index.css'; // 引入全局样式和页面装饰

function App() {
  return (
    <div className="App">
      <Navbar /> {/* 使用分离出来的导航栏组件 */}

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">欢迎来到 KakiQuant 量化投资平台</h1>
          <p className="hero-subtitle">结合人工智能与量化策略，优化你的投资组合。</p>
          <div className="cta-buttons">
            <button className="cta-primary">立即开始</button>
            <button className="cta-secondary">了解更多</button>
          </div>
        </div>
        <div className="hero-icon">
          <FaChartLine />
        </div>
      </div>

      {/* News Section */}
      <div className="news-section">
        <div className="news-item">
          <h2>最新的量化投资新闻</h2>
          <p>了解最新的市场动态和量化投资策略。</p>
        </div>
        <div className="news-item">
          <h2>平台更新</h2>
          <p>探索我们最新的功能和更新。</p>
        </div>
      </div>

      <Footer /> {/* 使用分离出来的页脚组件 */}
    </div>
  );
}

export default App;
