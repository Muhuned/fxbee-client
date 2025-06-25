import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>FXBee – Smarter Forex Forecasts</title>
      </Head>
      <main className="p-8 text-center bg-white min-h-screen">
        <h1 className="text-4xl font-bold text-yellow-600">Welcome to FXBee</h1>
        <p className="mt-2 text-lg text-gray-700">Smarter Forex. Simpler Learning.</p>
      </main>
    </>
  );
}
