import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-900">
      <header className="bg-yellow-300 p-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🐝 <span>FXBee</span>
        </h1>
        <nav className="space-x-4">
          <a href="#tools">Tools</a>
          <a href="#courses">Courses</a>
          <a href="#bot">Bot</a>
          <a href="#forum">Forum</a>
          <a href="#" className="bg-white px-4 py-2 rounded text-yellow-900 font-semibold">Sign Up</a>
        </nav>
      </header>

      <main className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4">Fly Your Forex Forward</h2>
        <p className="mb-6">Smart, buzzing education to take your trading to the next level.</p>
        <button className="bg-yellow-400 px-6 py-2 rounded text-lg font-semibold">Get Started</button>
      </main>

      <section id="tools" className="bg-white py-10">
        <h3 className="text-2xl font-bold text-center mb-6">🛠 FXBee Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="bg-yellow-100 p-4 rounded shadow text-center">📏 Pip Calculator</div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">🧮 Lot Size Calculator</div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">📊 Risk/Reward Visual</div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">📅 Economic Calendar</div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">📌 Pivot Zones</div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">📈 Strength Meter</div>
        </div>
      </section>

      <section id="bot" className="bg-yellow-100 py-10 text-center">
        <h3 className="text-2xl font-bold mb-4">🤖 SmartPipBot</h3>
        <p className="max-w-xl mx-auto mb-6">Ask anything about trading — FXBee’s bot will teach you pips, patterns, risk, and more.</p>
        <div className="bg-white rounded shadow max-w-md mx-auto p-4 text-left">
          <p><strong>🐝 Bot:</strong> Hi! How can I assist you today?</p>
          <p className="mt-2"><strong>You:</strong> What is a pip?</p>
          <p className="mt-2"><strong>🐝 Bot:</strong> A pip is the smallest price movement in a forex pair, usually 0.0001.</p>
        </div>
      </section>

      <section id="courses" className="bg-white py-10">
        <h3 className="text-2xl font-bold text-center mb-6">📚 FXBee Academy</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="bg-yellow-50 p-4 border rounded text-center shadow">
            <h4 className="font-bold text-lg">Beginner</h4>
            <p className="text-sm mt-2">Learn basics of forex, pips, and pairs</p>
          </div>
          <div className="bg-yellow-50 p-4 border rounded text-center shadow">
            <h4 className="font-bold text-lg">Intermediate</h4>
            <p className="text-sm mt-2">Strategies, risk management, indicators</p>
          </div>
          <div className="bg-yellow-50 p-4 border rounded text-center shadow">
            <h4 className="font-bold text-lg">Advanced</h4>
            <p className="text-sm mt-2">Backtesting, automation, EAs</p>
          </div>
        </div>
      </section>

      <footer className="bg-yellow-300 text-center p-4 mt-10 text-yellow-900 font-bold">
        🐝 FXBee · Forecast · Tools · Courses · Forum
      </footer>
    </div>
  );
}
