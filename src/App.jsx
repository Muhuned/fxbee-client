import React from 'react';
import beeLogo from './assets/bee-logo-yellow.png';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-['Open_Sans']">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="flex items-center space-x-3">
          <img src={beeLogo} alt="FXBee Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold font-['Poppins'] text-[#222222]">FXBee</h1>
        </div>
        <nav className="space-x-6 text-lg">
          <a href="#tools" className="text-[#222222] hover:text-[#FFB000]">Tools</a>
          <a href="#smartpipbot" className="text-[#222222] hover:text-[#FFB000]">SmartPipBot</a>
          <a href="#newsletter" className="text-[#222222] hover:text-[#FFB000]">Contact</a>
        </nav>
      </header>

      <section className="text-center max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-5xl font-bold mb-4 text-[#222222] font-['Poppins']">
          Smarter Trading Takes Flight with <span className="text-[#FFB000]">FXBee</span>
        </h2>
        <p className="text-lg mb-6 text-[#555555]">
          Your all-in-one Forex hub for forecasts, bots, education, and strategy — built for traders who want to win.
        </p>
        <a
          href="#tools"
          className="inline-block bg-[#FFB000] text-white text-lg px-6 py-3 rounded-xl hover:bg-yellow-600 transition"
        >
          Explore Smart Tools →
        </a>
      </section>
    </main>
  );
}
