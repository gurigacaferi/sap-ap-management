"use client";

import React from 'react';
import { ShieldCheck, Globe, Scale, Clock, TrendingUp, DollarSign } from "lucide-react";

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

const TrustSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6 leading-tight">
              Why Global Enterprises Choose APnova as Their AP Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In an era of increasing financial complexity, APnova provides the stability and expertise required to run a world-class Accounts Payable function. Our nearshore delivery model combines cost-efficiency with high-caliber talent.
            </p>
            <div className="space-y-6">
              {trustFactors.map((factor, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <factor.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950 mb-1">{factor.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Redesigned Visual Statistics Block */}
          <div className="relative space-y-6">
            {/* Image Placeholder */}
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000" 
                alt="Financial data visualization" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-900 p-6 rounded-2xl shadow-xl text-white flex flex-col items-start">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-4xl font-bold mb-1">99.9%</div>
                <div className="text-blue-200 text-sm font-medium">Processing Accuracy</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-blue-950 mb-1">40%</div>
                <div className="text-gray-500 text-sm font-medium">Average Cost Reduction</div>
              </div>
            </div>
            
            {/* Small Trust Badge */}
            <div className="absolute -top-4 right-4 bg-white p-3 rounded-lg shadow-md border border-gray-100 hidden sm:block">
              <div className="text-blue-950 font-bold text-sm">Audit-Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;