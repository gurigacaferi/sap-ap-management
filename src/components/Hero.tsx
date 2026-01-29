"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-44 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-[#0B1B35] text-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8">
              Cut Accounts Payable Costs by 40% While Ensuring 100% Compliance
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Stop overpaying for manual processing. Scale your finance operations with expert-led nearshore teams that handle your end-to-end AP with guaranteed accuracy and same-day turnaround.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                <span className="font-medium">Eliminate Hiring & Overhead Costs</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                <span className="font-medium">Guaranteed UK & EU VAT Compliance</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                <span className="font-medium">24-Hour Invoice Processing Cycle</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#39B54A] hover:bg-[#2E933C] text-white px-8 h-14 text-sm font-bold uppercase tracking-wider w-full sm:w-auto">
                  Get a Free Cost Analysis
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Finance Environment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;