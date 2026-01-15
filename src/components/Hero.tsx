"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Professional AP Outsourcing</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-blue-950 leading-[1.1] mb-6">
            Expert-Led Accounts Payable for EU & UK Enterprises
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Streamline your finance operations with Sapio. We provide high-performance AP services managed by seasoned experts, allowing your team to focus on strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 h-14 text-lg w-full sm:w-auto">
                Get a Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 h-14 text-lg w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Dedicated Expert Teams</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Full Regulatory Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Cost-Effective Operations</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Zero Operational Risk</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-6 translate-x-1/4 -z-0 hidden lg:block" />
    </section>
  );
};

export default Hero;