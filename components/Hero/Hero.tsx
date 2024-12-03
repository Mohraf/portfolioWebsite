import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import "./Hero.css"
import { jetbrainsMono } from '@/app/fonts';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[calc(100vh-60px)] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 animate-pulse">
          <div className="absolute w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-3xl -top-10 -left-10"></div>
          <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6">
          {/* Greeting and Name */}
          <div className="flex justify-center items-center space-x-3">
            <div className="h-[2px] w-16 bg-white/50"></div>
            <h2 className={`
              text-xl md:text-2xl text-white/80 tracking-wide 
              ${jetbrainsMono.className}`
            }>
              Hi, I'm
            </h2>
            <div className="h-[2px] w-16 bg-white/50"></div>
          </div>

          {/* Name with Animated Reveal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight 
            bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70
            animate-text-reveal">
            Amos Okello
          </h1>

          {/* Profession with Typing Effect */}
          <h3 className="text-2xl md:text-4xl text-white/80 font-medium">
            Software Engineer & Creative Developer
          </h3>

          {/* Brief Introduction */}
          <p className="text-md md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate developer who crafts elegant digital experiences. 
            With a blend of technical expertise and creative problem-solving, 
            I transform complex challenges into intuitive, impactful solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center space-x-4 pt-6">
            <Link 
              href="/contact"
              className="group flex items-center space-x-2 px-6 py-3 
              border border-white/30 text-white rounded-md 
              hover:bg-white/10 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span>Get In Touch</span>
              <ArrowRight 
                className="transition-transform group-hover:translate-x-1" 
                size={20} 
              />
            </Link>

            <Link 
              href="/resume.pdf"
              target="_blank"
              className="group flex items-center space-x-2 px-6 py-3 
              bg-white/10 text-white rounded-md 
              hover:bg-white/20 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Download size={20} />
              <span>Download CV</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-50 transform -translate-x-1/2 
        text-white/50 animate-bounce">
        <span className="text-sm">Scroll</span>
        <div className="h-10 w-[2px] bg-white/30 mx-auto mt-2"></div>
      </div>
    </div>
  );
};

export default HeroSection;