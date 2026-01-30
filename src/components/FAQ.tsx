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
    question: "How do you ensure data security for UK businesses?",
    answer: "We operate under strict GDPR-compliant processes. This includes bank-grade secure connections via Twingate, dedicated company hardware for all staff (no personal devices), and mandatory Non-Disclosure Agreements (NDAs) for every team member."
  },
  {
    question: "Can you work with our existing accounting software?",
    answer: "Absolutely. Our team has strong experience with leading platforms like QuickBooks Online, SAP, Sage (50, 100, and Cloud), and FreeAgent. We adapt to your current workflow with zero disruption."
  },
  {
    question: "How does the time zone coverage work?",
    answer: "We offer flexible working hours aligned with UK business time zones. This ensures real-time collaboration, same-day task completion, and availability during your standard working hours."
  },
  {
    question: "What kind of cost savings can we expect?",
    answer: "By outsourcing to our Kosovo hub, UK companies typically save between 50% and 75% compared to hiring in-house. Our average pricing is approximately €10 per hour, with no recruitment or training overhead."
  },
  {
    question: "Are your staff familiar with UK accounting standards?",
    answer: "Yes. Our hybrid model is led by professionals with direct UK experience. Our staff are highly educated accounting professionals trained specifically in UK and EU regulatory standards."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our nearshore accounting model.</p>
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