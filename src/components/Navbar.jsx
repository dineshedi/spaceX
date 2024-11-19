import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="bg-blue-800 text-white">
    <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <a href="#" className="text-2xl font-semibold">SpaceX</a>
      </div>

     
      <div className="flex space-x-8">
        <Link to='/' className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
        <Link to='/launchpad' className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Launch Pad</Link>
        <Link to='/landingpad' className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Landing Pad</Link>
        <Link to='/mission' className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Mission</Link>
        <Link to='/rocket'  className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Rocket</Link>
        <Link to='/history' className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">History</Link>
      </div>
    </nav>

  </header>
  )
}

export default Navbar