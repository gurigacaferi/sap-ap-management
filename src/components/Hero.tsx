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
              UK Accounting Standards. <span className="text-[#39B54A]">Eastern European Efficiency.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              AP EVO combines UK accounting expertise with highly qualified teams in Kosovo. Reduce your operational costs by up to 75% while maintaining total accuracy and GDPR compliance.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                <span className="font-medium">Save 50% to 75% vs. UK In-house Hiring</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                <span className="font-medium">Aligned with UK Working Hours & Time Zones</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                <span className="font-medium">Bank-Grade Security with Twingate Protection</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#39B54A] hover:bg-[#2E933C] text-white px-8 h-14 text-sm font-bold uppercase tracking-wider w-full sm:w-auto">
                  Get a Quote — from €10/hr
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-sm font-semibold text-white mb-1">Trusted Nearshore Hub</p>
                <p className="text-xs text-gray-300">Pristina, Kosovo • Aligned with UK Business Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;