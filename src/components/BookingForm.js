"use client";

import React, { useState } from "react";

const SUB_CATEGORIES = {
  Kashmir: [
    "Kashmir Explorer",
    "Dal Lake Retreat",
    "Gulmarg Winter Magic",
    "Pahalgam Valley",
    "Custom Itinerary",
  ],
  Umrah: [
    "15-Day Economy",
    "15-Day Premium",
    "21-Day Deluxe",
    "Ramadan Special",
  ],
  Ziyarat: [
    "Ajmer Shareef (India)",
    "Najaf & Karbala (Iraq)",
    "Mashhad & Qom (Iran)",
    "Baghdad Shareef",
  ],
};

export default function BookingForm({ defaultPackage = "" }) {
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage);

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };

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
                placeholder="+1 (234) 567-890"
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
                  No. of Days
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  placeholder="e.g. 7"
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                    Select Package
                  </option>
                  <option value="Kashmir">Kashmir</option>
                  <option value="Umrah">Umrah</option>
                  <option value="Ziyarat">Ziyarat</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  Sub-Category
                </label>
                <select
                  required
                  disabled={!selectedPackage}
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all text-on-surface disabled:opacity-50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  {selectedPackage &&
                    SUB_CATEGORIES[selectedPackage]?.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  How Many People?
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  placeholder="Adults & Children"
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  Tier
                </label>
                <select
                  required
                  defaultValue="Classic"
                  className="w-full bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary py-3 px-4 transition-all text-on-surface"
                >
                  <option value="Economy">Economy</option>
                  <option value="Classic">Classic</option>
                  <option value="Premium">Premium</option>
                  <option value="Royale">Royale Top-Tier</option>
                </select>
              </div>
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
