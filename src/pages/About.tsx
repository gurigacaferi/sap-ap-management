"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { CheckCircle2, Award, Users, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-44">
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#0B1B35] mb-8">
              UK Standards. <br />Global Efficiency.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              AP EVO is a professional accounting outsourcing partner combining UK accounting standards and practices with highly qualified accounting teams in Kosovo. 
              Our model allows UK businesses to reduce costs significantly while maintaining absolute accuracy, compliance, and data security.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Team" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1B35]">The Kosovo Advantage</h2>
                <p className="text-gray-600">
                  Our teams consist of highly educated, English-speaking accounting professionals. Managed by leaders with direct UK experience, we offer a level of cultural and professional compatibility that traditional offshoring cannot match.
                </p>
                <ul className="space-y-4">
                  {[
                    "Experience with UK Accounting Platforms",
                    "Native-Level English Proficiency",
                    "EU-Aligned Business Standards",
                    "Aligned with UK Working Hours"
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
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Security & Integrity</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Every team member adheres to a unified security protocol to ensure FisGu maintains the highest standards of client trust.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#39B54A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#39B54A]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Strict Confidentiality</h3>
                <p className="text-gray-400">All staff sign official Non-Disclosure Agreements (NDAs). Data protection is our absolute priority.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#39B54A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#39B54A]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Secure Connections</h3>
                <p className="text-gray-400">We utilize Twingate for bank-grade security without compromising performance in critical systems like SAP.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#39B54A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#39B54A]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Hardware</h3>
                <p className="text-gray-400">Dedicated company laptops with restricted access. Personal device use for client tasks is strictly prohibited.</p>
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