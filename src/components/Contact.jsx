import React from 'react';
export default function Contact() {
  return (
    <section className="bg-yellow-50 p-6 text-center">
      <h3 className="text-xl font-bold text-yellow-700">Stay Updated</h3>
      <input type="email" placeholder="Your email" className="mt-2 p-2 rounded border" />
      <button className="ml-2 bg-yellow-300 px-4 py-2 rounded text-yellow-900 font-bold">Subscribe</button>
    </section>
  );
}
