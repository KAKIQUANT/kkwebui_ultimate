import React, { useState, useEffect } from 'react';
import { Card, Button, message } from 'antd';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const defaultNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: '数据输入' },
    position: { x: 250, y: 0 },
    style: {
      background: '#2c2d31',
      color: '#fff',
      border: '1px solid #404040',
    },
  },
  {
    id: '2',
    data: { label: '数据预处理' },
    position: { x: 250, y: 100 },
    style: {
      background: '#2c2d31',
      color: '#fff',
      border: '1px solid #404040',
    },
  },
  {
    id: '3',
    data: { label: '策略逻辑' },
    position: { x: 250, y: 200 },
    style: {
      background: '#2c2d31',
      color: '#fff',
      border: '1px solid #404040',
    },
  },
  {
    id: '4',
    type: 'output',
    data: { label: '交易信号' },
    position: { x: 250, y: 300 },
    style: {
      background: '#2c2d31',
      color: '#fff',
      border: '1px solid #404040',
    },
  },
];

const defaultEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
];

const StrategyBuilder = () => {
  const [nodes, setNodes] = useState(defaultNodes);
  const [edges, setEdges] = useState(defaultEdges);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 尝试加载保��的策略
    const loadSavedStrategy = async () => {
      try {
        // 这里添加加载保存策略的逻辑
        setLoading(false);
      } catch (error) {
        console.error('Failed to load saved strategy:', error);
        message.info('使用默认策略流程');
        setLoading(false);
      }
    };

    loadSavedStrategy();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1b1e]">
        <Navbar />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            加载中...
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1b1e] flex flex-col">
      <Navbar />
      <div className="pt-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">策略构建器</h1>
            <div className="space-x-4">
              <Button type="primary" className="bg-blue-600 hover:bg-blue-700">
                保存策略
              </Button>
              <Button type="default" className="text-gray-300 border-gray-600 hover:text-white hover:border-gray-400">
                运行回测
              </Button>
            </div>
          </div>
          <Card className="bg-[#25262b] border-none">
            <div style={{ height: '70vh' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
              >
                <Background color="#404040" gap={16} />
                <Controls />
              </ReactFlow>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StrategyBuilder; 