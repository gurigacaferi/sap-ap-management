"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Building2, Globe } from "lucide-react";

const caseStudies = [
  {
    client: "Global Retail Corp",
    sector: "Retail & E-commerce",
    results: "45% reduction in processing costs",
    description: "How we helped a multi-national retailer consolidate their AP functions across 12 European regions into a single, streamlined workflow.",
    icon: Building2,
    stat: "45%"
  },
  {
    client: "FinTech Innovate",
    sector: "Technology",
    results: "100% payment accuracy achieved",
    description: "Implementing automated validation and expert review for a fast-growing fintech scaling across the UK and Germany.",
    icon: Globe,
    stat: "100%"
  },
  {
    client: "HealthServ Group",
    sector: "Healthcare",
    results: "90% faster month-end closing",
    description: "Streamlining complex VAT reconciliations and vendor inquiries for a large healthcare provider with thousands of monthly invoices.",
    icon: BarChart,
    stat: "90%"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-0">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600">
              Discover how AP EVO helps leading organizations optimize their finance operations and drive measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <Card key={index} className="flex flex-col border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <study.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{study.sector}</div>
                  <CardTitle className="text-2xl text-blue-950 mb-2">{study.client}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="p-4 bg-blue-900 rounded-lg text-white">
                    <div className="text-3xl font-bold mb-1 text-[#39B54A]">{study.stat}</div>
                    <div className="text-sm text-blue-100 opacity-80">{study.results}</div>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="ghost" className="p-0 text-blue-900 hover:text-blue-700 hover:bg-transparent font-semibold">
                    Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;