"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This is where the backend API call will go
    // For now, we simulate a network request
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      showSuccess("Message sent! An expert will contact you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      showError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-44 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600 mb-10">
                Ready to transform your Accounts Payable operations? Contact our team of experts for a free consultation and customized solution.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#39B54A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@ap-evo.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#39B54A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950 mb-1">Call Us</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Kosovo: +383 49 851 888</p>
                      <p>UK: +44 (0) 000 000 000</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#39B54A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950 mb-1">Our Hub</h3>
                    <p className="text-gray-600">Veternik, Prishtine</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="font-bold text-blue-950 mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                    <span>Response within 24 business hours</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                    <span>Discovery call with a senior expert</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#39B54A]" />
                    <span>Free process optimization analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-blue-950 mb-8">Schedule a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      required 
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input 
                      id="last-name" 
                      placeholder="Doe" 
                      required 
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Enter company name" 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your AP challenges..." 
                    className="min-h-[120px]" 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white h-14 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : "Send Message"}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;