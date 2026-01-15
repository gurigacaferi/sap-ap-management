"use client";

import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold tracking-tight">SAPIO</span>
            </div>
            <p className="text-blue-100/70 mb-6 leading-relaxed">
              Empowering finance leaders with expert-managed Accounts Payable solutions. Built for the EU and UK markets.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">Invoice Processing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Execution</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vendor Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exception Handling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why Sapio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@sapio.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+383 (0) 44 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Pristina, Nearshore Hub</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-blue-100/50 text-sm">
            © {new Date().getFullYear()} Sapio Managed Services. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-blue-100/50">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;