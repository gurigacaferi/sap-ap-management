"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, CreditCard, Users, BarChart3, ShieldAlert, Zap } from "lucide-react";

const services = [
  {
    title: "99.9% Accurate Invoice Capture",
    description: "Multi-regional invoice processing managed by senior experts. We eliminate data entry errors and ensure 100% tax compliance across the UK and EU.",
    icon: FileText
  },
  {
    title: "Secure Multi-Currency Payments",
    description: "Eliminate payment risk with strictly controlled, audit-ready payment runs executed within your existing banking and ERP environments.",
    icon: CreditCard
  },
  {
    title: "Proactive Vendor Relations",
    description: "Protect your supply chain. We handle all vendor inquiries, statement reconciliations, and disputes, keeping your reputation spotless.",
    icon: Users
  },
  {
    title: "Rapid Exception Resolution",
    description: "Stop payment delays before they happen. Our team proactively identifies and resolves discrepancies, maintaining 100% workflow continuity.",
    icon: ShieldAlert
  },
  {
    title: "Real-Time Financial Visibility",
    description: "Gain total control over your cash flow with daily accrual reporting and granular spend analytics delivered directly to your leadership team.",
    icon: BarChart3
  },
  {
    title: "Continuous Process ROI",
    description: "We don't just process; we optimize. Our team identifies efficiency gaps in your workflow to drive year-on-year operational cost savings.",
    icon: Zap
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#F8F9FA] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B1B35] mb-6">Outcome-Driven AP Management</h2>
          <p className="text-gray-600 text-lg">We don't just provide labor; we provide results. Our managed services are designed to improve your bottom line and financial accuracy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm bg-white rounded-xl hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-[#0B1B35] flex flex-col gap-4">
                  <div className="w-12 h-12 bg-[#0B1B35] rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;