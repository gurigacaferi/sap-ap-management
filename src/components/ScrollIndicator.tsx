"use client";

import React, { useState, useEffect } from 'react';
import { Mouse } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Check if the user is near the top (e.g., within the first 200px)
      const nearTop = window.scrollY < 200;
      
      // Check if the content height exceeds the viewport height (i.e., if scrolling is possible)
      const canScroll = document.documentElement.scrollHeight > window.innerHeight;

      setIsVisible(nearTop && canScroll);
    };

    // Initial check
    checkScroll();

    // Add scroll listener
    window.addEventListener('scroll', checkScroll);
    // Add resize listener (in case content size changes)
    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50",
        "transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center text-blue-900">
        <Mouse className="w-6 h-6 mb-1" />
        <div className="w-0.5 h-4 bg-blue-900 animate-scroll-down" />
      </div>
    </div>
  );
};

export default ScrollIndicator;