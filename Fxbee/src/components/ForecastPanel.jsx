import React from 'react';
export default function ForecastPanel() {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">Forecast Panel</h2>
      <pre className="bg-white p-4 rounded shadow text-sm overflow-x-auto">
Forecast: BUY
Pullback Zone: 1.2540 – 1.2560
Target TP: 1.2635
Stop Loss: 1.2505
Indicators:
- EMA50 vs EMA200: Bullish
- RSI: 48
- PSAR: Below
- ATR: 0.0065
      </pre>
    </section>
  );
}
