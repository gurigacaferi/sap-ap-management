"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, CreditCard, Users, BarChart3, ShieldAlert, Zap } from "lucide-react";

const services = [
  {
    title: "Invoice Processing",
    description: "Multi-channel invoice capture and validation managed by our dedicated experts to ensure 100% accuracy.",
    icon: FileText
  },
  {
    title: "Payment Execution",
    description: "Secure, timely payment runs and bank reconciliations compliant with EU/UK banking standards.",
    icon: CreditCard
  },
  {
    title: "Vendor Management",
    description: "Comprehensive management of vendor relationships, inquiries, and statement reconciliations.",
    icon: Users
  },
  {
    title: "Exception Handling",
    description: "Proactive resolution of discrepancies and approval workflows to prevent payment delays.",
    icon: ShieldAlert
  },
  {
    title: "Reporting & Insights",
    description: "Real-time visibility into your AP cycle with detailed accrual reporting and cash flow analysis.",
    icon: BarChart3
  },
  {
    title: "Process Optimization",
    description: "Continuous improvement of your end-to-end AP workflow to drive operational excellence.",
    icon: Zap
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Comprehensive Managed AP Services</h2>
          <p className="text-gray-600">We handle the complexity of Accounts Payable so you don't have to. Our expert-led approach guarantees quality and reliability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl text-blue-950">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;