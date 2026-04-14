"use client";

import React, { useState, useEffect } from "react";

// Real package tiers per destination — matches pricing on each page
const PACKAGE_TIERS = {
  Kashmir: [
    "Explorer — ₹5,999/person",
    "Classic — ₹10,999/person",
    "Royale — ₹19,999/person",
  ],
  Hajj: [
    "Hajj 2026 Shifting Package — ₹6,50,000/person",
  ],
  Umrah: [
    "Essential (Umrah Only) — ₹1,10,000/person",
    "Economy — ₹1,20,000/person",
    "Semi Deluxe — ₹1,30,000/person",
    "Deluxe — ₹1,40,000/person",
  ],
  Ziyarat: [
    "Grand Ziyarat (Iraq + Iran) Economy — ₹1,20,000/person",
    "Grand Ziyarat (Iraq + Iran) Semi Deluxe — ₹1,30,000/person",
    "Grand Ziyarat (Iraq + Iran) Deluxe — ₹1,50,000/person",
    "Arbaeen Walk 15 Days — ₹1,15,000/person",
  ],
};

export default function BookingForm({ defaultPackage = "" }) {
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage);
  const [tier, setTier] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Parse URL parameters and construct pre-filled form values
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("destination")) setSelectedPackage(searchParams.get("destination"));
    if (searchParams.has("tier")) setTier(searchParams.get("tier"));
    if (searchParams.has("fromDate")) setFromDate(searchParams.get("fromDate"));
    if (searchParams.has("toDate")) setToDate(searchParams.get("toDate"));
    if (searchParams.has("travelers")) setTravelers(searchParams.get("travelers"));
  }, []);

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
    setTier(""); // reset tier when destination changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      fromDate: formData.get("fromDate"),
      toDate: formData.get("toDate"),
      travelers: formData.get("travelers"),
      destination: formData.get("destination"),
      tier: formData.get("tier"),
    };

    try {
      // 1. Send Email Notification via our Backend
      // Map new 'fromDate' to 'date' backwards compatible for email route.
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, date: `${data.fromDate} to ${data.toDate}` }),
      });

      // 2. Redirect to WhatsApp
      const waNumber = "918491852752"; // Huz Point Tours WhatsApp Number
      const message = `Hello Huz Point Tours!\n\nI want to check availability for:\n\n*Destination:* ${data.destination}\n*Package:* ${data.tier}\n*Dates:* ${data.fromDate} to ${data.toDate}\n*Travelers:* ${data.travelers}\n\n*My Details:*\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`;
      
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      
      // Clear form after successful dispatch
      e.target.reset();
      setSelectedPackage("");
      setTier("");
      setFromDate("");
      setToDate("");
      setTravelers("");
    } catch (error) {
      console.error("Submission failed", error);
      alert("Failed to submit enquiry. Please try contacting us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tiers = selectedPackage ? PACKAGE_TIERS[selectedPackage] || [] : [];

  return (
    <div className="bg-surface-container rounded-2xl p-8 shadow-sm border border-outline-variant/30 max-w-4xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-serif text-primary mb-2">
          Check Availability
        </h3>
        <p className="text-on-surface-variant text-sm">
          Fill out the form below to enquire about your journey. Our team will
          get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Column 1: Personal Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                required
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all"
              />
            </div>
          </div>

          {/* Column 2: Booking Info */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  From Date
                </label>
                <input
                  required
                  name="fromDate"
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all text-on-surface"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  To Date
                </label>
                <input
                  required
                  name="toDate"
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all text-on-surface"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  No. of Travelers
                </label>
                <input
                  required
                  name="travelers"
                  type="number"
                  min="1"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  placeholder="e.g. 4"
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all"
                />
              </div>
            </div>

            {/* Package Type */}
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                Package Type
              </label>
              <select
                required
                name="destination"
                value={selectedPackage}
                onChange={handlePackageChange}
                className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 pl-4 pr-12 truncate transition-all text-on-surface appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
              >
                <option value="" disabled>
                  Select Destination
                </option>
                <option value="Kashmir">Kashmir Packages</option>
                <option value="Hajj">Hajj 2026</option>
                <option value="Umrah">Umrah</option>
                <option value="Ziyarat">Ziyarat (Iraq / Iran)</option>
              </select>
            </div>

            {/* Preferred Package / Tier — dynamic */}
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                Preferred Package
              </label>
              <select
                required
                name="tier"
                disabled={!selectedPackage}
                key={selectedPackage}
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 pl-4 pr-12 truncate transition-all text-on-surface disabled:opacity-40 disabled:cursor-not-allowed appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
              >
                <option value="" disabled>
                  {selectedPackage ? "Select a package tier" : "Select destination first"}
                </option>
                {tiers.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white font-medium px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-75 disabled:cursor-wait flex items-center justify-center min-w-[170px]"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
