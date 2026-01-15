"use client";

import React from 'react';
import { ArrowRight, Settings, Users, LineChart, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Discovery & Analysis",
    description: "We perform a deep dive into your current AP workflows, identifying bottlenecks and opportunities for optimization.",
    icon: LineChart
  },
  {
    title: "Seamless Transition",
    description: "Our experts manage the knowledge transfer and system integration with zero disruption to your ongoing operations.",
    icon: Settings
  },
  {
    title: "Expert Management",
    description: "Your dedicated team takes over daily processing, managed by senior finance professionals in our delivery hub.",
    icon: Users
  },
  {
    title: "Continuous Optimization",
    description: "Regular performance reviews and process refinements ensure your AP function remains high-performing and scalable.",
    icon: ShieldCheck
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">How We Work</h2>
          <p className="text-gray-600">A structured, risk-mitigated approach to outsourcing your finance operations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Decorative connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-blue-50 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2">
                  <ArrowRight className="w-5 h-5 text-blue-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;