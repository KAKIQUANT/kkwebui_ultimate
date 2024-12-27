import React from 'react';
import { Card } from 'antd';
import {
  BookOutlined,
  VideoCameraOutlined,
  TeamOutlined,
  TrophyOutlined
} from '@ant-design/icons';

const resources = [
  {
    icon: <BookOutlined className="text-4xl text-blue-600" />,
    title: '量化交易课程',
    description: '从基础到高级的系统化课程，帮助您掌握量化交易技能。'
  },
  {
    icon: <VideoCameraOutlined className="text-4xl text-blue-600" />,
    title: '视频教程',
    description: '专业讲师录制的视频教程，图文并茂，通俗易懂。'
  },
  {
    icon: <TeamOutlined className="text-4xl text-blue-600" />,
    title: '社区讨论',
    description: '活跃的交易者社区，分享经验，解答疑惑。'
  },
  {
    icon: <TrophyOutlined className="text-4xl text-blue-600" />,
    title: '实战演练',
    description: '模拟交易环境，零风险实践交易策略。'
  }
];

const Education = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            学习资源
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            丰富的学习资源，助您成为专业的量化交易者
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200"
              bordered={false}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-full">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  {resource.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 