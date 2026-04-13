import React from 'react'
import { useState } from 'react';
const links=[
  
  { name:"Home", href:"#home"},
  {name:"AI Types", href:"#types"},
  {name:"Benefits", href:"#benefits"},
  {name:"Contact", href:"#contact"} 
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return<>
  <nav className='bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm'>
  <div className='app-container flex items-center justify-between h-16'>
    <span className='gradient-text font-bold text-2xl'>AI Revolution</span>

    {/* Desktop Links */}
  <div className='hidden md:flex items-center space-x-8'>
    {links.map((link)=>(
      <a key={link.name} href={link.href} className='nav-item'>
        {link.name}
      </a>
    ))}
    <a href="#" className='nav-btn'>Get Started</a>
    
    </div>  
    {/* Mobile Menu Button */}

    <button
    onClick={() => setIsMenuOpen((prev) => !prev)}
     className='md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </button>
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className='md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 space-y-1 pb-3 mt-52 '>
         {links.map((link)=>(
      <a key={link.name} className='mobile-nav-item' href={link.href} >
        {link.name}
      </a>
    ))}
    <a href="#" className='mobile-nav-btn'>Get Started</a>

      </div>

    )}
  </div>


  </nav>
  
  </>
}

export default Navbar
