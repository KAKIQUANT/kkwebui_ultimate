import React from 'react';
import { Card, Button, List, Tag, Tabs, Input, Typography } from 'antd';
import {
  BookOutlined,
  ApiOutlined,
  ReadOutlined,
  RocketOutlined,
  ArrowRightOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { TabPane } = Tabs;
const { Search } = Input;
const { Title, Paragraph } = Typography;

const courses = [
  {
    title: "量化交易入门",
    icon: <RocketOutlined className="text-2xl text-blue-400" />,
    description: "从零开始学习量化交易的基础知识，包括策略开发、回测分析等",
    level: "初级",
    duration: "10课时",
    tags: ['基础', '策略', '回测']
  },
  {
    title: "Python量化实战",
    icon: <ThunderboltOutlined className="text-2xl text-green-400" />,
    description: "使用Python开发量化交易策略，实现自动化交易系统",
    level: "中级",
    duration: "15课时",
    tags: ['Python', '实战', '自动化']
  },
  {
    title: "因子研究与多因子策略",
    icon: <FileTextOutlined className="text-2xl text-yellow-400" />,
    description: "深入研究量化因子，构建多因子选股策略",
    level: "高级",
    duration: "12课时",
    tags: ['因子', '策略', '进阶']
  }
];

const documents = [
  {
    title: "API文档",
    icon: <ApiOutlined className="text-2xl text-blue-400" />,
    url: "https://api.kakiquant.com/",
    description: "详细的API接口文档，包含所有接口的使用说明和示例代码",
    tags: ['API', '文档', '指南']
  },
  {
    title: "策略开发指南",
    icon: <ReadOutlined className="text-2xl text-green-400" />,
    url: "https://docs.kakiquant.com/strategy",
    description: "全面的策略开发文档，包括策略框架、回测系统等详细说明",
    tags: ['策略', '开发', '文档']
  },
  {
    title: "常见问题解答",
    icon: <QuestionCircleOutlined className="text-2xl text-yellow-400" />,
    url: "https://docs.kakiquant.com/faq",
    description: "整理常见问题及解决方案，帮助您快速解决问题",
    tags: ['FAQ', '帮助', '指南']
  }
];

const videos = [
  {
    title: "量化交易实战教程",
    duration: "45:30",
    views: "2.3k",
    date: "2024-01-15",
    description: "手把手教你开发第一个量化交易策略"
  },
  {
    title: "因子挖掘技巧分享",
    duration: "38:15",
    views: "1.8k",
    date: "2024-01-14",
    description: "资深量化分析师分享因子研究方法"
  },
  {
    title: "Python策略优化技巧",
    duration: "52:20",
    views: "3.1k",
    date: "2024-01-13",
    description: "提升策略运行效率的关键技巧"
  }
];

const Knowledge = () => {
  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <BookOutlined className="text-2xl text-blue-400" />
              <Title level={2} className="!text-white !m-0">
                知识库
              </Title>
            </div>
            <Search
              placeholder="搜索知识库内容..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              className="w-64"
            />
          </div>

          <Tabs defaultActiveKey="1" className="knowledge-tabs">
            <TabPane
              tab={
                <span className="text-gray-300">
                  <ReadOutlined />
                  课程学习
                </span>
              }
              key="1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <Card
                    key={index}
                    className="bg-[#2c2d31] border-none hover:shadow-xl transition-shadow duration-300"
                    actions={[
                      <Button
                        type="link"
                        className="text-blue-400 hover:text-blue-500"
                        icon={<ArrowRightOutlined />}
                      >
                        开始学习
                      </Button>
                    ]}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        {course.icon}
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {course.title}
                          </h3>
                          <div className="flex space-x-2 mt-1">
                            <Tag color="blue">{course.level}</Tag>
                            <Tag color="green">{course.duration}</Tag>
                          </div>
                        </div>
                      </div>
                      <Paragraph className="text-gray-400">
                        {course.description}
                      </Paragraph>
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, i) => (
                          <Tag key={i} className="bg-blue-600/20 text-blue-400 border-blue-400">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabPane>

            <TabPane
              tab={
                <span className="text-gray-300">
                  <FileTextOutlined />
                  文档中心
                </span>
              }
              key="2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc, index) => (
                  <Card
                    key={index}
                    className="bg-[#2c2d31] border-none hover:shadow-xl transition-shadow duration-300"
                    actions={[
                      <Button
                        type="link"
                        className="text-blue-400 hover:text-blue-500"
                        icon={<ArrowRightOutlined />}
                        onClick={() => window.open(doc.url, '_blank')}
                      >
                        查看文档
                      </Button>
                    ]}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        {doc.icon}
                        <h3 className="text-xl font-semibold text-white">
                          {doc.title}
                        </h3>
                      </div>
                      <Paragraph className="text-gray-400">
                        {doc.description}
                      </Paragraph>
                      <div className="flex flex-wrap gap-2">
                        {doc.tags.map((tag, i) => (
                          <Tag key={i} className="bg-blue-600/20 text-blue-400 border-blue-400">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabPane>

            <TabPane
              tab={
                <span className="text-gray-300">
                  <VideoCameraOutlined />
                  视频教程
                </span>
              }
              key="3"
            >
              <Card className="bg-[#25262b] border-none">
                <List
                  itemLayout="horizontal"
                  dataSource={videos}
                  renderItem={(video) => (
                    <List.Item
                      className="border-b border-gray-700 last:border-b-0"
                      actions={[
                        <Button
                          type="link"
                          className="text-blue-400 hover:text-blue-500"
                          icon={<ArrowRightOutlined />}
                        >
                          观看视频
                        </Button>
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <VideoCameraOutlined className="text-2xl text-blue-400" />
                        }
                        title={
                          <div className="flex items-center space-x-3">
                            <span className="text-white">{video.title}</span>
                            <Tag color="blue">{video.duration}</Tag>
                            <Tag color="green">{video.views} 观看</Tag>
                          </div>
                        }
                        description={
                          <div className="text-gray-400">
                            <div>{video.description}</div>
                            <div className="mt-1 text-sm">{video.date}</div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Knowledge; 