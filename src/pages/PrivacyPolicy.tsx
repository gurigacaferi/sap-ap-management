"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { ShieldCheck, Lock, EyeOff, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-44 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#39B54A]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-950">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
            <section>
              <p className="text-xl leading-relaxed">
                At AP EVO, we recognize that our clients entrust us with sensitive financial data. Our primary mission is to provide secure, accurate, and compliant Accounts Payable services while maintaining the highest standards of data privacy.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-[#39B54A]" /> GDPR Compliance
              </h2>
              <p>
                We fully adhere to the General Data Protection Regulation (GDPR) standards. Even as an international delivery hub, our operational protocols are designed to meet and exceed EU and UK data protection requirements. This includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Strict data minimization: We only access the data necessary to perform the specific AP tasks requested.</li>
                <li>Purpose limitation: Client data is processed exclusively for the provision of managed finance services.</li>
                <li>Regular security audits and staff training on data protection protocols.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Commitment to Your Data</h2>
              <p>
                We do not sell, share, or use your company data for any purpose other than the processing of your Accounts Payable functions. Your data remains your property at all times.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-100 p-6 rounded-xl">
                <h3 className="font-bold text-blue-950 mb-2 flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-[#39B54A]" /> Zero Leakage Policy
                </h3>
                <p className="text-sm">
                  All staff operate on dedicated company hardware with restricted USB and cloud storage access. Personal devices are strictly prohibited in the delivery environment.
                </p>
              </div>
              <div className="border border-gray-100 p-6 rounded-xl">
                <h3 className="font-bold text-blue-950 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#39B54A]" /> Enforced NDAs
                </h3>
                <p className="text-sm">
                  Every team member signs a comprehensive, legally binding Non-Disclosure Agreement (NDA) before they are granted access to any client environment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Technical Security Measures</h2>
              <p>
                Our infrastructure is built for secure remote collaboration:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Secure Access:</strong> We utilize Twingate (Zero Trust Network Access) to ensure all connections to your ERP or accounting software are encrypted and authenticated.</li>
                <li><strong>Managed Hardware:</strong> Our IT department centrally manages all professional laptops, ensuring they are always updated with the latest security patches and antivirus software.</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <p className="text-sm italic">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. For specific questions regarding our data handling, please contact our data protection officer at info@ap-evo.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default PrivacyPolicy;