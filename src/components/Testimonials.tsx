"use client";

import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AP EVO transformed our finance operations. Their nearshore team in Pristina feels like a natural extension of our London office. Accuracy is up, and costs are down.",
    author: "Sarah Jenkins",
    role: "CFO, Global Retail Corp",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "The transition was seamless. We were worried about VAT compliance across 4 regions, but AP EVO's experts handled it with precision from day one.",
    author: "Mark Thompson",
    role: "Finance Director, TechFlow EU",
    avatar: "https://i.pravatar.cc/150?u=mark"
  },
  {
    quote: "Highly professional and responsive. They don't just process invoices; they identify process improvements that save us thousands monthly.",
    author: "Elena Rossi",
    role: "Head of Shared Services, EuroLogistics",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-blue-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-blue-200">Hear from the finance leaders who have optimized their operations with our managed services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative">
              <Quote className="w-10 h-10 text-[#39B54A] mb-6 opacity-50" />
              <p className="text-lg leading-relaxed mb-8 text-blue-50 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-[#39B54A]" />
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-blue-300">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;