import React from 'react';
import {
  LineChartOutlined,
  RobotOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';

const features = [
  {
    icon: <LineChartOutlined className="text-4xl text-blue-600" />,
    title: '高级量化策略',
    description: '提供多种量化策略模板和自定义策略开发工具，助您构建专业的交易系统。'
  },
  {
    icon: <RobotOutlined className="text-4xl text-blue-600" />,
    title: 'AI 辅助决策',
    description: '集成人工智能算法，为您的交易决策提供数据支持和智能建议。'
  },
  {
    icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
    title: '风险管理',
    description: '完善的风险控制系统，帮助您有效管理投资组合风险。'
  },
  {
    icon: <ThunderboltOutlined className="text-4xl text-blue-600" />,
    title: '实时交易',
    description: '低延迟交易执行系统，确保您的策略得到及时准确的执行。'
  }
];

const Features = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            为什么选择我们的平台
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            我们提供全面的量化交易解决方案，助您在市场中取得优势
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 