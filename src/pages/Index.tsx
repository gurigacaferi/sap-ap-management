"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />
        
        <TrustSection />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-blue-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Ready to Transform Your AP Function?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join leading EU and UK companies who have optimized their finance operations with Sapio's expert-led managed services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-10 h-14 text-lg font-semibold">
                Speak to an Expert
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-14 text-lg">
                Explore Our Process
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;