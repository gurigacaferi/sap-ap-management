"use client";

import React from 'react';
import { ShieldCheck, Globe, Scale, Clock } from "lucide-react";

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
              Why Global Enterprises Choose Sapio as Their AP Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In an era of increasing financial complexity, Sapio provides the stability and expertise required to run a world-class Accounts Payable function. Our nearshore delivery model combines cost-efficiency with high-caliber talent.
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
          <div className="relative">
            <div className="aspect-square bg-blue-900 rounded-2xl overflow-hidden shadow-2xl relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-blue-700 opacity-90 flex items-center justify-center p-12 text-center">
                  <div>
                    <div className="text-6xl font-bold text-white mb-4">99.9%</div>
                    <div className="text-blue-100 text-xl font-medium">Processing Accuracy</div>
                    <div className="mt-8 pt-8 border-t border-blue-800">
                       <div className="text-4xl font-bold text-white mb-2">40%</div>
                       <div className="text-blue-100 text-xl font-medium">Average Cost Reduction</div>
                    </div>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="text-blue-950 font-bold mb-1">Expert-Managed</div>
              <div className="text-gray-500 text-sm">Every invoice verified by a pro.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;