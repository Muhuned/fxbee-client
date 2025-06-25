import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800">
      <header className="bg-yellow-300 p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <img src="/bee.png" alt="FXBee" className="w-8 h-8" />
          FXBee
        </h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#forecast">Forecast</a>
          <a href="#tools">Tools</a>
          <a href="#courses">Courses</a>
          <a href="#forum">Forum</a>
          <a href="#get-started" className="bg-yellow-400 px-4 py-1 rounded-lg shadow hover:scale-105 transition">Get Started</a>
        </nav>
      </header>

      <main className="px-4 py-16 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Fly Your Forex Forward</h2>
        <p className="text-lg text-gray-600 mb-6">Buzzing insights to guide your trades.</p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition">Get Started</button>
      </main>

      <section id="tools" className="py-14 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">🛠 FXBee Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {["Pip Calculator", "Lot Size Converter", "Risk/Reward Tool", "Economic Calendar", "Pivot Zones", "Advanced"].map((tool, i) => (
            <div key={i} className="bg-yellow-100 text-center p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer font-medium">
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section id="bot" className="bg-yellow-100 py-16">
        <h3 className="text-3xl font-bold text-center mb-8">🤖 SmartPipBot</h3>
        <div className="bg-white max-w-xl mx-auto rounded-xl shadow-xl p-6">
          <div className="mb-4">
            <strong>🐝 Bot:</strong> Hi there! How can I assist you today?
          </div>
          <div className="mb-4">
            <strong>You:</strong> What is a pip?
          </div>
          <div>
            <strong>🐝 Bot:</strong> A pip is the smallest price movement in the exchange rate of a currency pair. For most pairs, one pip is equal to 0.0001.
          </div>
        </div>
      </section>

      <section id="courses" className="py-14 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">📚 FXBee Academy</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {["Beginner", "Intermediate", "Advanced"].map((level, i) => (
            <div key={i} className="bg-yellow-50 border p-6 text-center rounded-2xl shadow hover:shadow-lg transition font-semibold">
              {level}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-yellow-300 text-center p-6 text-sm font-semibold text-yellow-900 shadow-inner rounded-t-xl">
        <img src="/bee-symbol.png" alt="Bee Icon" className="mx-auto w-6 mb-2" />
        © FXBee · Forecast · Tools · Forum
      </footer>
    </div>
  );
}
