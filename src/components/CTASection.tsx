"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-[#0B1B35] text-white overflow-hidden relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-8">Ready to Transform Your AP Function?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join leading EU and UK companies who have optimized their finance operations with AP EVO's expert-led managed services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-[#39B54A] hover:bg-[#2E933C] text-white px-10 h-16 text-sm font-bold uppercase tracking-wider shadow-xl w-full sm:w-auto">
              Get a Quote in 24 Hours
            </Button>
          </Link>
        </div>
      </div>
      {/* Decorative background elements can be added here if needed */}
    </section>
  );
};

export default CTASection;