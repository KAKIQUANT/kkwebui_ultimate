import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  RobotOutlined,
  ExperimentOutlined,
  TeamOutlined,
  LineChartOutlined,
  DatabaseOutlined,
  BookOutlined,
  CodeOutlined,
  ThunderboltOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    {
      name: 'AI策略',
      path: '/strategy/ai',
      icon: <RobotOutlined />,
      current: location.pathname.startsWith('/strategy'),
      children: [
        {
          name: 'AI策略库',
          path: '/strategy/ai',
          icon: <RobotOutlined />,
        },
        {
          name: '编写策略',
          path: '/strategy/programming',
          icon: <CodeOutlined />,
        },
        {
          name: '创建AI策略',
          path: '/strategy/builder',
          icon: <ThunderboltOutlined />,
        },
        {
          name: 'AI助手',
          path: '/strategy/llm-chat',
          icon: <MessageOutlined />,
        }
      ]
    },
    {
      name: '因子研究',
      path: '/factors/research',
      icon: <ExperimentOutlined />,
      current: location.pathname.startsWith('/factors')
    },
    {
      name: '策略社区',
      path: '/strategy/community',
      icon: <TeamOutlined />,
      current: location.pathname === '/strategy/community'
    },
    {
      name: '数据平台',
      path: '/data',
      icon: <DatabaseOutlined />,
      current: location.pathname === '/data'
    },
    {
      name: '我的交易',
      path: '/trading/my',
      icon: <LineChartOutlined />,
      current: location.pathname.startsWith('/trading')
    }
  ];

  const userMenu = (
    <Menu className="bg-[#2c2d31] border-gray-700">
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/settings" className="text-gray-300 hover:text-blue-400">设置</Link>
      </Menu.Item>
      <Menu.Item key="knowledge" icon={<BookOutlined />}>
        <Link to="/knowledge" className="text-gray-300 hover:text-blue-400">知识库</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<QuestionCircleOutlined />}>
        <Link to="/about" className="text-gray-300 hover:text-blue-400">关于我们</Link>
      </Menu.Item>
      <Menu.Divider className="border-gray-700" />
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-[#1a1b1e] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/kaki-logo.png"
                alt="KakiQuant"
              />
              <span className="ml-3 text-lg font-semibold text-white">
                KakiQuant
              </span>
            </Link>
            <div className="ml-16 flex space-x-8">
              {navigation.map((item) => (
                item.children ? (
                  <Dropdown
                    key={item.name}
                    overlay={
                      <Menu className="bg-[#2c2d31] border-gray-700">
                        {item.children.map((child) => (
                          <Menu.Item key={child.path} icon={child.icon}>
                            <Link
                              to={child.path}
                              className="text-gray-300 hover:text-blue-400"
                            >
                              {child.name}
                            </Link>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    placement="bottomLeft"
                  >
                    <div
                      className={`flex items-center text-base font-medium cursor-pointer ${
                        item.current
                          ? 'text-blue-400'
                          : 'text-gray-300 hover:text-blue-400'
                      }`}
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </div>
                  </Dropdown>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center text-base font-medium ${
                      item.current
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-blue-400'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Dropdown overlay={userMenu} placement="bottomRight" arrow>
              <Button
                type="primary"
                icon={<UserOutlined />}
                className="flex items-center bg-blue-600 hover:bg-blue-700"
              >
                用户中心
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 