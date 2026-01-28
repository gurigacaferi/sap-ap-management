"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Our Process", href: "/process" },
];

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Toggle Menu">
          <Menu className="h-6 w-6 text-blue-900" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-blue-900" />
            <span className="text-xl font-bold tracking-tight text-blue-900 uppercase">AP EVO</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors py-2 border-b border-gray-50/50"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={handleLinkClick} className="pt-4">
            <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white h-12 text-base">
              Contact an Expert
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;