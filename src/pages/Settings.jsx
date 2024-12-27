// src/pages/Settings.jsx
import React, { useState, useEffect } from 'react';
import { Input, Button, message, Tabs, Spin, Progress, Form, Modal, Space, Alert, Typography, Switch } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  KeyOutlined,
  ApiOutlined,
  CopyOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  BulbOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { settingsService } from '../services/settingsService';
import { authService } from '../services/authService';
import Navbar from '../components/Navbar';
import '../styles/pages/settings.css';
import { useTheme } from '../contexts/ThemeContext';

const { confirm } = Modal;
const { Paragraph, Text } = Typography;

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [profileForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [apiKeyForm] = Form.useForm();
  const [apiKeys, setApiKeys] = useState([]);
  const [apiQuota, setApiQuota] = useState({
    totalQuota: 1000,
    usedQuota: 150
  });
  const [newKeyModalVisible, setNewKeyModalVisible] = useState(false);
  const [newKeyData, setNewKeyData] = useState(null);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  // Check authentication and load data
  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/auth', { state: { from: '/settings' } });
      return;
    }
    loadUserData();
  }, [navigate]);

  const loadUserData = async () => {
    setLoading(true);
    try {
      const [userInfo, apiKeysData, quotaData] = await Promise.all([
        settingsService.getUserInfo(),
        settingsService.getApiKeys(),
        settingsService.getApiQuota()
      ]);

      profileForm.setFieldsValue({
        username: userInfo.username,
        email: userInfo.email,
        nickname: userInfo.nickname
      });

      setApiKeys(apiKeysData.api_keys || []);
      setApiQuota(quotaData);
    } catch (error) {
      message.error('加载用户数据失败');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (values) => {
    try {
      setLoading(true);
      await settingsService.updateProfile(values);
      message.success('个人信息更新成功');
    } catch (error) {
      message.error(error.message || '更新失败');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (values) => {
    try {
      setLoading(true);
      await settingsService.changePassword(values);
      message.success('密码修改成功');
      passwordForm.resetFields();
    } catch (error) {
      message.error(error.message || '密码修改失败');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateApiKey = async (values) => {
    try {
      setLoading(true);
      const response = await settingsService.createApiKey(values);
      
      // 保存新密钥数据用于显示
      setNewKeyData({
        name: values.name,
        id: response.id,
        key: response.api_key,
        created_at: response.created_at
      });
      
      // 更新密钥列表（添加新密钥，但不包含原始密钥值）
      setApiKeys(prevKeys => [...prevKeys, {
        id: response.id,
        name: values.name,
        created_at: response.created_at
      }]);
      
      // 重置表单
      apiKeyForm.resetFields();
      
      // 显示新密钥Modal
      setNewKeyModalVisible(true);
    } catch (error) {
      message.error(error.message || '创建API密钥失败');
    } finally {
      setLoading(false);
    }
  };

  const handleNewKeyModalClose = () => {
    setNewKeyModalVisible(false);
    setNewKeyData(null);
  };

  const handleDeleteApiKey = (keyId) => {
    confirm({
      title: '确定要删除这个API密钥吗？',
      icon: <ExclamationCircleOutlined />,
      content: '删除后将无法恢复，使用此密钥的应用将无法继续访问API。',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      async onOk() {
        try {
          await settingsService.deleteApiKey(keyId);
          message.success('API密钥删除成功');
          loadUserData();
        } catch (error) {
          message.error(error.message || '删除API密钥失败');
        }
      }
    });
  };

  const copyToClipboard = (text) => {
    if (!text) {
      message.error('无法复制密钥，请重试');
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      message.success('已复制到剪贴板');
    }).catch(() => {
      message.error('复制失败，请手动复制');
    });
  };

  const items = [
    {
      key: '1',
      label: '个人信息',
      children: (
        <Form
          form={profileForm}
          onFinish={handleUpdateProfile}
          layout="vertical"
          className="max-w-md"
        >
          <Form.Item
            name="username"
            label={<span className="text-gray-300">用户名</span>}
          >
            <Input
              prefix={<UserOutlined />}
              disabled
              className="settings-input opacity-50"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-gray-300">邮箱</span>}
          >
            <Input
              prefix={<MailOutlined />}
              disabled
              className="settings-input opacity-50"
            />
          </Form.Item>
          <Form.Item
            name="nickname"
            label={<span className="text-gray-300">昵称</span>}
            rules={[{ required: true, message: '请输入昵称' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="设置你的昵称"
              className="settings-input"
            />
          </Form.Item>
          <Form.Item
            label={<span className="text-gray-300">主题设置</span>}
          >
            <div className="flex items-center gap-2">
              <Switch
                checked={isDark}
                onChange={toggleTheme}
                checkedChildren="暗色"
                unCheckedChildren="亮色"
              />
              <span className="text-gray-300">
                <BulbOutlined className="mr-2" />
                {isDark ? '暗色主题' : '亮色主题'}
              </span>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              更新信息
            </Button>
          </Form.Item>
        </Form>
      )
    },
    {
      key: '2',
      label: '修改密码',
      children: (
        <Form
          form={passwordForm}
          onFinish={handleChangePassword}
          layout="vertical"
          className="max-w-md"
        >
          <Form.Item
            name="currentPassword"
            label={<span className="text-gray-300">当前密码</span>}
            rules={[{ required: true, message: '请输入当前密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="输入当前密码"
              className="settings-input"
            />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label={<span className="text-gray-300">新密码</span>}
            rules={[
              { required: true, message: '请输入新密码' },
              { min: 8, message: '密码长度至少8位' }
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined />}
              placeholder="输入新密码"
              className="settings-input"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label={<span className="text-gray-300">确认新密码</span>}
            dependencies={['newPassword']}
            rules={[
              { required: true, message: '请确认新密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined />}
              placeholder="再次输入新密码"
              className="settings-input"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              修改密码
            </Button>
          </Form.Item>
        </Form>
      )
    },
    {
      key: '3',
      label: 'API密钥',
      children: (
        <div className="space-y-6">
          {/* API配额展示 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-200 mb-4">API配额使用情况</h3>
            <Progress
              percent={Math.round((apiQuota.usedQuota / apiQuota.totalQuota) * 100)}
              status={apiQuota.usedQuota > apiQuota.totalQuota * 0.8 ? 'exception' : 'active'}
              className="mb-2"
            />
            <div className="text-sm text-gray-400">
              已使用 {apiQuota.usedQuota} / {apiQuota.totalQuota}
            </div>
          </div>

          {/* 创建新密钥 */}
          <Form
            form={apiKeyForm}
            onFinish={handleCreateApiKey}
            layout="inline"
            className="mb-6"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: '请输入API密钥名称' }]}
              className="flex-grow"
            >
              <Input
                prefix={<ApiOutlined />}
                placeholder="输入API密钥名称"
                className="settings-input"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                创建密钥
              </Button>
            </Form.Item>
          </Form>

          {/* API密钥列表 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    名称
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    ID
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
                      <span className="font-mono">{key.id}</span>
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

          {/* 新密钥显示Modal */}
          <Modal
            title={
              <div className="flex items-center gap-2 text-gray-100">
                <InfoCircleOutlined className="text-blue-500" />
                <span>新API密钥创建成功</span>
              </div>
            }
            open={newKeyModalVisible}
            onCancel={handleNewKeyModalClose}
            footer={[
              <Button
                key="copy"
                type="primary"
                icon={<CopyOutlined />}
                onClick={() => copyToClipboard(newKeyData?.key)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                复制密钥
              </Button>,
              <Button
                key="close"
                onClick={handleNewKeyModalClose}
              >
                关闭
              </Button>
            ]}
            className="settings-modal"
            width={600}
            maskClosable={false}
            closable={false}
          >
            <Alert
              message="重要提示"
              description="这是唯一一次显示完整API密钥的机会。请立即保存此密钥，关闭此窗口后将无法再次查看完整的密钥值。"
              type="warning"
              showIcon
              className="mb-4"
            />
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <div className="mb-2">
                <Text className="text-gray-300">密钥名称：</Text>
                <Text className="text-gray-100 ml-2">{newKeyData?.name}</Text>
              </div>
              <div className="mb-2">
                <Text className="text-gray-300">密钥ID：</Text>
                <Text className="text-gray-100 font-mono ml-2">{newKeyData?.id}</Text>
              </div>
              <div>
                <Text className="text-gray-300">密钥值：</Text>
                <div className="mt-2 relative">
                  <pre className="bg-gray-800 p-3 rounded font-mono text-gray-100 break-all">
                    {newKeyData?.key}
                  </pre>
                  <Button
                    type="text"
                    icon={<CopyOutlined />}
                    onClick={() => copyToClipboard(newKeyData?.key)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-blue-400"
                  />
                </div>
              </div>
            </div>
          </Modal>
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
              <Spin spinning={loading}>
                <Tabs
                  items={items}
                  className="settings-tabs"
                  defaultActiveKey="1"
                />
              </Spin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
