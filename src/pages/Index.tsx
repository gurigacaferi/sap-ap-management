"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoWall from "@/components/LogoWall";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import ProcessSection from "@/components/ProcessSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollIndicator from "@/components/ScrollIndicator";
import SoftwareSupport from "@/components/SoftwareSupport";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-0">
        <Hero />
        
        <SoftwareSupport />
        
        <Services />
        
        <TrustSection />
        
        <Testimonials />
        
        <ProcessSection />
        
        <FAQ />
        
        <CTASection />
      </main>
      
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default Index;