import React from 'react';
import { Button } from 'antd';

const Hero = ({ onGetStarted, onLearnMore }) => {
  return (
    <div className="relative bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">量化交易的未来</span>
            <span className="block text-blue-600">从这里开始</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            使用我们先进的量化交易平台，轻松构建、回测和部署您的交易策略。
            无论您是经验丰富的交易员还是刚刚起步，我们都能满足您的需求。
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button
                type="primary"
                size="large"
                onClick={onGetStarted}
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                开始使用
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                size="large"
                onClick={onLearnMore}
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 