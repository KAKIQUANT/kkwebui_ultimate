import React from 'react';

const StatItem = ({ value, label }) => (
  <div className="stat-item">
    <h3>{value}</h3>
    <p>{label}</p>
  </div>
);

const Statistics = () => {
  const stats = [
    { value: '10,000+', label: '活跃用户' },
    { value: '1,000+', label: '策略模型' },
    { value: '99.9%', label: '系统可用性' },
    { value: '24/7', label: '技术支持' }
  ];

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Statistics; 