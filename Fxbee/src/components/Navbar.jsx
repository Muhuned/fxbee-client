import React from 'react';
export default function Navbar() {
  return (
    <nav className="p-4 bg-yellow-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-800">FXBee</h1>
        <a href="/forecast" className="text-yellow-900 hover:underline">Forecast</a>
      </div>
    </nav>
  );
}
