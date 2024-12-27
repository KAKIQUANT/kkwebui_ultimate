import React from 'react';
import { Card, Button, Table, Tag, Tooltip, Statistic } from 'antd';
import {
  ExperimentOutlined,
  LineChartOutlined,
  PlusOutlined,
  SearchOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const factors = [
  {
    name: '动量因子',
    category: '技术',
    description: '基于历史价格变动趋势的动量指标',
    ic: 0.35,
    ir: 1.2,
    status: '已验证',
    lastUpdate: '2024-01-15'
  },
  {
    name: '估值因子',
    category: '基本面',
    description: 'PE、PB等估值指标组合',
    ic: 0.42,
    ir: 1.5,
    status: '研究中',
    lastUpdate: '2024-01-14'
  },
  {
    name: '波动率因子',
    category: '风险',
    description: '基于历史波动率的风险指标',
    ic: 0.28,
    ir: 0.9,
    status: '已验证',
    lastUpdate: '2024-01-13'
  }
];

const columns = [
  {
    title: '因子名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => (
      <span className="font-medium text-white">{text}</span>
    ),
  },
  {
    title: '类别',
    dataIndex: 'category',
    key: 'category',
    render: (text) => (
      <Tag color={text === '技术' ? 'blue' : text === '基本面' ? 'green' : 'orange'}>
        {text}
      </Tag>
    ),
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    render: (text) => (
      <span className="text-gray-400">{text}</span>
    ),
  },
  {
    title: 'IC值',
    dataIndex: 'ic',
    key: 'ic',
    render: (value) => (
      <Tooltip title="信息系数">
        <span className={`font-medium ${value > 0.3 ? 'text-green-400' : 'text-yellow-400'}`}>
          {value.toFixed(2)}
        </span>
      </Tooltip>
    ),
  },
  {
    title: 'IR值',
    dataIndex: 'ir',
    key: 'ir',
    render: (value) => (
      <Tooltip title="信息比率">
        <span className={`font-medium ${value > 1.0 ? 'text-green-400' : 'text-yellow-400'}`}>
          {value.toFixed(2)}
        </span>
      </Tooltip>
    ),
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Tag color={text === '已验证' ? 'success' : 'processing'}>
        {text}
      </Tag>
    ),
  },
  {
    title: '最后更新',
    dataIndex: 'lastUpdate',
    key: 'lastUpdate',
    render: (text) => (
      <span className="text-gray-400">{text}</span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <div className="space-x-4">
        <Button type="link" className="text-blue-400 hover:text-blue-500" icon={<LineChartOutlined />}>
          分析
        </Button>
        <Button type="link" className="text-blue-400 hover:text-blue-500" icon={<ExperimentOutlined />}>
          验证
        </Button>
      </div>
    ),
  },
];

const FactorResearch = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <ExperimentOutlined className="text-2xl text-blue-400" />
              <h1 className="text-2xl font-bold text-white">
                因子研究
              </h1>
            </div>
            <div className="space-x-4">
              <Button
                icon={<SearchOutlined />}
                size="large"
                className="text-gray-300 border-gray-600 hover:text-white hover:border-gray-400"
              >
                因子检索
              </Button>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                className="bg-blue-600 hover:bg-blue-700"
              >
                新建因子
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#2c2d31] border-none">
              <Statistic
                title={<span className="text-gray-400">因子总数</span>}
                value={156}
                prefix={<BarChartOutlined className="text-blue-400" />}
                valueStyle={{ color: '#60a5fa' }}
              />
            </Card>
            <Card className="bg-[#2c2d31] border-none">
              <Statistic
                title={<span className="text-gray-400">已验证因子</span>}
                value={89}
                prefix={<ExperimentOutlined className="text-green-400" />}
                valueStyle={{ color: '#4ade80' }}
              />
            </Card>
            <Card className="bg-[#2c2d31] border-none">
              <Statistic
                title={<span className="text-gray-400">研究中因子</span>}
                value={67}
                prefix={<LineChartOutlined className="text-yellow-400" />}
                valueStyle={{ color: '#facc15' }}
              />
            </Card>
          </div>

          <Card className="bg-[#25262b] border-none">
            <Table
              columns={columns}
              dataSource={factors}
              rowKey="name"
              className="factor-table"
              pagination={{
                total: factors.length,
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FactorResearch; 