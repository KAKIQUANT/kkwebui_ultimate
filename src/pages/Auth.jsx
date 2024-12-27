import React, { useState, useEffect } from 'react';
import { Input, Button, Checkbox, message, Form } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../services/authService';
import Navbar from '../components/Navbar';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is already logged in
  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate(location.state?.from || '/');
    }
  }, [navigate, location]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      if (isLogin) {
        const data = await authService.login({
          username: values.username,
          password: values.password
        });

        if (data.code === 0) {
          message.success('登录成功！');
          navigate(location.state?.from || '/');
        } else {
          message.error(data.msg || '登录失败，请重试');
        }
      } else {
        if (values.password !== values.confirmPassword) {
          message.error('两次输入的密码不一致！');
          return;
        }
        if (!values.agreeToTerms) {
          message.error('请阅读并同意服务条款！');
          return;
        }

        const data = await authService.register({
          username: values.username,
          password: values.password,
          email: values.email
        });

        if (data.code === 0) {
          message.success('注册成功！');
          setIsLogin(true);
          form.resetFields();
        } else {
          message.error(data.msg || '注册失败，请重试');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      message.error(error.message || '操作失败，请重试');
    } finally {
      setLoading(false);
    }
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
                  onClick={() => {
                    setIsLogin(true);
                    form.resetFields();
                  }}
                >
                  登录
                </button>
                <span className="text-gray-500">|</span>
                <button
                  className={`text-lg font-medium transition-colors duration-200 ${
                    !isLogin ? 'text-blue-500' : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => {
                    setIsLogin(false);
                    form.resetFields();
                  }}
                >
                  注册
                </button>
              </div>
            </div>

            {/* 表单部分 */}
            <Form
              form={form}
              onFinish={handleSubmit}
              className="p-6 space-y-6"
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item
                name="username"
                label={<span className="text-gray-300">用户名</span>}
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-500" />}
                  placeholder="请输入用户名"
                  className="auth-input"
                />
              </Form.Item>

              {!isLogin && (
                <Form.Item
                  name="email"
                  label={<span className="text-gray-300">邮箱</span>}
                  rules={[
                    { required: true, message: '请输入邮箱' },
                    { type: 'email', message: '请输入有效的邮箱地址' }
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="text-gray-500" />}
                    placeholder="请输入邮箱"
                    className="auth-input"
                  />
                </Form.Item>
              )}

              <Form.Item
                name="password"
                label={<span className="text-gray-300">密码</span>}
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-500" />}
                  placeholder="请输入密码"
                  className="auth-input"
                />
              </Form.Item>

              {!isLogin && (
                <>
                  <Form.Item
                    name="confirmPassword"
                    label={<span className="text-gray-300">确认密码</span>}
                    rules={[
                      { required: true, message: '请再次输入密码' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('两次输入的密码不一致'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<KeyOutlined className="text-gray-500" />}
                      placeholder="请再次输入密码"
                      className="auth-input"
                    />
                  </Form.Item>

                  <Form.Item
                    name="agreeToTerms"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(new Error('请阅读并同意服务条款')),
                      },
                    ]}
                  >
                    <Checkbox className="text-gray-300">
                      我已阅读并同意
                      <a href="/terms" className="ml-1 text-blue-500 hover:text-blue-400">
                        服务条款
                      </a>
                    </Checkbox>
                  </Form.Item>
                </>
              )}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full h-10 bg-blue-600 hover:bg-blue-700 border-none"
                >
                  {isLogin ? '登录' : '注册'}
                </Button>
              </Form.Item>

              {isLogin && (
                <div className="flex justify-between text-sm">
                  <a href="/forgot-password" className="text-blue-500 hover:text-blue-400">
                    忘记密码？
                  </a>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth; 