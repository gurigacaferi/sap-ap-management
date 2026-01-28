"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#0B1B35] mb-8">
              Expertise Meets Efficiency.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              AP EVO was founded on a simple premise: finance leaders deserve more than just "outsourcing." They deserve a strategic partner who understands the nuances of UK and EU finance operations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Team" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1B35]">The Nearshore Advantage</h2>
                <p className="text-gray-600">
                  Located in our state-of-the-art delivery hub in Pristina, our team operates in the heart of Europe (CET). We are only 1 hour ahead of the UK, allowing for seamless, real-time collaboration with your London-based finance teams.
                </p>
                <ul className="space-y-4">
                  {[
                    "Senior Finance Professionals Only",
                    "Native-Level English Proficiency",
                    "Deep UK/EU GAAP Knowledge",
                    "GDPR-Compliant Security Standards"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-semibold text-[#0B1B35]">
                      <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20 bg-[#0B1B35] text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#39B54A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#39B54A]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality First</h3>
                <p className="text-gray-400">We don't believe in "good enough." Every transaction is validated by a senior finance professional.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#39B54A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#39B54A]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Dedicated Teams</h3>
                <p className="text-gray-400">You don't get a "ticketing system." You get a dedicated team that knows your business inside and out.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#39B54A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#39B54A]" />
                </div>
                <h3 className="text-xl font-bold mb-4">True Compliance</h3>
                <p className="text-gray-400">Total peace of mind with complete adherence to ISO, GDPR, and local tax regulations.</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;