"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Receipt, CheckSquare, CreditCard, Building2, ArrowLeftRight } from "lucide-react";

const services = [
  {
    title: "Invoice Processing",
    description: "Receiving, scanning, and validating invoices against purchase orders and receiving reports to ensure accuracy.",
    icon: Receipt
  },
  {
    title: "Approval Workflow",
    description: "Routing invoices for internal approval to ensure proper authorization and control.",
    icon: CheckSquare
  },
  {
    title: "Payment Execution",
    description: "Scheduling and preparing invoices for payment, ensuring your vendors are paid correctly and on time.",
    icon: CreditCard
  },
  {
    title: "Vendor Management",
    description: "Maintaining vendor data, resolving payment discrepancies, and handling all supplier inquiries.",
    icon: Building2
  },
  {
    title: "Reconciliation",
    description: "Reconciling supplier statements with internal records to ensure absolute financial accuracy.",
    icon: ArrowLeftRight
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#F8F9FA] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B1B35] mb-6">Our Accounts Payable Services</h2>
          <p className="text-gray-600 text-lg">We provide a specialized suite of AP solutions designed to streamline your finance operations.</p>
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