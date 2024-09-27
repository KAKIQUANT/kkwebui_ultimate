// pages/Login.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // 导航栏
import Footer from '../components/Footer'; // 页脚
import '../index.css'; // 引入全局样式

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 处理登录逻辑
    console.log('登录信息：', { email, password });
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>登录</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">电子邮件:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">密码:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">登录</button>
        </form>
        <p>没有账号？<a href="/register">注册</a></p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
