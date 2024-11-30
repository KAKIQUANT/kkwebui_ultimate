// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);
  const navigate = useNavigate();

  const knowledgeLinks = [
    {
      title: "KakiAPI",
      url: "https://api.kakiquant.icu/",
      description: "API文档和使用指南"
    },
    {
      title: "课程",
      url: "https://www.wolai.com/kakiquant/courses",
      description: "量化交易系列课程"
    },
    {
      title: "新手指引",
      url: "https://www.wolai.com/kakiquant/guide",
      description: "从零开始的量化交易"
    }
  ];

  const handleKnowledgeClick = () => {
    navigate('/knowledge');
    setIsKnowledgeOpen(false);
  };

  const handleLinkClick = (e, url) => {
    e.stopPropagation(); // 阻止事件冒泡
    window.open(url, '_blank');
    setIsKnowledgeOpen(false);
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              KakiQuant
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">首页</Link>
            <Link to="/llmchat" className="nav-link">AI策略设计</Link>
            <Link to="/programming" className="nav-link">编写策略</Link>
            <Link to="/data" className="nav-link">数据平台</Link>
            <Link to="/factors" className="nav-link">因子研究</Link>
            <Link to="/strategy" className="nav-link">策略社区</Link>
            <Link to="/trading" className="nav-link">我的交易</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsKnowledgeOpen(true)}
              onMouseLeave={() => setIsKnowledgeOpen(false)}
            >
              <button 
                className="nav-link"
                onClick={handleKnowledgeClick}
              >
                知识库
              </button>
              {isKnowledgeOpen && (
                <div className="knowledge-dropdown">
                  {knowledgeLinks.map((link, index) => (
                    <div 
                      key={index}
                      className="knowledge-link"
                      onClick={(e) => handleLinkClick(e, link.url)}
                    >
                      <div className="text-white font-medium">{link.title}</div>
                      <div className="text-sm text-gray-400">{link.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="nav-link">关于我们</Link>
          </div>

          <div className="flex items-center">
            <Link to="/login">
              <button className="btn btn-primary">登录</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
