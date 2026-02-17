"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-44 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600">
                Ready to transform your Accounts Payable operations? Contact our team of experts via email or WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-[#39B54A]" />
                </div>
                <h3 className="font-bold text-blue-950 text-xl mb-2">Email Us</h3>
                <a href="mailto:info@ap-evo.com" className="text-gray-600 hover:text-[#39B54A] transition-colors">
                  info@ap-evo.com
                </a>
              </div>

              <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-7 h-7 text-[#39B54A]" />
                </div>
                <h3 className="font-bold text-blue-950 text-xl mb-2">WhatsApp Us</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-gray-400 mb-1">UK Office</span>
                    <a 
                      href="https://wa.me/447892893559" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#39B54A] transition-colors font-medium"
                    >
                      +44 (0) 7892 893559
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase text-gray-400 mb-1">Kosovo Office</span>
                    <a 
                      href="https://wa.me/38349851888" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#39B54A] transition-colors font-medium"
                    >
                      +383 49 851 888
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-[#39B54A]" />
                </div>
                <h3 className="font-bold text-blue-950 text-xl mb-2">Our Hub</h3>
                <p className="text-gray-600">Veternik, Prishtine</p>
              </div>
            </div>

            <div className="bg-blue-950 text-white p-10 rounded-3xl text-center">
              <h3 className="text-2xl font-bold mb-8">What happens next?</h3>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-10 h-10 text-[#39B54A] mb-4" />
                  <span className="text-sm font-medium">Response within 24 business hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-10 h-10 text-[#39B54A] mb-4" />
                  <span className="text-sm font-medium">Discovery call with a senior expert</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-10 h-10 text-[#39B54A] mb-4" />
                  <span className="text-sm font-medium">Free process optimization analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;