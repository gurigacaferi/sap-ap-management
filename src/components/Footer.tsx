"use client";

import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050B16] text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-8 group">
              <img src="/logo.png" alt="AP EVO Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Empowering finance leaders with expert-managed Accounts Payable solutions for international markets.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-gray-200">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/#services" className="hover:text-white transition-colors">Invoice Processing</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Approval Workflow</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Payment Execution</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Vendor Management</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Reconciliation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-gray-200">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-gray-200">Contact</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#39B54A]" />
                <a href="mailto:info@ap-evo.com" className="hover:text-white transition-colors">info@ap-evo.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#39B54A] mt-1" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-gray-500">Kosovo Office</span>
                    <a href="https://wa.me/38349851888" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      +383 49 851 888
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-gray-500">UK Office</span>
                    <a href="https://wa.me/447892893559" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      +44 (0) 7892 893559
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#39B54A]" />
                <span>Veternik, Prishtine</span>
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