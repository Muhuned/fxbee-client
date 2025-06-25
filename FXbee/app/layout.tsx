import './globals.css';
import React from 'react';

export const metadata = {
  title: 'FXBee – Forex Forecasts',
  description: 'Smarter Forex. Simpler Learning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
