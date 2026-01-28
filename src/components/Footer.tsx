"use client";

import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050B16] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <ShieldCheck className="w-8 h-8 text-[#39B54A]" />
              <span className="text-2xl font-bold tracking-tight uppercase">AP EVO</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Empowering finance leaders with expert-managed Accounts Payable solutions. Built for the EU and UK markets.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-gray-200">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/#services" className="hover:text-white transition-colors">Invoice Processing</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Payment Execution</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Vendor Management</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Exception Handling</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-gray-200">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#about" className="hover:text-white transition-colors">Why AP EVO</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-gray-200">Contact</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#39B54A]" />
                <span>contact@apevo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#39B54A]" />
                <span>+383 (0) 44 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#39B54A]" />
                <span>Pristina, Nearshore Hub</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} AP EVO Managed Services. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;