import React from 'react';
import { Statistic } from 'antd';
import {
  UserOutlined,
  RocketOutlined,
  DollarOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const stats = [
  {
    icon: <UserOutlined className="text-3xl text-blue-600" />,
    title: '活跃用户',
    value: '10,000+',
    description: '来自全球的量化交易者'
  },
  {
    icon: <RocketOutlined className="text-3xl text-blue-600" />,
    title: '策略部署',
    value: '50,000+',
    description: '成功运行的交易策略'
  },
  {
    icon: <DollarOutlined className="text-3xl text-blue-600" />,
    title: '交易额',
    value: '¥100亿+',
    description: '年度交易总额'
  },
  {
    icon: <GlobalOutlined className="text-3xl text-blue-600" />,
    title: '全球市场',
    value: '100+',
    description: '支持的交易市场'
  }
];

const Statistics = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            平台数据
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            我们的成就由数据说话
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {stat.icon}
                </div>
                <Statistic
                  title={
                    <span className="text-gray-600 dark:text-gray-300">
                      {stat.title}
                    </span>
                  }
                  value={stat.value}
                  valueStyle={{
                    color: 'var(--text-primary)',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}
                />
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics; 