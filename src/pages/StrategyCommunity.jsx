import React from 'react';
import { Card, Button, Avatar, Tag, Tabs, Input, List, Space, Tooltip } from 'antd';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  ShareAltOutlined,
  SearchOutlined,
  PlusOutlined,
  FireOutlined,
  RiseOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { Search } = Input;

const strategies = [
  {
    id: 1,
    title: '基于LSTM的期货趋势策略',
    author: '量化达人',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '使用LSTM神经网络预测期货价格趋势，结合动量指标进行交易。',
    tags: ['深度学习', 'LSTM', '期货'],
    likes: 256,
    comments: 45,
    stars: 128,
    performance: '+25.6%',
    timeframe: '近3个月',
    status: '热门'
  },
  {
    id: 2,
    title: '多因子选股策略模板',
    author: 'AI量化',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '开源的多因子选股策略模板，支持自定义因子和权重优化。',
    tags: ['多因子', '选股', '开源'],
    likes: 189,
    comments: 32,
    stars: 95,
    performance: '+18.9%',
    timeframe: '近6个月',
    status: '推荐'
  }
];

const IconText = ({ icon, text }) => (
  <Space>
    {icon}
    <span className="text-gray-400">{text}</span>
  </Space>
);

const StrategyCommunity = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <TeamOutlined className="text-2xl text-blue-400" />
              <h1 className="text-2xl font-bold text-white">
                策略社区
              </h1>
            </div>
            <div className="space-x-4">
              <Search
                placeholder="搜索策略"
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                className="w-64"
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                className="bg-blue-600 hover:bg-blue-700"
              >
                分享策略
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#2c2d31] border-none">
              <div className="flex items-center">
                <FireOutlined className="text-2xl text-red-400 mr-3" />
                <div>
                  <div className="text-sm text-gray-400">热门策略</div>
                  <div className="text-2xl font-bold text-white">1,234</div>
                </div>
              </div>
            </Card>
            <Card className="bg-[#2c2d31] border-none">
              <div className="flex items-center">
                <RiseOutlined className="text-2xl text-green-400 mr-3" />
                <div>
                  <div className="text-sm text-gray-400">平均收益率</div>
                  <div className="text-2xl font-bold text-green-400">+21.5%</div>
                </div>
              </div>
            </Card>
            <Card className="bg-[#2c2d31] border-none">
              <div className="flex items-center">
                <TeamOutlined className="text-2xl text-blue-400 mr-3" />
                <div>
                  <div className="text-sm text-gray-400">社区用户</div>
                  <div className="text-2xl font-bold text-white">5,678</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-[#25262b] border-none">
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  key: '1',
                  label: (
                    <span className="text-lg text-gray-300">
                      <FireOutlined className="mr-2" />
                      热门策略
                    </span>
                  ),
                  children: (
                    <List
                      itemLayout="vertical"
                      size="large"
                      pagination={{
                        pageSize: 5,
                      }}
                      dataSource={strategies}
                      renderItem={item => (
                        <List.Item
                          key={item.id}
                          actions={[
                            <IconText icon={<LikeOutlined className="text-blue-400" />} text={item.likes} key="list-vertical-like" />,
                            <IconText icon={<MessageOutlined className="text-blue-400" />} text={item.comments} key="list-vertical-message" />,
                            <IconText icon={<StarOutlined className="text-blue-400" />} text={item.stars} key="list-vertical-star" />,
                            <IconText icon={<ShareAltOutlined className="text-blue-400" />} text="分享" key="list-vertical-share" />,
                          ]}
                          extra={
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-400 mb-2">
                                {item.performance}
                              </div>
                              <div className="text-sm text-gray-400">
                                {item.timeframe}
                              </div>
                            </div>
                          }
                          className="border-b border-gray-700 last:border-b-0 pb-6"
                        >
                          <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={
                              <div className="flex items-center">
                                <a href="#" className="text-lg font-medium text-white hover:text-blue-400">
                                  {item.title}
                                </a>
                                {item.status === '热门' && (
                                  <Tag color="error" className="ml-2">热门</Tag>
                                )}
                                {item.status === '推荐' && (
                                  <Tag color="success" className="ml-2">推荐</Tag>
                                )}
                              </div>
                            }
                            description={
                              <div>
                                <span className="text-gray-400">by {item.author}</span>
                                <div className="mt-2">
                                  {item.tags.map(tag => (
                                    <Tag key={tag} className="bg-blue-600/20 text-blue-400 border-blue-400 mr-2">
                                      {tag}
                                    </Tag>
                                  ))}
                                </div>
                              </div>
                            }
                          />
                          <div className="text-gray-400 mt-4">
                            {item.description}
                          </div>
                        </List.Item>
                      )}
                    />
                  ),
                },
                {
                  key: '2',
                  label: (
                    <span className="text-lg text-gray-300">
                      <StarOutlined className="mr-2" />
                      最新策略
                    </span>
                  ),
                  children: null,
                },
                {
                  key: '3',
                  label: (
                    <span className="text-lg text-gray-300">
                      <StarOutlined className="mr-2" />
                      收藏策略
                    </span>
                  ),
                  children: null,
                }
              ]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StrategyCommunity; 