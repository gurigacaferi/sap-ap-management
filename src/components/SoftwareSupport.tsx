"use client";

import React from 'react';
import { 
  QuickBooksLogo, 
  XeroLogo, 
  SAPLogo, 
  SageLogo, 
  MicrosoftDynamicsLogo, 
  FreeAgentLogo 
} from './SoftwareLogos';

const SoftwareSupport = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#0B1B35] mb-4">Accounting Software We Support</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We adapt to your existing systems with zero disruption to your workflow, ensuring a seamless integration with your current finance stack.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <QuickBooksLogo />
          <XeroLogo />
          <SAPLogo />
          <SageLogo />
          <MicrosoftDynamicsLogo />
          <FreeAgentLogo />
        </div>
        
        <p className="text-center mt-16 text-sm text-gray-400 italic">
          Also supporting Excel-based systems and custom ERP tools upon request.
        </p>
      </div>
    </section>
  );
};

export default SoftwareSupport;