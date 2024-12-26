import React from 'react';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

const EducationCard = ({ Icon, title, description, buttonText, onClick }) => (
  <div className="education-card">
    <Icon className="education-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="education-btn" onClick={onClick}>{buttonText}</button>
  </div>
);

const Education = () => {
  const handleStartLearning = () => {
    // TODO: Implement navigation to learning path
    console.log('Navigate to learning path');
  };

  const handleViewCourses = () => {
    // TODO: Implement navigation to courses
    console.log('Navigate to courses');
  };

  const educationItems = [
    {
      Icon: FaGraduationCap,
      title: '新手教程',
      description: '从零开始学习量化交易',
      buttonText: '开始学习',
      onClick: handleStartLearning
    },
    {
      Icon: FaTrophy,
      title: '进阶课程',
      description: '深入学习策略开发',
      buttonText: '查看课程',
      onClick: handleViewCourses
    }
  ];

  return (
    <div className="education-section">
      <h2 className="section-title">学习资源</h2>
      <div className="education-grid">
        {educationItems.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education; 