"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import ProcessSection from "@/components/ProcessSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { MadeWithDyad } from "@/components/made-with-dyad";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />
        
        <TrustSection />
        
        <ProcessSection />
        
        <FAQ />
        
        <CTASection />
      </main>
      
      <Footer />
      <MadeWithDyad />
      <ScrollIndicator />
    </div>
  );
};

export default Index;