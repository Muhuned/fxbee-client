import React from 'react';
import beeLogo from './assets/bee-logo-yellow.png'; // Ensure this path is correct and image exists

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

      <section className="flex justify-center items-center mt-20">
        <img
          src="/assets/bee-logo-yellow.png"
          alt="Bee Icon"
          className="w-24 h-24 animate-bounce"
        />
      </section>

      <section className="mt-24 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#222222] font-['Poppins']">About FXBee</h2>
        <p className="text-lg mb-4 text-[#555555]">
          FXBee was born out of the belief that Forex trading should be smart, accessible, and ethical. We built this
          platform to empower traders at all levels with real-time forecasts, intelligent bots, and simplified learning.
        </p>
        <p className="text-lg mb-4 text-[#555555]">
          Whether you're just starting your journey or managing multiple accounts, FXBee offers a full stack of tools,
          strategies, and daily analysis that adapts to you. Our goal is to be better than BabyPips — faster insights,
          practical tools, and bots you can trust.
        </p>
        <p className="text-lg text-[#555555]">
          We believe trading success isn’t about luck. It’s about informed decisions backed by data and simplicity.
          That’s what FXBee delivers — every day.
        </p>
      </section>

      <section id="tools" className="mt-24 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#222222] font-['Poppins']">Smart Tools for Every Trader</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-2xl shadow p-6 bg-[#F5F5F5]">
            <h3 className="text-xl font-semibold mb-2">📊 Daily Forecast Panel</h3>
            <p>Live pullback zones, directional bias, SL/TP targets, and confidence scores for 20+ pairs.</p>
          </div>
          <div className="border rounded-2xl shadow p-6 bg-[#F5F5F5]">
            <h3 className="text-xl font-semibold mb-2">📐 Pivot Zone Calculator</h3>
            <p>Standard, Camarilla, Fibonacci & Woodie pivots updated daily to show market structure.</p>
          </div>
          <div className="border rounded-2xl shadow p-6 bg-[#F5F5F5]">
            <h3 className="text-xl font-semibold mb-2">🔔 News Filter</h3>
            <p>Blocks trade signals during high-impact events. Protects you from unnecessary volatility.</p>
          </div>
          <div className="border rounded-2xl shadow p-6 bg-[#F5F5F5]">
            <h3 className="text-xl font-semibold mb-2">📈 ATR Volatility Meter</h3>
            <p>Automatically adapts SL/TP based on recent volatility and ATR levels on each pair.</p>
          </div>
          <div className="border rounded-2xl shadow p-6 bg-[#F5F5F5]">
            <h3 className="text-xl font-semibold mb-2">🧪 Strategy Tester</h3>
            <p>Upload or simulate your bot logic and visualize trades, entries, and drawdowns on a dashboard.</p>
          </div>
        </div>
      </section>

      <section id="smartpipbot" className="mt-24 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#222222] font-['Poppins']">SmartPipBot: Trade with Precision</h2>
        <div className="bg-[#FFF8E6] p-6 rounded-xl shadow">
          <p className="text-lg mb-4 text-[#555555]">
            SmartPipBot is FXBee’s custom Expert Advisor (EA) designed to execute high-probability trades with smart entries and exits.
            Built with a forecast-based limit order system and volatility-adjusted SL/TP, it fits perfectly with modern market conditions.
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2 text-[#555555]">
            <li>EMA 50/200 Trend Confirmation</li>
            <li>Pullback Forecast Zones + RSI + PSAR filter</li>
            <li>ATR-based SL/TP + Auto-Breakeven + Trail Stop</li>
            <li>News Filter to block volatile events</li>
            <li>Optimized for Gold, Forex majors, and crypto</li>
          </ul>
          <div className="mt-6 text-center">
            <input
              type="email"
              placeholder="Request early access"
              className="border border-gray-300 px-4 py-2 rounded-xl w-72"
            />
            <button className="ml-2 bg-[#FFB000] text-white px-4 py-2 rounded-xl hover:bg-yellow-600">
              Get Access
            </button>
          </div>
        </div>
      </section>

      <section id="newsletter" className="mt-24 text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-[#222222] font-['Poppins']">Start Your Trading Evolution</h2>
        <p className="mb-6 text-[#555555]">Join our newsletter for forecasts, updates, and early bot access.</p>
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 px-4 py-2 rounded-xl w-72"
        />
        <button className="ml-2 bg-[#FFB000] text-white px-4 py-2 rounded-xl hover:bg-yellow-600">
          Subscribe
        </button>
      </section>

      <footer className="mt-24 text-center text-sm py-6 text-[#555555]">
        © {new Date().getFullYear()} FXBee. Fly Your Forex Forward.
      </footer>
    </main>
  );
}
