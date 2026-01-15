"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-blue-900" />
          <span className="text-2xl font-bold tracking-tight text-blue-900">SAPIO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Why Sapio</a>
          <a href="#process" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Our Process</a>
          <Button variant="default" className="bg-blue-900 hover:bg-blue-800 text-white px-6">
            Contact an Expert
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;