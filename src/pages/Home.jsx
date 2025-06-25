import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 text-yellow-900">
      <header className="bg-yellow-300 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🐝 FXBee</h1>
        <nav>
          <a href="/tools" className="mr-4">Tools</a>
          <a href="/courses" className="mr-4">Courses</a>
          <a href="/forum" className="mr-4">Forum</a>
          <a href="/signup" className="bg-white text-yellow-900 px-4 py-2 rounded">Sign Up</a>
        </nav>
      </header>

      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Fly Your Forex Forward</h2>
        <p className="mb-6">Smart, buzzing education to take your trading to the next level.</p>
        <button className="bg-yellow-400 px-6 py-2 rounded text-lg font-semibold">Get Started</button>
      </main>
    </div>
  );
}
