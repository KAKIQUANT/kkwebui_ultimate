import React, { useState } from 'react';
import { Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // 登录逻辑
        const response = await axios.post('http://10.201.8.89:8000/login', {
          username: form.username,
          password: form.password
        });

        if (response.data.code === 0) {
          // 保存 token 和用户信息
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('userInfo', JSON.stringify({
            username: form.username,
            avatar: null,
          }));
          message.success('登录成功！');
          navigate('/');
        } else {
          message.error(response.data.msg || '登录失败，请重试');
        }
      } else {
        // 注册逻辑
        if (form.password !== form.confirmPassword) {
          message.error('两次输入的密码不一致！');
          return;
        }
        if (!form.agreeToTerms) {
          message.error('请阅读并同意服务条款！');
          return;
        }

        const response = await axios.post('http://10.201.8.89:8000/register', {
          username: form.username,
          password: form.password,
          email: form.email
        });

        if (response.data.code === 0) {
          message.success('注册成功！');
          setIsLogin(true);
        } else {
          message.error(response.data.msg || '注册失败，请重试');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      message.error(error.response?.data?.msg || '操作失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'agreeToTerms' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="pt-16 pb-8">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            {/* 标题部分 */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-center space-x-4">
                <button
                  className={`text-lg font-medium transition-colors duration-200 ${
                    isLogin ? 'text-blue-500' : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  登录
                </button>
                <span className="text-gray-500">|</span>
                <button
                  className={`text-lg font-medium transition-colors duration-200 ${
                    !isLogin ? 'text-blue-500' : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  注册
                </button>
              </div>
            </div>

            {/* 表单部分 */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {isLogin ? (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      用户名
                    </label>
                    <Input
                      prefix={<UserOutlined className="text-gray-500" />}
                      name="username"
                      placeholder="请输入用户名"
                      value={form.username}
                      onChange={handleInputChange}
                      className="auth-input"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      用户名
                    </label>
                    <Input
                      prefix={<UserOutlined className="text-gray-500" />}
                      name="username"
                      placeholder="请输入用户名"
                      value={form.username}
                      onChange={handleInputChange}
                      className="auth-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      邮箱
                    </label>
                    <Input
                      prefix={<MailOutlined className="text-gray-500" />}
                      name="email"
                      type="email"
                      placeholder="请输入邮箱"
                      value={form.email}
                      onChange={handleInputChange}
                      className="auth-input"
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  密码
                </label>
                <Input.Password
                  prefix={<LockOutlined className="text-gray-500" />}
                  name="password"
                  placeholder="请输入密码"
                  value={form.password}
                  onChange={handleInputChange}
                  className="auth-input"
                />
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      确认密码
                    </label>
                    <Input.Password
                      prefix={<KeyOutlined className="text-gray-500" />}
                      name="confirmPassword"
                      placeholder="请再次输入密码"
                      value={form.confirmPassword}
                      onChange={handleInputChange}
                      className="auth-input"
                    />
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      name="agreeToTerms"
                      checked={form.agreeToTerms}
                      onChange={handleInputChange}
                      className="text-gray-300"
                    >
                      我已阅读并同意
                    </Checkbox>
                    <a href="/terms" className="ml-1 text-blue-500 hover:text-blue-400">
                      服务条款
                    </a>
                  </div>
                </>
              )}

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-10 bg-blue-600 hover:bg-blue-700 border-none"
              >
                {isLogin ? '登录' : '注册'}
              </Button>

              {isLogin && (
                <div className="flex justify-between text-sm">
                  <a href="/forgot-password" className="text-blue-500 hover:text-blue-400">
                    忘记密码？
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth; 