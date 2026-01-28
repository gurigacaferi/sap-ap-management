"use client";

import React from 'react';

const logos = [
  { name: "Global Retail", icon: "🏢" },
  { name: "TechFlow", icon: "⚡" },
  { name: "EuroLogistics", icon: "🌐" },
  { name: "SecurePay", icon: "🔒" },
  { name: "HealthGroup", icon: "🏥" },
  { name: "EcoEnergy", icon: "🌱" }
];

const LogoWall = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Trusted by leading enterprises across the UK & EU
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2">
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-xl font-bold text-blue-950 tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoWall;