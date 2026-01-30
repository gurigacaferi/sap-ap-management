"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Receipt, Building2, Calculator, Users, BarChart3, ShieldCheck, TrendingDown } from "lucide-react";

const services = [
  {
    title: "Full Bookkeeping",
    description: "Daily, weekly, or monthly bookkeeping managed by experts. We handle all data entry and financial administration with precision.",
    icon: BookOpen
  },
  {
    title: "AP & AR Management",
    description: "End-to-end management of accounts payable and receivable, ensuring cash flow remains healthy and vendors are paid on time.",
    icon: Receipt
  },
  {
    title: "VAT & Tax Reporting",
    description: "Expert preparation and reporting of VAT in full compliance with UK regulations, mitigating risk and ensuring accuracy.",
    icon: Calculator
  },
  {
    title: "Payroll Processing",
    description: "Scalable payroll support that grows with your business, handling complex calculations and UK compliance requirements.",
    icon: Users
  },
  {
    title: "Management Accounts",
    description: "Detailed financial reporting and management accounts to give you real-time visibility into your business performance.",
    icon: BarChart3
  },
  {
    title: "Year-End Support",
    description: "Assistance with year-end accounts preparation, ensuring your records are audit-ready and compliant with UK standards.",
    icon: ShieldCheck
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#F8F9FA] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B1B35] mb-6">Comprehensive Accounting Support</h2>
          <p className="text-gray-600 text-lg">From daily bookkeeping to complex financial reporting, our services are fully scalable to match your business needs.</p>
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