"use client";

import React from 'react';

const software = [
  { 
    name: "QuickBooks Online", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Quickbooks_logo.svg/512px-Quickbooks_logo.svg.png" 
  },
  { 
    name: "Xero", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Xero_software_logo.svg/512px-Xero_software_logo.svg.png" 
  },
  { 
    name: "SAP", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/512px-SAP_2011_logo.svg.png" 
  },
  { 
    name: "Sage", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sage_Group_logo.svg/512px-Sage_Group_logo.svg.png" 
  },
  { 
    name: "FreeAgent", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/FreeAgent_logo.svg/512px-FreeAgent_logo.svg.png" 
  },
  { 
    name: "Microsoft Dynamics", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Microsoft_Dynamics_365_logo.svg/512px-Microsoft_Dynamics_365_logo.svg.png" 
  }
];

const SoftwareSupport = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#0B1B35] mb-4">Accounting Software We Support</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We adapt to your existing systems with zero disruption to your workflow, ensuring a seamless integration with your current finance stack.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {software.map((s) => (
            <div key={s.name} className="flex items-center justify-center">
              <img 
                src={s.logo} 
                alt={s.name} 
                className="h-8 md:h-10 w-auto object-contain max-w-[140px]" 
                title={s.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-16 text-sm text-gray-400 italic">
          Also supporting Excel-based systems and custom ERP tools upon request.
        </p>
      </div>
    </section>
  );
};

export default SoftwareSupport;