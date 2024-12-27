import React from 'react';
import { Card, Button, Tabs, Tag, Progress } from 'antd';
import { Link } from 'react-router-dom';
import {
  RobotOutlined,
  ThunderboltOutlined,
  LineChartOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { TabPane } = Tabs;

const strategies = [
  {
    title: '趋势跟踪策略',
    description: '基于机器学习的趋势识别和跟踪策略，适合中长期投资。',
    performance: 85,
    tags: ['机器学习', '趋势跟踪', '中长期'],
    status: '运行中'
  },
  {
    title: '波动率策略',
    description: '利用深度学习预测市场波动，自动调整持仓和风险。',
    performance: 78,
    tags: ['深度学习', '波动率', '风险管理'],
    status: '优化中'
  },
  {
    title: '多因子选股',
    description: 'AI辅助多因子选股策略，动态调整因子权重。',
    performance: 92,
    tags: ['多因子', 'AI优化', '选股'],
    status: '回测中'
  }
];

const AIStrategy = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <RobotOutlined className="text-2xl text-blue-400" />
              <h1 className="text-2xl font-bold text-white">
                AI策略库
              </h1>
            </div>
            <Link to="/strategy/builder">
              <Button
                type="primary"
                icon={<ThunderboltOutlined />}
                size="large"
                className="bg-blue-600 hover:bg-blue-700"
              >
                创建AI策略
              </Button>
            </Link>
          </div>

          <Tabs 
            defaultActiveKey="1" 
            className="bg-[#25262b] rounded-lg p-6"
            items={[
              {
                key: '1',
                label: (
                  <span className="text-lg text-gray-300">
                    <RobotOutlined className="mr-2" />
                    AI策略库
                  </span>
                ),
                children: (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strategies.map((strategy, index) => (
                      <Card
                        key={index}
                        className="bg-[#2c2d31] border-none hover:shadow-xl transition-shadow duration-300"
                        actions={[
                          <Button type="link" className="text-blue-400 hover:text-blue-500" icon={<LineChartOutlined />}>查看详情</Button>,
                          <Button type="link" className="text-blue-400 hover:text-blue-500" icon={<ExperimentOutlined />}>开始优化</Button>
                        ]}
                      >
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-white">
                            {strategy.title}
                          </h3>
                          <p className="text-gray-400">
                            {strategy.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {strategy.tags.map((tag, i) => (
                              <Tag key={i} className="bg-blue-600/20 text-blue-400 border-blue-400">
                                {tag}
                              </Tag>
                            ))}
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-400">性能评分</span>
                              <span className="text-blue-400">{strategy.performance}%</span>
                            </div>
                            <Progress 
                              percent={strategy.performance} 
                              strokeColor="#60a5fa"
                              trailColor="#374151"
                              showInfo={false}
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <Tag 
                              color={
                                strategy.status === '运行中' ? 'success' : 
                                strategy.status === '优化中' ? 'warning' : 
                                'processing'
                              }
                            >
                              {strategy.status}
                            </Tag>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ),
              },
              {
                key: '2',
                label: (
                  <span className="text-lg text-gray-300">
                    <ThunderboltOutlined className="mr-2" />
                    我的策略
                  </span>
                ),
                children: null,
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AIStrategy; 