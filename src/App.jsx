import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaChartLine, FaRobot, FaDatabase, FaUsers, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import './styles/app.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">欢迎来到 KakiQuant 量化投资平台</h1>
            <p className="hero-subtitle">结合人工智能与量化策略，优化你的投资组合</p>
            <div className="cta-buttons">
              <button className="cta-primary">立即开始</button>
              <button className="cta-secondary">了解更多</button>
            </div>
          </div>
          <div className="hero-icon">
            <FaChartLine className="text-6xl text-white animate-pulse" />
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title">核心功能</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaRobot className="feature-icon" />
              <h3>AI 策略设计</h3>
              <p>利用先进的人工智能技术，自动生成和优化交易策略</p>
            </div>
            <div className="feature-card">
              <FaDatabase className="feature-icon" />
              <p>实时市场数据</p>
              <p>覆盖全球市场的实时数据，支持多维度分析</p>
            </div>
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>社区交流</h3>
              <p>与其他量化交易者分享经验，共同成长</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>活跃用户</p>
            </div>
            <div className="stat-item">
              <h3>1,000+</h3>
              <p>策略模型</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>系统可用性</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>技术支持</p>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="news-section">
          <h2 className="section-title">最新动态</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-content">
                <span className="news-tag">新功能</span>
                <h3>AI 策略优化器升级</h3>
                <p>引入深度学习模型，提升策略生成效率</p>
                <a href="#" className="news-link">了解更多 →</a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-content">
                <span className="news-tag">社区</span>
                <h3>量化交易大赛</h3>
                <p>参与月度策略比赛，赢取丰厚奖励</p>
                <a href="#" className="news-link">立即参与 →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h2 className="section-title">学习资源</h2>
          <div className="education-grid">
            <div className="education-card">
              <FaGraduationCap className="education-icon" />
              <h3>新手教程</h3>
              <p>从零开始学习量化交易</p>
              <button className="education-btn">开始学习</button>
            </div>
            <div className="education-card">
              <FaTrophy className="education-icon" />
              <h3>进阶课程</h3>
              <p>深入学习策略开发</p>
              <button className="education-btn">查看课程</button>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>准备好开始您的量化交易之旅了吗？</h2>
            <p>立即注册，获取免费试用机会</p>
            <button className="cta-button">免费注册</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
