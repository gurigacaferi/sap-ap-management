"use client";

import React from 'react';
import { ShieldCheck, Globe, Scale, Clock, ShieldAlert, Lock, CheckCircle } from "lucide-react";

const trustFactors = [
  {
    title: "EU & UK Focused",
    description: "Deep understanding of European VAT regulations, UK GAAP, and regional business requirements.",
    icon: Globe
  },
  {
    title: "Unmatched Expertise",
    description: "Our teams consist of finance professionals with years of experience in managed services.",
    icon: ShieldCheck
  },
  {
    title: "Compliance First",
    description: "Rigorous security protocols and internal controls designed to mitigate risk and ensure audit-readiness.",
    icon: Scale
  },
  {
    title: "Scalable Operations",
    description: "Seamlessly scale your AP capacity up or down based on business demand without hiring overhead.",
    icon: Clock
  }
];

const badges = [
  { name: "ISO 27001", description: "Information Security", icon: Lock },
  { name: "GDPR Compliant", description: "Data Protection", icon: ShieldAlert },
  { name: "ISAE 3402", description: "Control Standard", icon: CheckCircle }
];

const TrustSection = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B1B35] mb-6">
            Why UK Firms Trust us for Nearshore Accounting Outsourcing
          </h2>
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

        {/* Compliance Row */}
        <div className="mb-20 py-12 border-y border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-6 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#39B54A]">
                  <badge.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-[#0B1B35]">{badge.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics Block */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#0B1B35] rounded-3xl p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Trusted by UK firms across London, Manchester & beyond.</h2>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-[#39B54A] mb-2">99.9%</div>
                <div className="text-gray-400 font-medium uppercase text-xs tracking-widest">Processing Accuracy</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold text-[#39B54A] mb-2">40%</div>
                <div className="text-gray-400 font-medium uppercase text-xs tracking-widest">Avg. Cost Reduction</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000" 
              alt="Financial analysis on tablet" 
              className="rounded-2xl shadow-2xl opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;