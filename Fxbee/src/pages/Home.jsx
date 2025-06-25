import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Contact />
    </>
  );
}
