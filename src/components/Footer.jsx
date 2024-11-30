// components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTiktok, 
  FaWeibo, 
  FaBilibili, 
  FaZhihu, 
  FaTelegram,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa6';
import '../styles/footer.css';
// Import QR code images
import qqQR from '../assets/qq-qr.png';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscriptionStatus('感谢订阅！');
    setEmail('');
    setTimeout(() => setSubscriptionStatus(''), 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* 关于我们部分 */}
          <div className="footer-section">
            <h3 className="footer-heading">关于KakiQuant</h3>
            <ul className="footer-list">
              <li><Link to="/about" className="footer-link">关于我们</Link></li>
              <li><Link to="/careers" className="footer-link">加入我们</Link></li>
              <li><Link to="/partnerships" className="footer-link">商务合作</Link></li>
              <li><Link to="/tech" className="footer-link">链卡量化</Link></li>
              <li><Link to="/terms" className="footer-link">用户条款 / 隐私协议</Link></li>
            </ul>
          </div>

          {/* 帮助与支持部分 */}
          <div className="footer-section">
            <h3 className="footer-heading">帮助与支持</h3>
            <ul className="footer-list">
              <li><Link to="/getting-started" className="footer-link">新手入门</Link></li>
              <li><Link to="/faq" className="footer-link">常见问题</Link></li>
              <li><Link to="/academy" className="footer-link">量化学院</Link></li>
              <li><Link to="/docs" className="footer-link">文档</Link></li>
              <li><Link to="/feedback" className="footer-link">反馈建议</Link></li>
            </ul>
          </div>

          {/* 关注我们部分 */}
          <div className="footer-section">
            <h3 className="footer-heading">关注我们</h3>
            <div className="social-grid">
              <div className="social-column">
                <ul className="footer-list">
                  <li>
                    <a href="https://www.tiktok.com" className="footer-link">
                      <FaTiktok className="w-4 h-4 inline-block mr-2" />
                      抖音
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bilibili.com" className="footer-link">
                      <FaBilibili className="w-4 h-4 inline-block mr-2" />
                      B站
                    </a>
                  </li>
                  <li>
                    <a href="https://www.zhihu.com" className="footer-link">
                      <FaZhihu className="w-4 h-4 inline-block mr-2" />
                      知乎
                    </a>
                  </li>
                  <li>
                    <a href="https://weibo.com" className="footer-link">
                      <FaWeibo className="w-4 h-4 inline-block mr-2" />
                      微博
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/kakiquant" className="footer-link">
                      <FaTelegram className="w-4 h-4 inline-block mr-2" />
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-column">
                <ul className="footer-list">
                  <li>
                    <a href="https://discord.gg/kakiquant" className="footer-link">
                      <FaDiscord className="w-4 h-4 inline-block mr-2" />
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kakiquant" className="footer-link">
                      <FaGithub className="w-4 h-4 inline-block mr-2" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/company/kakiquant" className="footer-link">
                      <FaLinkedin className="w-4 h-4 inline-block mr-2" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/kakiquant" className="footer-link">
                      <FaTwitter className="w-4 h-4 inline-block mr-2" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/kakiquant" className="footer-link">
                      <FaInstagram className="w-4 h-4 inline-block mr-2" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 联系我们部分 */}
          <div className="footer-section">
            <h3 className="footer-heading">联系我们</h3>
            <div className="contact-info">
              <div className="qr-section">
                <img src={qqQR} alt="用户QQ群" className="qr-image" />
                <p>用户QQ群</p>
              </div>
              <div className="email-section">
                <p className="text-gray-300">商务合作：</p>
                <a href="mailto:business@kakiquant.com" className="footer-link">
                  business@kakiquant.com
                </a>
                <p className="text-gray-300 mt-2">技术支持：</p>
                <a href="mailto:support@kakiquant.com" className="footer-link">
                  support@kakiquant.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KakiQuant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
