import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Hero = ({ onGetStarted, onLearnMore }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">欢迎来到 KakiQuant 量化投资平台</h1>
        <p className="hero-subtitle">结合人工智能与量化策略，优化你的投资组合</p>
        <div className="cta-buttons">
          <button className="cta-primary" onClick={onGetStarted}>立即开始</button>
          <button className="cta-secondary" onClick={onLearnMore}>了解更多</button>
        </div>
      </div>
      <div className="hero-icon">
        <FaChartLine className="text-6xl text-white animate-pulse" />
      </div>
    </div>
  );
};

Hero.propTypes = {
  onGetStarted: PropTypes.func.isRequired,
  onLearnMore: PropTypes.func.isRequired
};

export default Hero; 