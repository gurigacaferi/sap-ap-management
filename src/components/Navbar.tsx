"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MobileNav from './MobileNav';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSizeClass = isScrolled ? "h-12" : "h-28";

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-[#0B1B35]/95 backdrop-blur-md py-3 shadow-lg border-white/10" 
          : "bg-[#0B1B35] py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="AP EVO Logo" 
            className={cn(logoSizeClass, "w-auto transition-all duration-300")} 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link to="/process" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Our Process</Link>
          <Link to="/contact">
            <Button variant="default" className="bg-[#39B54A] hover:bg-[#2E933C] text-white px-6 font-bold uppercase text-xs tracking-wider shadow-lg shadow-[#39B54A]/20">
              Talk to Sales
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;