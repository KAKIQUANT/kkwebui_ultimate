import React from 'react';
import { FaRobot, FaDatabase, FaUsers } from 'react-icons/fa';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="feature-card">
    <Icon className="feature-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      Icon: FaRobot,
      title: 'AI 策略设计',
      description: '利用先进的人工智能技术，自动生成和优化交易策略'
    },
    {
      Icon: FaDatabase,
      title: '实时市场数据',
      description: '覆盖全球市场的实时数据，支持多维度分析'
    },
    {
      Icon: FaUsers,
      title: '社区交流',
      description: '与其他量化交易者分享经验，共同成长'
    }
  ];

  return (
    <div className="features-section">
      <h2 className="section-title">核心功能</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features; 