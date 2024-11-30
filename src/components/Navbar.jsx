// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import '../styles/navbar.css';

function Navbar() {
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  // 检查登录状态
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUserInfo = localStorage.getItem('userInfo');
    if (token && savedUserInfo) {
      setIsLoggedIn(true);
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  // 处理登出
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
    setUserInfo(null);
    navigate('/auth');
  };

  // 用户菜单项
  const userMenuItems = [
    {
      key: 'settings',
      label: (
        <Link to="/settings" className="dropdown-item">
          <SettingOutlined className="mr-2" />
          个人设置
        </Link>
      ),
    },
    {
      key: 'logout',
      label: (
        <div onClick={handleLogout} className="dropdown-item text-red-500">
          <LogoutOutlined className="mr-2" />
          退出登录
        </div>
      ),
    },
  ];

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
            
            <div className="relative">
              <div
                className="nav-link flex items-center cursor-pointer"
                onClick={() => setIsKnowledgeOpen(!isKnowledgeOpen)}
              >
                <span className="mr-1">知识库</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isKnowledgeOpen ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              
              {isKnowledgeOpen && (
                <div className="knowledge-dropdown">
                  {knowledgeLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="knowledge-item"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="font-medium text-gray-100">{link.title}</div>
                      <div className="text-sm text-gray-400">{link.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="nav-link">关于我们</Link>
          </div>

          <div className="flex items-center">
            {isLoggedIn && userInfo ? (
              <Dropdown
                menu={{ items: userMenuItems }}
                placement="bottomRight"
                trigger={['click']}
                className="cursor-pointer"
              >
                <div className="flex items-center space-x-3 text-gray-100">
                  <Avatar
                    size={32}
                    src={userInfo.avatar}
                    icon={<UserOutlined />}
                    className="bg-blue-500"
                  />
                  <span className="hidden md:block">{userInfo.username}</span>
                </div>
              </Dropdown>
            ) : (
              <Link to="/auth">
                <button className="btn btn-primary">登录</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
