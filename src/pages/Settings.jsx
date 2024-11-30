// src/pages/Settings.jsx
import React, { useState, useEffect } from 'react';
import { Input, Button, message, Tabs, Spin } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, KeyOutlined, ApiOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    nickname: ''
  });
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [apiKeys, setApiKeys] = useState([]);
  const [apiQuota, setApiQuota] = useState({
    totalQuota: 1000,
    usedQuota: 150
  });
  const [newApiKeyName, setNewApiKeyName] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/auth');
      return;
    }
    fetchUserInfo();
    fetchApiKeys();
  }, [token, navigate]);

  const fetchUserInfo = async () => {
    try {
      const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      const response = await axios.get('http://10.201.8.89:8000/users/info', {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      
      setUserInfo({
        username: savedUserInfo.username,
        email: response.data.email || '',
        nickname: response.data.nickname || ''
      });
    } catch (error) {
      message.error('获取用户信息失败');
    }
  };

  const fetchApiKeys = async () => {
    try {
      const response = await axios.get('http://10.201.8.89:8000/users/api-keys', {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      setApiKeys(response.data.api_keys || []);
    } catch (error) {
      console.error('Error fetching API keys:', error);
      message.error('获取API密钥失败');
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      // 模拟更新成功
      setTimeout(() => {
        message.success('个人信息更新成功');
        setLoading(false);
      }, 1000);
    } catch (error) {
      message.error('更新失败');
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (password.new !== password.confirm) {
      message.error('两次输入的新密码不一致');
      return;
    }
    setLoading(true);
    try {
      // 模拟密码修改成功
      setTimeout(() => {
        message.success('密码修改成功');
        setPassword({ current: '', new: '', confirm: '' });
        setLoading(false);
      }, 1000);
    } catch (error) {
      message.error('密码修改失败');
      setLoading(false);
    }
  };

  const handleCreateApiKey = async () => {
    if (!newApiKeyName.trim()) {
      message.error('请输入API密钥名称');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://10.201.8.89:8000/users/api-keys', 
        { name: newApiKeyName },
        { 
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        }
      );
      message.success('API密钥创建成功');
      setNewApiKeyName('');
      fetchApiKeys();
    } catch (error) {
      console.error('Error creating API key:', error);
      message.error('创建API密钥失败');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteApiKey = async (keyId) => {
    try {
      await axios.delete(`http://10.201.8.89:8000/users/api-keys/${keyId}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      message.success('API密钥删除成功');
      fetchApiKeys();
    } catch (error) {
      console.error('Error deleting API key:', error);
      message.error('删除API密钥失败');
    }
  };

  // 定义 Tabs 的内容
  const items = [
    {
      key: '1',
      label: '个人信息',
      children: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">用户名</label>
            <Input
              prefix={<UserOutlined />}
              value={userInfo.username}
              disabled
              className="settings-input opacity-50"
            />
            <p className="text-xs text-gray-500">用户名不可更改</p>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">邮箱</label>
            <Input
              prefix={<MailOutlined />}
              value={userInfo.email}
              disabled
              className="settings-input opacity-50"
            />
            <p className="text-xs text-gray-500">邮箱不可更改</p>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">昵称</label>
            <Input
              prefix={<UserOutlined />}
              value={userInfo.nickname}
              onChange={e => setUserInfo({ ...userInfo, nickname: e.target.value })}
              className="settings-input"
              placeholder="设置你的昵称"
            />
          </div>
          <Button
            type="primary"
            onClick={handleUpdateProfile}
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            更新昵称
          </Button>
        </div>
      )
    },
    {
      key: '2',
      label: '修改密码',
      children: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">当前密码</label>
            <Input.Password
              prefix={<LockOutlined />}
              value={password.current}
              onChange={e => setPassword({ ...password, current: e.target.value })}
              className="settings-input"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">新密码</label>
            <Input.Password
              prefix={<KeyOutlined />}
              value={password.new}
              onChange={e => setPassword({ ...password, new: e.target.value })}
              className="settings-input"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">确认新密码</label>
            <Input.Password
              prefix={<KeyOutlined />}
              value={password.confirm}
              onChange={e => setPassword({ ...password, confirm: e.target.value })}
              className="settings-input"
            />
          </div>
          <Button
            type="primary"
            onClick={handleChangePassword}
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            修改密码
          </Button>
        </div>
      )
    },
    {
      key: '3',
      label: 'API密钥',
      children: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">新建API密钥</label>
            <div className="flex gap-2">
              <Input
                prefix={<ApiOutlined />}
                value={newApiKeyName}
                onChange={e => setNewApiKeyName(e.target.value)}
                placeholder="输入API密钥名称"
                className="settings-input"
              />
              <Button
                type="primary"
                onClick={handleCreateApiKey}
                loading={loading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                创建
              </Button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    名称
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    密钥
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    创建时间
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {apiKeys.map((key) => (
                  <tr key={key.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {key.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {key.key}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(key.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <Button
                        danger
                        onClick={() => handleDeleteApiKey(key.id)}
                        className="hover:bg-red-700"
                      >
                        删除
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-100 mb-6">账号设置</h1>
              <Tabs
                items={items}
                className="settings-tabs"
                defaultActiveKey="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
