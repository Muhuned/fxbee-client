export function ForecastCard({ pair, direction, tp, sl }) {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-xl font-bold">{pair}</h3>
      <p>Forecast: {direction}</p>
      <p>Target TP: {tp}</p>
      <p>Stop Loss: {sl}</p>
    </div>
  );
}
