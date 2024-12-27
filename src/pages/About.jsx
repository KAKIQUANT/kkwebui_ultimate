import React from 'react';
import { Card, Button, Timeline, Statistic } from 'antd';
import {
  QuestionCircleOutlined,
  TeamOutlined,
  TrophyOutlined,
  RocketOutlined,
  MailOutlined,
  GithubOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-8">
            <QuestionCircleOutlined className="text-2xl text-blue-400" />
            <h1 className="text-2xl font-bold text-white">
              关于我们
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#2c2d31] border-none col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">我们的使命</h2>
                  <p className="text-gray-400">
                    KakiQuant致力于为量化交易者提供专业、高效的量化交易解决方案。我们通过先进的技术和创新的理念，帮助投资者实现投资策略的自动化和智能化，让量化交易变得更简单、更高效。
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">核心优势</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-[#25262b] border-none">
                      <Statistic
                        title={<span className="text-gray-400">技术创新</span>}
                        value="AI驱动"
                        prefix={<RocketOutlined className="text-blue-400" />}
                        valueStyle={{ color: '#60a5fa' }}
                      />
                    </Card>
                    <Card className="bg-[#25262b] border-none">
                      <Statistic
                        title={<span className="text-gray-400">专业团队</span>}
                        value="行业领先"
                        prefix={<TeamOutlined className="text-green-400" />}
                        valueStyle={{ color: '#4ade80' }}
                      />
                    </Card>
                    <Card className="bg-[#25262b] border-none">
                      <Statistic
                        title={<span className="text-gray-400">服务品质</span>}
                        value="优质可靠"
                        prefix={<TrophyOutlined className="text-yellow-400" />}
                        valueStyle={{ color: '#facc15' }}
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#2c2d31] border-none">
              <h2 className="text-xl font-semibold text-white mb-4">联系我们</h2>
              <div className="space-y-4">
                <Button
                  icon={<MailOutlined />}
                  className="w-full text-gray-300 border-gray-600 hover:text-white hover:border-gray-400"
                  onClick={() => window.location.href = 'mailto:contact@kakiquant.com'}
                >
                  电子邮件
                </Button>
                <Button
                  icon={<GithubOutlined />}
                  className="w-full text-gray-300 border-gray-600 hover:text-white hover:border-gray-400"
                  onClick={() => window.open('https://github.com/kakiquant', '_blank')}
                >
                  GitHub
                </Button>
                <Button
                  icon={<WechatOutlined />}
                  className="w-full text-gray-300 border-gray-600 hover:text-white hover:border-gray-400"
                >
                  微信公众号
                </Button>
              </div>
            </Card>
          </div>

          <Card className="bg-[#25262b] border-none">
            <h2 className="text-xl font-semibold text-white mb-6">发展历程</h2>
            <Timeline
              mode="left"
              items={[
                {
                  label: '2024年1月',
                  children: (
                    <div className="text-gray-400">
                      推出AI策略设计功能，支持智能化策略构建
                    </div>
                  ),
                  color: 'blue'
                },
                {
                  label: '2023年12月',
                  children: (
                    <div className="text-gray-400">
                      完成新一轮技术升级，优化策略回测系统
                    </div>
                  ),
                  color: 'blue'
                },
                {
                  label: '2023年10月',
                  children: (
                    <div className="text-gray-400">
                      上线因子研究平台，支持多因子策略开发
                    </div>
                  ),
                  color: 'blue'
                },
                {
                  label: '2023年7月',
                  children: (
                    <div className="text-gray-400">
                      平台正式上线，提供基础量化交易功能
                    </div>
                  ),
                  color: 'blue'
                }
              ]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
