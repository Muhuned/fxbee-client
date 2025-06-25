import React from 'react';
import beeLogo from './assets/bee-logo-yellow.png';

export default function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <img src={beeLogo} alt="FXBee Logo" style={{ width: '80px' }} />
      <h1>Welcome to FXBee</h1>
      <p>Smarter trading starts here.</p>
    </main>
  );
}