"use client";

import React from 'react';

export const QuickBooksLogo = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#2CA01C]" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18a6 6 0 110-12 6 6 0 010 12z" />
    </svg>
    <span className="text-xl font-bold text-[#0B1B35]">QuickBooks</span>
  </div>
);

export const XeroLogo = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#13B5EA]" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.4 15.6l-1.8 1.8-3.6-3.6-3.6 3.6-1.8-1.8 3.6-3.6-3.6-3.6 1.8-1.8 3.6 3.6 3.6-3.6 1.8 1.8-3.6 3.6 3.6 3.6z" />
    </svg>
    <span className="text-xl font-bold text-[#0B1B35]">Xero</span>
  </div>
);

export const SAPLogo = () => (
  <div className="flex items-center bg-[#008FD3] px-3 py-1 rounded">
    <span className="text-2xl font-black text-white tracking-tighter">SAP</span>
  </div>
);

export const SageLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-[#00DC00] rounded-sm" />
    <span className="text-xl font-bold text-[#0B1B35]">Sage</span>
  </div>
);

export const MicrosoftDynamicsLogo = () => (
  <div className="flex items-center gap-2">
    <div className="grid grid-cols-2 gap-0.5">
      <div className="w-3 h-3 bg-[#F25022]" />
      <div className="w-3 h-3 bg-[#7FBA00]" />
      <div className="w-3 h-3 bg-[#00A4EF]" />
      <div className="w-3 h-3 bg-[#FFB900]" />
    </div>
    <span className="text-xl font-bold text-[#0B1B35]">Dynamics</span>
  </div>
);

export const FreeAgentLogo = () => (
  <div className="flex items-center gap-2">
    <span className="text-xl font-bold text-[#001D4B]">FreeAgent</span>
  </div>
);