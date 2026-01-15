"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you ensure data security and compliance with GDPR?",
    answer: "We adhere to the highest security standards, including ISO 27001 principles. All data processing is strictly GDPR compliant, and we use secure VPN connections and encrypted storage for all client financial data."
  },
  {
    question: "Do your experts have experience with UK GAAP and European VAT?",
    answer: "Yes. Our senior team members are certified finance professionals with extensive experience in UK and EU accounting standards, specifically handling complex multi-regional VAT requirements."
  },
  {
    question: "How do you handle communication and time zones?",
    answer: "Our hub is located in Pristina (CET), perfectly aligned with EU business hours and only 1 hour ahead of the UK. We provide dedicated account managers who are fluent in English and other major European languages."
  },
  {
    question: "How long does the transition process typically take?",
    answer: "A standard transition takes between 4 to 8 weeks, depending on the complexity of your systems and volume. We follow a proven migration methodology to ensure zero business interruption."
  },
  {
    question: "Can you work with our existing ERP systems?",
    answer: "Absolutely. Our teams are experienced in all major ERPs including SAP, Oracle, NetSuite, and Microsoft Dynamics. We work directly within your environment to maintain data integrity."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our managed AP services.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg border border-gray-100 mb-4 shadow-sm">
              <AccordionTrigger className="text-blue-950 font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;