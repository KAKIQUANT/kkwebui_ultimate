// components/LLMChat.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Input, Button, Card, Avatar, Tooltip, message, Typography } from 'antd';
import { SendOutlined, RobotOutlined, UserOutlined, BulbOutlined, BookOutlined, QuestionCircleOutlined, ExperimentOutlined, LineChartOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';

const { TextArea } = Input;
const { Title, Text } = Typography;

const LLMChat = () => {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: '你好！我是 KakiQuant 的 AI 助手。我可以帮你：\n\n1. 解答量化交易相关问题\n2. 分析策略逻辑\n3. 提供策略优化建议\n4. 讲解技术指标\n\n请问有什么我可以帮你的吗？'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 添加用户消息
    const userMessage = {
      type: 'user',
      content: input.trim()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // TODO: 调用 AI 助手 API
      // const response = await aiService.chat(input.trim());
      
      // 模拟 API 响应
      await new Promise(resolve => setTimeout(resolve, 1000));
      const assistantMessage = {
        type: 'assistant',
        content: '这是一个示例回复。实际部署时，这里会返回真实�� AI 助手回复。'
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      message.error('发送消息失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const SideCard = ({ icon, title, description }) => (
    <Card className="bg-white border border-gray-200 mb-4 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <Text className="text-gray-800 font-medium">{title}</Text>
          <Text className="text-gray-500 block text-sm">{description}</Text>
        </div>
      </div>
    </Card>
  );

  const PromptBubble = ({ icon, text }) => (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer mb-4 shadow-sm"
      onClick={() => setInput(text)}
    >
      <div className="flex items-center space-x-3 mb-2">
        {icon}
        <Text className="text-gray-800 font-medium">示例问题</Text>
      </div>
      <Text className="text-gray-600 text-sm">{text}</Text>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-6 h-[calc(100vh-4rem)]">
          {/* 左侧边栏 */}
          <div className="col-span-3 hidden lg:block overflow-y-auto">
            <Title level={4} className="text-gray-800 mb-4">AI 助手功能</Title>
            <SideCard
              icon={<BulbOutlined className="text-2xl text-yellow-500" />}
              title="策略优化建议"
              description="针对您的交易策略提供优化建议"
            />
            <SideCard
              icon={<BookOutlined className="text-2xl text-blue-500" />}
              title="技术指标讲解"
              description="详细解释各类技术指标的原理和应用"
            />
            <SideCard
              icon={<QuestionCircleOutlined className="text-2xl text-green-500" />}
              title="量化知识解答"
              description="解答量化交易相关的各类问题"
            />

            <Title level={4} className="text-gray-800 mb-4 mt-8">使用技巧</Title>
            <Card className="bg-white border border-gray-200 shadow-sm">
              <ul className="list-disc text-gray-600 ml-4 space-y-2">
                <li>可以询问具体的技术指标计算方法</li>
                <li>描述您的策略逻辑，获取优化建议</li>
                <li>提供回测结果，分析策略表现</li>
                <li>探讨不同市场条件下的策略调整</li>
                <li>学习新的量化交易概念和方法</li>
              </ul>
            </Card>
          </div>

          {/* 中间聊天区域 */}
          <div className="col-span-12 lg:col-span-6">
            <Card 
              className="h-full bg-white border border-gray-200 shadow-sm" 
              bodyStyle={{ 
                height: '100%', 
                padding: 0,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* 聊天消息区域 - 可滚动 */}
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-4 p-6">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <Avatar
                        icon={message.type === 'assistant' ? <RobotOutlined /> : <UserOutlined />}
                        className={message.type === 'assistant' ? 'bg-blue-500' : 'bg-green-500'}
                      />
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'assistant'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-blue-500 text-white'
                        }`}
                      >
                        <pre className="whitespace-pre-wrap font-sans">
                          {message.content}
                        </pre>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* 输入区域 - 固定在底部 */}
              <div className="border-t border-gray-200 p-4 bg-white mt-auto">
                <div className="flex space-x-4">
                  <TextArea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="输入你的问题..."
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    className="flex-grow bg-white border-gray-300 text-gray-800"
                  />
                  <Tooltip title="发送">
                    <Button
                      type="primary"
                      icon={<SendOutlined />}
                      onClick={handleSend}
                      loading={loading}
                      className="bg-blue-500 hover:bg-blue-600"
                    />
                  </Tooltip>
                </div>
              </div>
            </Card>
          </div>

          {/* 右侧提示区域 */}
          <div className="col-span-3 hidden lg:block overflow-y-auto">
            <Title level={4} className="text-gray-800 mb-4">示例提示</Title>
            <PromptBubble
              icon={<LineChartOutlined className="text-2xl text-blue-500" />}
              text="请解释一下 MACD 指标的计算方法和实际应用场景"
            />
            <PromptBubble
              icon={<BulbOutlined className="text-2xl text-yellow-500" />}
              text="我的策略使用了双均线交叉，但回测效果不理想，有什么优化建议吗？"
            />
            <PromptBubble
              icon={<ExperimentOutlined className="text-2xl text-purple-500" />}
              text="在震荡市场中，如何优化动量策略的参数？"
            />
            <PromptBubble
              icon={<ThunderboltOutlined className="text-2xl text-orange-500" />}
              text="如何使用波动率因子来优化策略的仓位管理？"
            />
            <PromptBubble
              icon={<QuestionCircleOutlined className="text-2xl text-green-500" />}
              text="请介绍一下 Alpha 因子的开发流程和注意事项"
            />
            <PromptBubble
              icon={<BookOutlined className="text-2xl text-red-500" />}
              text="如何评估一个量化策略的稳定性和鲁棒性？"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMChat;
