"use client";

import React, { useState } from "react";

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

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
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

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Column 1: Personal Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                required
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
                  Travel Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all text-on-surface"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  No. of Travelers
                </label>
                <input
                  required
                  type="number"
                  min="1"
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
                value={selectedPackage}
                onChange={handlePackageChange}
                className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all text-on-surface"
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
                disabled={!selectedPackage}
                key={selectedPackage}
                defaultValue=""
                className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all text-on-surface disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="" disabled>
                  {selectedPackage ? "Select a package tier" : "Select destination first"}
                </option>
                {tiers.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white font-medium px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
