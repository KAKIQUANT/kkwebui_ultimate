// pages/data.jsx
import React, { useState } from 'react';
import { Card, Button, Input, Table, Tag, Statistic, Select, Tooltip } from 'antd';
import {
  DatabaseOutlined,
  SearchOutlined,
  DownloadOutlined,
  LineChartOutlined,
  BarChartOutlined,
  StockOutlined,
  CloudDownloadOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { Search } = Input;
const { Option } = Select;

// 模拟数据
const dataList = [
  {
    id: 1,
    name: 'A股日线数据',
    category: '股票',
    description: '包含全部A股的日K线数据，含开高低收、成交量等',
    format: 'CSV',
    size: '2.5GB',
    updateFreq: '每日',
    lastUpdate: '2024-01-15',
    downloads: 1234
  },
  {
    id: 2,
    name: '期货分钟数据',
    category: '期货',
    description: '主要期货品种的1分钟K线数据',
    format: 'CSV',
    size: '1.8GB',
    updateFreq: '实时',
    lastUpdate: '2024-01-15',
    downloads: 856
  },
  {
    id: 3,
    name: '股票财务数据',
    category: '基本面',
    description: '上市公司财务报表数据，包括资产负债表、利润表等',
    format: 'Excel',
    size: '500MB',
    updateFreq: '季度',
    lastUpdate: '2023-12-31',
    downloads: 2156
  }
];

const columns = [
  {
    title: '数据名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span className="font-medium text-white">{text}</span>,
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
    render: (text) => (
      <Tag color={
        text === '股票' ? 'blue' :
        text === '期货' ? 'green' :
        'gold'
      }>
        {text}
      </Tag>
    ),
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    render: (text) => <span className="text-gray-400">{text}</span>,
  },
  {
    title: '格式',
    dataIndex: 'format',
    key: 'format',
    render: (text) => <Tag className="bg-blue-600/20 text-blue-400 border-blue-400">{text}</Tag>,
  },
  {
    title: '大小',
    dataIndex: 'size',
    key: 'size',
    render: (text) => <span className="text-gray-400">{text}</span>,
  },
  {
    title: '更新频率',
    dataIndex: 'updateFreq',
    key: 'updateFreq',
    render: (text) => <span className="text-gray-400">{text}</span>,
  },
  {
    title: '最后更新',
    dataIndex: 'lastUpdate',
    key: 'lastUpdate',
    render: (text) => <span className="text-gray-400">{text}</span>,
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <div className="space-x-4">
        <Tooltip title="查看数据详情">
          <Button 
            type="link" 
            icon={<LineChartOutlined />} 
            className="text-blue-400 hover:text-blue-500"
          >
            预览
          </Button>
        </Tooltip>
        <Tooltip title="下载数据">
          <Button 
            type="link" 
            icon={<DownloadOutlined />} 
            className="text-blue-400 hover:text-blue-500"
          >
            下载
          </Button>
        </Tooltip>
      </div>
    ),
  },
];

const DataPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <DatabaseOutlined className="text-2xl text-blue-400" />
              <h1 className="text-2xl font-bold text-white">
                数据平台
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select
                defaultValue="all"
                style={{ width: 120 }}
                onChange={setSelectedCategory}
                className="bg-[#2c2d31] border-none"
              >
                <Option value="all">全部分类</Option>
                <Option value="stock">股票数据</Option>
                <Option value="futures">期货数据</Option>
                <Option value="fundamental">基本面数据</Option>
              </Select>
              <Search
                placeholder="搜索数据"
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                className="w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#2c2d31] border-none">
              <Statistic
                title={<span className="text-gray-400">数据总量</span>}
                value={156}
                suffix="TB"
                prefix={<DatabaseOutlined className="text-blue-400" />}
                valueStyle={{ color: '#60a5fa' }}
              />
            </Card>
            <Card className="bg-[#2c2d31] border-none">
              <Statistic
                title={<span className="text-gray-400">数据品种</span>}
                value={89}
                prefix={<BarChartOutlined className="text-green-400" />}
                valueStyle={{ color: '#4ade80' }}
              />
            </Card>
            <Card className="bg-[#2c2d31] border-none">
              <Statistic
                title={<span className="text-gray-400">今日下载</span>}
                value={1234}
                prefix={<CloudDownloadOutlined className="text-yellow-400" />}
                valueStyle={{ color: '#facc15' }}
              />
            </Card>
          </div>

          <Card className="bg-[#25262b] border-none">
            <Table
              columns={columns}
              dataSource={dataList}
              rowKey="id"
              pagination={{
                total: dataList.length,
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

export default DataPage;
