"use client";

import React from 'react';

const software = [
  { 
    name: "QuickBooks Online", 
    logo: "https://www.vectorlogo.zone/logos/intuit_quickbooks/intuit_quickbooks-ar21.svg" 
  },
  { 
    name: "Xero", 
    logo: "https://www.vectorlogo.zone/logos/xero/xero-ar21.svg" 
  },
  { 
    name: "SAP", 
    logo: "https://www.vectorlogo.zone/logos/sap/sap-ar21.svg" 
  },
  { 
    name: "Sage", 
    logo: "https://www.vectorlogo.zone/logos/sage/sage-ar21.svg" 
  },
  { 
    name: "Microsoft Dynamics", 
    logo: "https://www.vectorlogo.zone/logos/microsoft_dynamics/microsoft_dynamics-ar21.svg" 
  },
  { 
    name: "FreeAgent", 
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/FreeAgent_logo.svg/512px-FreeAgent_logo.svg.png" 
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
                className="h-10 md:h-12 w-auto object-contain max-w-[160px]" 
                title={s.name}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  // Fallback to text if logo fails
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.innerText = s.name;
                    span.className = 'text-lg font-bold text-blue-950';
                    parent.appendChild(span);
                  }
                }}
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