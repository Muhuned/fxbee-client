import React from 'react';
import beeLogo from './bee-logo-yellow.png'; // FIXED path

export default function App() {
  return (
    <div>
      <img src={beeLogo} alt="Logo" />
      <h1>FXBee</h1>
    </div>
  );
}
