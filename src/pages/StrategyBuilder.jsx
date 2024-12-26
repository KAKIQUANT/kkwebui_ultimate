import React, { useState } from 'react';
import ReactFlow, { 
  Background, 
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';

// Custom Node Types
const DataSourceNode = ({ data }) => (
  <div className="strategy-node datasource-node">
    <h3>数据源</h3>
    <select value={data.source} onChange={data.onChange}>
      <option value="tushare">TuShare</option>
      <option value="akshare">AKShare</option>
      <option value="yahoo">Yahoo Finance</option>
      <option value="binance">Binance</option>
    </select>
    <div className="node-params">
      <label>股票代码:
        <input type="text" placeholder="例如: 000001.SZ" />
      </label>
      <label>时间范围:
        <input type="text" placeholder="例如: 2020-01-01" />
      </label>
    </div>
  </div>
);

const IndicatorNode = ({ data }) => (
  <div className="strategy-node indicator-node">
    <h3>技术指标</h3>
    <select value={data.indicator} onChange={data.onChange}>
      <option value="MA">移动平均线 (MA)</option>
      <option value="MACD">MACD</option>
      <option value="RSI">RSI</option>
      <option value="BOLL">布林带</option>
    </select>
    <div className="node-params">
      <label>参数:
        <input type="text" placeholder="例如: period=14" />
      </label>
    </div>
  </div>
);

const SignalNode = ({ data }) => (
  <div className="strategy-node signal-node">
    <h3>交易信号</h3>
    <select value={data.condition} onChange={data.onChange}>
      <option value="crossover">金叉/死叉</option>
      <option value="threshold">阈值突破</option>
      <option value="pattern">形态识别</option>
    </select>
    <div className="node-params">
      <label>条件:
        <input type="text" placeholder="例如: MA5 > MA20" />
      </label>
    </div>
  </div>
);

const PositionNode = ({ data }) => (
  <div className="strategy-node position-node">
    <h3>仓位管理</h3>
    <div className="node-params">
      <label>开仓比例:
        <input type="number" min="0" max="100" defaultValue="100" />%
      </label>
      <label>止损:
        <input type="number" min="0" max="100" defaultValue="5" />%
      </label>
      <label>止盈:
        <input type="number" min="0" max="100" defaultValue="15" />%
      </label>
    </div>
  </div>
);

const BacktestNode = ({ data }) => (
  <div className="strategy-node backtest-node">
    <h3>回测设置</h3>
    <div className="node-params">
      <label>初始资金:
        <input type="number" defaultValue="100000" />
      </label>
      <label>手续费率:
        <input type="number" step="0.001" defaultValue="0.0003" />
      </label>
      <label>滑点:
        <input type="number" step="0.001" defaultValue="0.002" />
      </label>
    </div>
  </div>
);

// Node types mapping
const nodeTypes = {
  dataSource: DataSourceNode,
  indicator: IndicatorNode,
  signal: SignalNode,
  position: PositionNode,
  backtest: BacktestNode,
};

const StrategyBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  // Initial nodes setup
  React.useEffect(() => {
    const initialNodes = [
      {
        id: '1',
        type: 'dataSource',
        position: { x: 250, y: 50 },
        data: { source: 'tushare' }
      },
      {
        id: '2',
        type: 'indicator',
        position: { x: 250, y: 200 },
        data: { indicator: 'MA' }
      },
      {
        id: '3',
        type: 'signal',
        position: { x: 250, y: 350 },
        data: { condition: 'crossover' }
      },
      {
        id: '4',
        type: 'position',
        position: { x: 250, y: 500 },
        data: {}
      },
      {
        id: '5',
        type: 'backtest',
        position: { x: 250, y: 650 },
        data: {}
      }
    ];

    const initialEdges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5' }
    ];

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  const onConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleExport = () => {
    // Convert flow to Python/Jupyter code
    const strategyCode = generateJupyterCode(nodes, edges);
    console.log(strategyCode);
    // TODO: Send to server or download as .ipynb
  };

  return (
    <div className="strategy-builder">
      <div className="strategy-toolbar">
        <h1>策略可视化编辑器</h1>
        <div className="toolbar-buttons">
          <button onClick={handleExport}>导出到Jupyter</button>
          <button>保存策略</button>
          <button>回测策略</button>
        </div>
      </div>
      <div className="strategy-canvas" style={{ height: '800px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};

// Helper function to generate Jupyter notebook code
const generateJupyterCode = (nodes, edges) => {
  let code = `
import pandas as pd
import numpy as np
from backtesting import Backtest, Strategy

# Data Source
`;
  
  // Generate code based on node configuration
  nodes.forEach(node => {
    switch (node.type) {
      case 'dataSource':
        code += `data = pd.read_csv('${node.data.source}')\n`;
        break;
      case 'indicator':
        code += `# Calculate ${node.data.indicator}\n`;
        break;
      // Add more cases for other node types
    }
  });

  return code;
};

export default StrategyBuilder; 