import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import Education from '../components/Education';
import CallToAction from '../components/CallToAction';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/app.css';

const Home = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDark ? 'dark' : ''}`}>
      <Navbar />
      <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-200">
        <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
        <Features />
        <Statistics />
        <Education />
        <CallToAction onRegister={handleGetStarted} />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 