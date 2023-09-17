import React from 'react'

import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Header() {
  return (
    <div className = 'bg-black '>
        <TopBar />
        <Navbar />
        <Hero />
    </div>
  )
}
