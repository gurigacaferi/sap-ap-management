"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingDown, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/5 border border-blue-900/10 mb-8">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-[0.2em]">Managed Finance Operations</span>
            </div>
            <h1 className="text-5xl lg:text-[5.5rem] font-bold text-blue-950 leading-[1] mb-8 tracking-tight">
              Scale Your AP with <span className="text-blue-600">Expertise.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              Sapio delivers managed Accounts Payable solutions for EU and UK enterprises. Our nearshore teams combine institutional-grade accuracy with operational agility.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-10 h-16 text-lg rounded-full shadow-2xl shadow-blue-900/20 transition-all hover:scale-105 active:scale-95">
                  Start Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="ghost" className="text-blue-950 hover:bg-blue-50 px-10 h-16 text-lg rounded-full border border-gray-200">
                  Case Studies
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                </div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">EU/UK Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                </div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">99.9% Accuracy</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Image with sophisticated framing */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[8px] border-white bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Architecture" 
                className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
            </div>

            {/* Glassmorphic Trust Elements */}
            <div className="absolute -bottom-10 -right-10 z-20 w-64 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                  <TrendingDown size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-950 leading-none">40%</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">Cost Efficiency</div>
                </div>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-blue-600 rounded-full" />
              </div>
            </div>

            <div className="absolute top-20 -left-12 z-20 w-56 p-6 rounded-3xl bg-blue-950 text-white shadow-2xl hidden xl:block">
              <div className="flex -space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-950 bg-blue-800 flex items-center justify-center text-[10px] font-bold">
                    <Users size={12} />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-blue-950 bg-blue-600 flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
              <div className="text-sm font-medium leading-tight">Expert finance team ready to deploy.</div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-12 -right-12 grid grid-cols-6 gap-2 opacity-20 hidden lg:grid">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-blue-900" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;