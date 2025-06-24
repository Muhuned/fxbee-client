import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl font-bold mb-4">
          Smarter Trading Takes Flight with <span className="text-yellow-500">FXBee</span>
        </h1>
        <p className="text-lg mb-6">
          Your all-in-one Forex hub for forecasts, bots, education, and strategy — built for traders who want to win.
        </p>
        <a
          href="#tools"
          className="inline-block bg-yellow-500 text-white text-lg px-6 py-3 rounded-xl hover:bg-yellow-600 transition"
        >
          Explore Smart Tools →
        </a>
      </section>

      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">About FXBee</h2>
        <p className="text-lg mb-4">
          FXBee was born out of the belief that Forex trading should be smart, accessible, and ethical. We built this
          platform to empower traders at all levels with real-time forecasts, intelligent bots, and simplified learning.
        </p>
        <p className="text-lg mb-4">
          Whether you're just starting your journey or managing multiple accounts, FXBee offers a full stack of tools,
          strategies, and daily analysis that adapts to you. Our goal is to be better than BabyPips — faster insights,
          practical tools, and bots you can trust.
        </p>
        <p className="text-lg">
          We believe trading success isn’t about luck. It’s about informed decisions backed by data and simplicity.
          That’s what FXBee delivers — every day.
        </p>
      </section>

      <section id="tools" className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Smart Tools for Every Trader</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">📊 Daily Forecast Panel</h3>
            <p>Live pullback zones, directional bias, SL/TP targets, and confidence scores for 20+ pairs.</p>
          </div>
          <div className="border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">📐 Pivot Zone Calculator</h3>
            <p>Standard, Camarilla, Fibonacci & Woodie pivots updated daily to show market structure.</p>
          </div>
          <div className="border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">🔔 News Filter</h3>
            <p>Blocks trade signals during high-impact events. Protects you from unnecessary volatility.</p>
          </div>
          <div className="border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">📈 ATR Volatility Meter</h3>
            <p>Automatically adapts SL/TP based on recent volatility and ATR levels on each pair.</p>
          </div>
          <div className="border rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">🧪 Strategy Tester</h3>
            <p>Upload or simulate your bot logic and visualize trades, entries, and drawdowns on a dashboard.</p>
          </div>
        </div>
      </section>

      <section id="smartpipbot" className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">SmartPipBot: Trade with Precision</h2>
        <div className="bg-yellow-50 p-6 rounded-xl shadow">
          <p className="text-lg mb-4">
            SmartPipBot is FXBee’s custom Expert Advisor (EA) designed to execute high-probability trades with smart entries and exits.
            Built with a forecast-based limit order system and volatility-adjusted SL/TP, it fits perfectly with modern market conditions.
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2">
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
            <button className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600">
              Get Access
            </button>
          </div>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Trading Evolution</h2>
        <p className="mb-6">Join our newsletter for forecasts, updates, and early bot access.</p>
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 px-4 py-2 rounded-xl w-72"
        />
        <button className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600">
          Subscribe
        </button>
      </section>
    </main>
  );
}
