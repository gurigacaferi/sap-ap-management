"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">Ready to Transform Your AP Function?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join leading EU and UK companies who have optimized their finance operations with AP EVO's expert-led managed services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-10 h-14 text-lg font-semibold shadow-xl w-full sm:w-auto">
              Speak to an Expert
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-10 h-14 text-lg font-semibold shadow-xl w-full sm:w-auto">
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;