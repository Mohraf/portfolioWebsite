"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { jetbrainsMono } from '@/app/fonts';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/FISHERMAN-TECHNOLOGIES.png" 
              alt="Logo" 
              width={100} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-white hover:text-gray-300 transition-colors duration-200 ${jetbrainsMono.className}`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${jetbrainsMono.className} ml-4 px-4 py-2 border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors duration-200`}
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              className="text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md">
            <div className="px-4 pt-2 pb-4 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="block text-white hover:text-gray-300 py-2"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;