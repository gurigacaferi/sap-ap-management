"use client";

import React from 'react';
import { ShieldCheck, Globe, Scale, Clock, Lock, ShieldAlert, CheckCircle, Laptop } from "lucide-react";

const trustFactors = [
  {
    title: "International Standards",
    description: "Highly qualified teams in Eastern Europe (CET) trained in global accounting standards and practices.",
    icon: Globe
  },
  {
    title: "Massive Cost Savings",
    description: "Save 50% to 75% compared to local in-house hiring. Predictable pricing starting at €10 per hour.",
    icon: Scale
  },
  {
    title: "Time Zone Alignment",
    description: "Real-time collaboration and same-day task completion tailored to your specific business hours.",
    icon: Clock
  },
  {
    title: "Professional Integrity",
    description: "Strict confidentiality with NDAs for all staff and zero tolerance for personal device use.",
    icon: ShieldCheck
  }
];

const securitySpecs = [
  { name: "Bank-Grade Security", description: "Twingate secure connections", icon: Lock },
  { name: "Global Compliance", description: "GDPR & International Data Protection", icon: ShieldAlert },
  { name: "Dedicated Hardware", description: "Managed professional laptops", icon: Laptop }
];

const TrustSection = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B1B35] mb-6">
            A Trusted International Delivery Model
          </h2>
          <p className="text-gray-600">Our hybrid model blends international regulatory standards with the efficiency of highly qualified Eastern European teams.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFactors.map((factor, index) => (
            <div key={index} className="bg-[#F8F9FA] p-8 rounded-xl border border-gray-100 flex flex-col h-full hover:border-[#39B54A] transition-colors group">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0B1B35] group-hover:text-white transition-all">
                <factor.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-[#0B1B35] text-lg mb-3">{factor.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20 py-12 border-y border-gray-100">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Unified Security & Hardware Protocol</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securitySpecs.map((spec, i) => (
              <div key={i} className="flex items-center gap-6 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#39B54A]">
                  <spec.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-[#0B1B35]">{spec.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{spec.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#0B1B35] rounded-3xl p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Unbeatable ROI for Global Finance Teams.</h2>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-[#39B54A] mb-2">€10/hr</div>
                <div className="text-gray-400 font-medium uppercase text-xs tracking-widest">Average Pricing</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-[#39B54A] mb-2">Up to 75%</div>
                <div className="text-gray-400 font-medium uppercase text-xs tracking-widest">Cost Reduction</div>
              </div>
            </div>
          </div>
          <div className="relative z-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <h4 className="font-bold text-[#39B54A] mb-2">Why Our Hub?</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39B54A]" /> Highly educated, multilingual professionals</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39B54A]" /> Extensive experience in international accounting</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#39B54A]" /> Modern business practices with cultural compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;