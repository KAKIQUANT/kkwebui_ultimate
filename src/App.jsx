import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Education from './components/Education';
import CallToAction from './components/CallToAction';
import './styles/app.css';

function App() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
        <Features />
        <Statistics />
        <Education />
        <CallToAction onRegister={handleGetStarted} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
