"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1B35] border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold tracking-tight text-white uppercase">AP EVO</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Our Services</Link>
          <Link to="/case-studies" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Case Studies</Link>
          <Link to="/process" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Our Process</Link>
          <Link to="/contact">
            <Button variant="default" className="bg-[#39B54A] hover:bg-[#2E933C] text-white px-6 font-bold uppercase text-xs tracking-wider">
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