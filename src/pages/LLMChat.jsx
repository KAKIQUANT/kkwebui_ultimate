// components/LLMChat.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import '../styles/pages/llmchat.css';

const LLMChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      { 
        sender: 'assistant',
        text: '你好！我是 KakiQuant 的 AI 助手。我可以帮你解答关于量化交易的问题。',
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = {
      sender: 'user',
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const assistantMessage = {
        sender: 'assistant',
        text: `这是一个模拟回复。您说: "${input.trim()}"`,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="border-b border-gray-700 p-4">
              <h1 className="text-xl font-medium text-gray-100 text-center">
                AI 策略助手
              </h1>
            </div>
            
            <div className="h-[calc(100vh-16rem)] overflow-y-auto p-4 space-y-4 scrollbar-custom">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    <p className="break-words">{msg.text}</p>
                    <span className="block text-xs opacity-75 mt-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-700 p-4">
              <div className="flex gap-2">
                <Input.TextArea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="输入您的问题..."
                  autoSize={{ minRows: 1, maxRows: 4 }}
                  className="flex-1 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="flex-none bg-blue-600 border-blue-600 hover:bg-blue-700"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LLMChat;
