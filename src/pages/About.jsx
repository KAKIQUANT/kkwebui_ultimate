import React from 'react';
import Navbar from '../components/Navbar'; // 导航栏
import Footer from '../components/Footer'; // 页脚
import './About.css'; // 引入全局样式
import { FaExclamationCircle, FaShieldAlt, FaInfoCircle } from 'react-icons/fa'; // 引入图标

const About = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-blue-600 to-purple-500 py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">About Our Quantitative Trading Platform</h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed">
          We strive to provide cutting-edge quantitative trading solutions to our clients. Our platform leverages advanced algorithms and data analysis to identify trading opportunities.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto p-8 mt-12 bg-white rounded-lg shadow-md">
        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We strive to provide cutting-edge quantitative trading solutions to our clients. Our platform leverages advanced algorithms and data analysis to identify trading opportunities.
          </p>
        </section>

        {/* Legal Disclaimers Section */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-primary">Legal Disclaimers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Disclaimer Cards */}
            {[
              {
                icon: <FaExclamationCircle className="text-3xl text-red-500" />,
                title: "Risk Warning",
                content:
                  "Trading in financial instruments carries a high level of risk to your capital with the possibility of losing more than your initial investment. You should not engage in trading unless you fully understand the nature of the transactions you are entering into and the extent of your exposure to loss.",
              },
              {
                icon: <FaInfoCircle className="text-3xl text-yellow-500" />,
                title: "No Guarantee of Profits",
                content:
                  "Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this platform.",
              },
              {
                icon: <FaShieldAlt className="text-3xl text-green-500" />,
                title: "Not Financial Advice",
                content:
                  "The information provided on this platform is for general informational purposes only and should not be considered as investment advice. Always seek the advice of a qualified financial advisor before making any investment decisions.",
              },
              {
                icon: <FaInfoCircle className="text-3xl text-blue-500" />,
                title: "Accuracy of Information",
                content:
                  "While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the platform or the information contained on the platform for any purpose.",
              },
              {
                icon: <FaShieldAlt className="text-3xl text-purple-500" />,
                title: "Regulatory Compliance",
                content:
                  "Our platform adheres to all applicable financial regulations. Users are responsible for ensuring their use of our platform complies with local laws and regulations in their jurisdiction.",
              },
            ].map((disclaimer, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {disclaimer.icon}
                  <h3 className="ml-4 text-2xl font-semibold">{disclaimer.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{disclaimer.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Acknowledgment */}
        <p className="text-center text-gray-600 mt-12">
          By using our platform, you acknowledge that you have read, understood, and agree to these disclaimers and the terms of service.
        </p>
      </div>
      
      <Footer />
    </>
  );
};

export default About;
