// components/Footer.jsx
import React from 'react';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, WechatOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-[#1a1b1e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img
                className="h-6 w-auto"
                src="/kaki-logo.png"
                alt="KakiQuant"
              />
              <span className="ml-3 text-lg font-semibold text-white">
                KakiQuant
              </span>
            </div>
            <p className="text-gray-400 max-w-2xl">
              专业的量化交易平台，为您提供全方位的量化投资解决方案。
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/kakiquant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubOutlined className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/kakiquant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <TwitterOutlined className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/company/kakiquant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedinOutlined className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <WechatOutlined className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
