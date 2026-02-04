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
    question: "How do you ensure data security for our invoice data?",
    answer: "We operate under strict GDPR-compliant processes. This includes bank-grade secure connections via Twingate, dedicated company hardware for all staff (no personal devices), and mandatory Non-Disclosure Agreements (NDAs) for every team member handling your financial documents."
  },
  {
    question: "Can you manage approvals within our current system?",
    answer: "Absolutely. Our team is experienced in routing invoices through internal approval workflows within platforms like SAP, QuickBooks, and Xero. We ensure proper authorization is captured before any payment is scheduled."
  },
  {
    question: "How do you handle vendor inquiries?",
    answer: "Your dedicated AP EVO team acts as your internal AP desk. We maintain vendor data, resolve discrepancies between invoices and POs, and handle all inquiries professionally during UK business hours."
  },
  {
    question: "What does your reconciliation process involve?",
    answer: "We perform regular reconciliations of supplier statements against your internal records. This ensures all liabilities are accurately recorded and any missing invoices are identified and processed immediately."
  },
  {
    question: "What cost savings can we expect on our AP function?",
    answer: "By utilizing our Kosovo hub for your AP processing, you can typically save between 50% and 75% compared to UK in-house hiring, with average pricing at €10 per hour and zero recruitment overhead."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Common questions about our specialized Accounts Payable management.</p>
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