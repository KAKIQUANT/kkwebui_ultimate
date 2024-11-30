import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Knowledge() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <iframe
          src="https://www.wolai.com/kakiquant/knowledge"
          className="w-full h-[calc(100vh-4rem)]"
          frameBorder="0"
          title="KakiQuant Knowledge Base"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Knowledge; 