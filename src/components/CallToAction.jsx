import React from 'react';
import { Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const CallToAction = ({ onRegister }) => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <RocketOutlined className="text-5xl text-white mb-6" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            准备好开始您的量化交易之旅了吗？
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            立即注册，获取免费的策略模板和市场数据
          </p>
          <div className="mt-8">
            <Button
              type="primary"
              size="large"
              onClick={onRegister}
              icon={<RocketOutlined />}
              className="h-12 px-8 text-lg bg-white text-blue-600 hover:bg-gray-100 border-none"
            >
              免费注册
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 