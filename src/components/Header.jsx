import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <header className="absolute z-50 w-full bg-[#FFC107] text-[#1D3557] shadow-md">
      <div className="container flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <img src="/logo.png" alt="Luminous Solutions Logo" className="h-10" />
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <button onClick={() => handleScroll('about')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => handleScroll('services')} className="hover:text-white transition-colors">Services</button>
          <button onClick={() => handleScroll('rental-options')} className="hover:text-white transition-colors">Rental Options</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-white transition-colors">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#1D3557] focus:outline-none">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFC107] text-[#1D3557] py-4 shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 font-semibold">
            <button onClick={() => handleScroll('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => handleScroll('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => handleScroll('rental-options')} className="hover:text-white transition-colors">Rental Options</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-white transition-colors">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
