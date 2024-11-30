import React from 'react';
import Navbar from '../components/Navbar';
import { GithubOutlined, GlobalOutlined, MailOutlined, WarningOutlined, SafetyCertificateOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const About = () => {
  const features = [
    {
      title: "量化交易平台",
      description: "提供完整的量化交易解决方案，从策略开发到实盘交易一站式服务"
    },
    {
      title: "AI 策略助手",
      description: "运用先进的人工智能技术，辅助策略设计和优化"
    },
    {
      title: "数据服务",
      description: "覆盖股票、期货等多个市场的高质量金融数据"
    },
    {
      title: "因子研究",
      description: "强大的因子研究工具，支持自定义因子开发和回测"
    }
  ];

  const contacts = [
    {
      icon: <GithubOutlined />,
      title: "GitHub",
      link: "https://github.com/kakiquant",
      description: "查看我们的开源项目"
    },
    {
      icon: <GlobalOutlined />,
      title: "官方网站",
      link: "https://www.kakiquant.com",
      description: "了解更多产品信息"
    },
    {
      icon: <MailOutlined />,
      title: "联系我们",
      link: "mailto:contact@kakiquant.com",
      description: "发送邮件咨询"
    }
  ];

  const disclaimers = [
    {
      icon: <WarningOutlined className="text-red-500" />,
      title: "投资风险警示",
      content: "金融市场投资具有高风险，您的投资本金可能会受到损失。在进行任何投资决策之前，请充分了解产品特性和风险，并根据自身的风险承受能力谨慎决策。",
      color: "border-red-500"
    },
    {
      icon: <ExclamationCircleOutlined className="text-yellow-500" />,
      title: "历史业绩说明",
      content: "历史业绩不代表未来表现。任何策略在过去的成功都不能保证未来会获得相似的收益。市场环境瞬息万变，投资者需要持续关注市场变化。",
      color: "border-yellow-500"
    },
    {
      icon: <SafetyCertificateOutlined className="text-blue-500" />,
      title: "非投资建议声明",
      content: "本平台提供的所有信息仅供参考，不构成任何投资建议或推荐。投资者应当独立判断和决策，并自行承担投资风险。",
      color: "border-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* 介绍部分 */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-100 mb-4">
              关于 KakiQuant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              KakiQuant 是一个专注于量化交易的综合性平台，致力于为量化交易者提供专业的工具和服务。
              我们运用先进的技术，帮助交易者构建、测试和部署交易策略。
            </p>
          </section>

          {/* 风险提示部分 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center flex items-center justify-center">
              <WarningOutlined className="text-red-500 mr-2" />
              风险提示
            </h2>
            <div className="space-y-6">
              {disclaimers.map((disclaimer, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800 rounded-lg p-6 border-l-4 ${disclaimer.color} transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">
                      {disclaimer.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-100 mb-2">
                        {disclaimer.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {disclaimer.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 补充免责声明 */}
            <div className="mt-8 bg-gray-800 rounded-lg p-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                免责声明：使用 KakiQuant 平台即表示您已充分了解并接受以下条款：
                <br />1. 量化交易涉及金融市场交易，具有高风险性，可能导致本金重大损失；
                <br />2. 平台提供的所有工具、数据和策略仅供参考，不构成任何投资建议；
                <br />3. 用户应当具备必要的金融、编程知识，并对自己的交易决策负责；
                <br />4. 平台不对用户的投资损益承担责任，请在充分评估风险后谨慎决策。
              </p>
            </div>
          </section>

          {/* 特性部分 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">
              核心功能
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
                >
                  <h3 className="text-xl font-medium text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 联系方式 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">
              联系我们
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors group"
                >
                  <div className="text-3xl text-blue-500 mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {contact.title}
                  </h3>
                  <p className="text-gray-400">
                    {contact.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
