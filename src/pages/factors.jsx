import React, { useState } from 'react';
import { Table, Button, Modal, Input, TreeSelect, Tooltip } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';  // 引入导航栏组件
import Footer from '../components/Footer';  // 引入 Footer
import '../index.css'; // 引入全局样式

// 因子数据
const factorData = [
  {
    key: '1',
    factorName: 'Alpha101因子第64',
    oneYearReturn: '89.39%',
    oneMonthReturn: '5.85%',
    threeMonthReturn: '6.90%',
    fiveYearReturn: '38.97%',
    description: '这是Alpha101因子第64个的描述信息。',
    ic: 0.0074,
    ir: 0.0781,
    turnover: 0.5327,
    returnRatio: 1.2937,
  },
  {
    key: '2',
    factorName: 'Alpha191因子第17',
    oneYearReturn: '30.51%',
    oneMonthReturn: '18.96%',
    threeMonthReturn: '6.58%',
    fiveYearReturn: '26.97%',
    description: '这是Alpha191因子第17个的描述信息。',
    ic: 0.0128,
    ir: 0.0216,
    turnover: 0.4687,
    returnRatio: 0.8395,
  },
  // 更多因子数据...
];

// 前20因子图表数据（示例）
const top20Data = [
  { name: '因子1', return: 12.3 },
  { name: '因子2', return: 9.1 },
  { name: '因子3', return: 15.7 },
  { name: '因子4', return: 11.2 },
  // 更多因子...
];

// 因子目录层级数据
const treeData = [
  {
    title: '系统因子',
    value: '系统因子',
    children: [
      {
        title: 'Alpha101因子',
        value: 'Alpha101因子',
      },
      {
        title: 'Alpha191因子',
        value: 'Alpha191因子',
      },
    ],
  },
  {
    title: '社区因子',
    value: '社区因子',
    children: [
      {
        title: '基础信息因子',
        value: '基础信息因子',
      },
      {
        title: '技术分析因子',
        value: '技术分析因子',
      },
      {
        title: '财务因子',
        value: '财务因子',
      },
    ],
  },
];

const FactorPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFactor, setSelectedFactor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);

  // 搜索功能
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // 过滤搜索结果
  const filteredData = factorData.filter(factor =>
    factor.factorName.toLowerCase().includes(searchQuery)
  );

  // 显示模态框
  const showModal = (record) => {
    setSelectedFactor(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="factor-page">
      <Navbar />
      <h1>因子研究看板</h1>

      {/* 因子目录选择 */}
      <TreeSelect
        treeData={treeData}
        value={selectedCategory}
        onChange={setSelectedCategory}
        treeCheckable={true}
        showCheckedStrategy={TreeSelect.SHOW_PARENT}
        placeholder="选择目录"
        style={{ width: '300px', marginBottom: '20px' }}
        allowClear
      />

      {/* 搜索输入框 */}
      <Input.Search
        placeholder="搜索因子..."
        onChange={handleSearch}
        style={{ marginBottom: 20, width: '300px' }}
      />

      {/* 因子表格 */}
      <Table columns={[
        {
          title: '因子名称',
          dataIndex: 'factorName',
          key: 'factorName',
          render: (text, record) => (
            <Tooltip title={`IC: ${record.ic} | IR: ${record.ir}`} placement="right">
              <Link to={`/factor/${record.key}`}>{text}</Link>
            </Tooltip>
          ),
          sorter: (a, b) => a.factorName.localeCompare(b.factorName),
        },
        {
          title: '1年多头收益率',
          dataIndex: 'oneYearReturn',
          key: 'oneYearReturn',
          sorter: (a, b) => parseFloat(a.oneYearReturn) - parseFloat(b.oneYearReturn),
        },
        {
          title: '操作',
          key: 'action',
          render: (_, record) => (
            <Button type="primary" onClick={() => showModal(record)}>
              查看详情
            </Button>
          ),
        },
      ]} dataSource={filteredData} pagination={false} />

      {/* 模态框 */}
      <Modal
        title="因子详情"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedFactor && (
          <div>
            <p><strong>因子名称:</strong> {selectedFactor.factorName}</p>
            <p><strong>IC:</strong> {selectedFactor.ic}</p>
            <p><strong>IR:</strong> {selectedFactor.ir}</p>
            <p><strong>换手率:</strong> {selectedFactor.turnover}</p>
            <p><strong>收益率:</strong> {selectedFactor.returnRatio}</p>
          </div>
        )}
      </Modal>

      {/* 前20因子图表 */}
      <h2>前20因子收益图表</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={top20Data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip />
          <Legend />
          <Line type="monotone" dataKey="return" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>

      <Footer />
    </div>
  );
};

export default FactorPage;
