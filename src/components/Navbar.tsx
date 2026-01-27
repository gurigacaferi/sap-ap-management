"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-blue-900" />
          <span className="text-2xl font-bold tracking-tight text-blue-900 uppercase">AP EVO</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Home</Link>
          <Link to="/case-studies" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Case Studies</Link>
          <Link to="/process" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Our Process</Link>
          <Link to="/contact">
            <Button variant="default" className="bg-blue-900 hover:bg-blue-800 text-white px-6">
              Contact an Expert
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