"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";
import ScrollIndicator from "@/components/ScrollIndicator";

const Process = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-44">
        <div className="container mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">Our Methodology</h1>
            <p className="text-xl text-gray-600">
              We've refined a transition and delivery model that minimizes risk while maximizing efficiency. Here is how we integrate with your team.
            </p>
          </div>
        </div>
        
        <ProcessSection />
        
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-950">Knowledge Transfer Phase</h2>
                <p className="text-gray-600 leading-relaxed">
                  The first few weeks are dedicated to understanding your specific business rules, VAT requirements, and vendor nuances. We document every step to ensure continuity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <div className="text-blue-600 font-bold mb-1">Week 1-2</div>
                    <div className="text-sm text-gray-500">Documentation & Discovery</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <div className="text-blue-600 font-bold mb-1">Week 3-4</div>
                    <div className="text-sm text-gray-500">Parallel Processing</div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-blue-100/80 mb-6">
                  Every transaction goes through a three-tier validation process before it ever reaches your bank for final approval.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39B54A]" />
                    <span>AI-Powered Extraction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39B54A]" />
                    <span>Expert Manual Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39B54A]" />
                    <span>Senior Finance Validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default Process;