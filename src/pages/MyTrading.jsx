import React from 'react';
import { Card, Button, Table, Tag, Progress, Statistic, Tabs, Row, Col } from 'antd';
import {
  LineChartOutlined,
  RiseOutlined,
  FallOutlined,
  DollarOutlined,
  BarChartOutlined,
  PieChartOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { TabPane } = Tabs;

const positions = [
  {
    symbol: 'AAPL',
    name: '苹果公司',
    quantity: 100,
    entryPrice: 175.23,
    currentPrice: 182.45,
    pnl: 720,
    pnlPercent: 4.12,
    status: '持有中'
  },
  {
    symbol: 'BABA',
    name: '阿里巴巴',
    quantity: 200,
    entryPrice: 85.67,
    currentPrice: 82.34,
    pnl: -666,
    pnlPercent: -3.89,
    status: '持有中'
  }
];

const orders = [
  {
    id: '1',
    time: '2024-01-15 14:30:25',
    symbol: 'AAPL',
    type: '买入',
    price: 175.23,
    quantity: 100,
    status: '已成交'
  },
  {
    id: '2',
    time: '2024-01-15 14:35:12',
    symbol: 'BABA',
    type: '买入',
    price: 85.67,
    quantity: 200,
    status: '已成交'
  }
];

const positionColumns = [
  {
    title: '股票代码',
    dataIndex: 'symbol',
    key: 'symbol',
    render: (text) => <span className="font-medium text-gray-900 dark:text-white">{text}</span>,
  },
  {
    title: '股票名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '持仓数量',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: '成本价',
    dataIndex: 'entryPrice',
    key: 'entryPrice',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: '现价',
    dataIndex: 'currentPrice',
    key: 'currentPrice',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: '盈亏',
    dataIndex: 'pnl',
    key: 'pnl',
    render: (value, record) => (
      <span className={value >= 0 ? 'text-green-500' : 'text-red-500'}>
        ${Math.abs(value).toFixed(2)} ({record.pnlPercent}%)
        {value >= 0 ? <RiseOutlined className="ml-1" /> : <FallOutlined className="ml-1" />}
      </span>
    ),
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Tag color="processing">{text}</Tag>
    ),
  },
];

const orderColumns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '股票代码',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    render: (text) => (
      <Tag color={text === '买入' ? 'green' : 'red'}>{text}</Tag>
    ),
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <Tag color="success">{text}</Tag>
    ),
  },
];

const MyTrading = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            我的交易
          </h1>
          <Button
            icon={<ReloadOutlined />}
            size="large"
          >
            刷新数据
          </Button>
        </div>

        <Row gutter={16} className="mb-8">
          <Col span={6}>
            <Card className="bg-white dark:bg-gray-800">
              <Statistic
                title={<span className="text-gray-600 dark:text-gray-300">总资产</span>}
                value={125678.45}
                precision={2}
                prefix={<DollarOutlined />}
                valueStyle={{ color: '#2563eb' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="bg-white dark:bg-gray-800">
              <Statistic
                title={<span className="text-gray-600 dark:text-gray-300">持仓市值</span>}
                value={98765.32}
                precision={2}
                prefix={<PieChartOutlined />}
                valueStyle={{ color: '#059669' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="bg-white dark:bg-gray-800">
              <Statistic
                title={<span className="text-gray-600 dark:text-gray-300">可用资金</span>}
                value={26913.13}
                precision={2}
                prefix={<DollarOutlined />}
                valueStyle={{ color: '#d97706' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="bg-white dark:bg-gray-800">
              <Statistic
                title={<span className="text-gray-600 dark:text-gray-300">总收益率</span>}
                value={25.67}
                precision={2}
                prefix={<RiseOutlined />}
                suffix="%"
                valueStyle={{ color: '#059669' }}
              />
            </Card>
          </Col>
        </Row>

        <Card className="bg-white dark:bg-gray-800 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              策略绩效
            </h2>
          </div>
          <Row gutter={16}>
            <Col span={8}>
              <Card className="bg-gray-50 dark:bg-gray-700">
                <Statistic
                  title={<span className="text-gray-600 dark:text-gray-300">年化收益率</span>}
                  value={32.45}
                  precision={2}
                  prefix={<LineChartOutlined />}
                  suffix="%"
                  valueStyle={{ color: '#059669' }}
                />
                <Progress percent={32.45} strokeColor="#059669" />
              </Card>
            </Col>
            <Col span={8}>
              <Card className="bg-gray-50 dark:bg-gray-700">
                <Statistic
                  title={<span className="text-gray-600 dark:text-gray-300">最大回撤</span>}
                  value={15.23}
                  precision={2}
                  prefix={<FallOutlined />}
                  suffix="%"
                  valueStyle={{ color: '#dc2626' }}
                />
                <Progress percent={15.23} strokeColor="#dc2626" />
              </Card>
            </Col>
            <Col span={8}>
              <Card className="bg-gray-50 dark:bg-gray-700">
                <Statistic
                  title={<span className="text-gray-600 dark:text-gray-300">夏普比率</span>}
                  value={2.34}
                  precision={2}
                  prefix={<BarChartOutlined />}
                  valueStyle={{ color: '#2563eb' }}
                />
                <Progress percent={78} strokeColor="#2563eb" />
              </Card>
            </Col>
          </Row>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <Tabs defaultActiveKey="1">
            <TabPane tab="当前持仓" key="1">
              <Table
                columns={positionColumns}
                dataSource={positions}
                rowKey="symbol"
                pagination={false}
              />
            </TabPane>
            <TabPane tab="交易记录" key="2">
              <Table
                columns={orderColumns}
                dataSource={orders}
                rowKey="id"
                pagination={{
                  total: orders.length,
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                }}
              />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default MyTrading; 