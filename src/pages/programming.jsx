// pages/programming.jsx
import React from 'react';
import { Card, Button } from 'antd';
import { ExperimentOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/programming.css';

const ProgrammingPage = () => {
  const jupyterLabUrl = "https://lab.kakiquant.icu/lab?token=kakiquant";
  
  const strategies = [
    {
      title: "动量策略",
      description: "基于价格动量的交易策略，利用历史价格趋势进行交易决策。",
      notebook: "1.ipynb"
    },
    {
      title: "均值回归策略",
      description: "基于价格回归均值的特性进行交易，适合震荡市场。",
      notebook: "2.ipynb"
    },
    {
      title: "日内交易策略",
      description: "针对日内价格波动特征设计的短期交易策略。",
      notebook: "3.ipynb"
    },
    {
      title: "多因子策略",
      description: "结合多个因子的综合交易策略，提高策略的稳定性。",
      notebook: "4.ipynb"
    }
  ];

  const openNotebook = (notebook) => {
    window.open(`${jupyterLabUrl}/tree/${notebook}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="programming-content">
            <div className="lab-access">
              <Button 
                type="primary" 
                size="large"
                icon={<ExperimentOutlined />}
                onClick={() => window.open(jupyterLabUrl, '_blank')}
              >
                打开 JupyterLab
              </Button>
            </div>
            
            <div className="strategies-grid">
              {strategies.map((strategy, index) => (
                <Card
                  key={index}
                  className="strategy-card"
                  title={strategy.title}
                  extra={
                    <Button 
                      type="link" 
                      onClick={() => openNotebook(strategy.notebook)}
                    >
                      打开策略
                    </Button>
                  }
                >
                  <p>{strategy.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgrammingPage;
