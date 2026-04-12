'use client';
import { useState, useEffect } from 'react';
import { destinationsInfo } from '@/data/destinations';

export default function DestinationGuide() {
  const [selectedDest, setSelectedDest] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedDest) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedDest]);

  return (
    <div className="w-full">
      {/* Grid of Destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinationsInfo.map((dest) => (
          <div 
            key={dest.id} 
            onClick={() => setSelectedDest(dest)}
            className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-outline-variant/10 bg-surface-container transition-transform duration-500 hover:-translate-y-2"
          >
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase mb-1">{dest.distance}</span>
              <h3 className="text-white font-serif text-3xl mb-1">{dest.name}</h3>
              <p className="text-white/80 text-sm font-light italic">{dest.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedDest && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer" 
            onClick={() => setSelectedDest(null)}
          ></div>
          
          <div className="relative bg-surface text-on-surface w-full max-w-5xl max-h-[90vh] rounded-[30px] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 animate-in slide-in-from-bottom-8 duration-500">
            {/* Left side: Photo */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative">
              <img 
                src={selectedDest.image} 
                alt={selectedDest.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              <button 
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 left-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full text-white flex items-center justify-center md:hidden border border-white/20"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                    {selectedDest.title}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-primary mb-2">{selectedDest.name}</h2>
                </div>
                <button 
                  onClick={() => setSelectedDest(null)}
                  className="hidden md:flex w-10 h-10 bg-surface-container-high rounded-full text-on-surface items-center justify-center hover:bg-error hover:text-error-container transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container p-3 rounded-xl border border-outline-variant/20">
                  <span className="material-symbols-outlined text-tertiary">near_me</span>
                  {selectedDest.distance}
                </div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container p-3 rounded-xl border border-outline-variant/20">
                  <span className="material-symbols-outlined text-tertiary">schedule</span>
                  {selectedDest.time}
                </div>
              </div>

              <p className="text-on-surface-variant mb-8 leading-relaxed">
                {selectedDest.description}
              </p>

              <h4 className="font-serif text-xl text-primary mb-4 border-b border-outline-variant/20 pb-2">Top Attractions</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {selectedDest.attractions.map((attr, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
                    {attr}
                  </li>
                ))}
              </ul>

              <h4 className="font-serif text-xl text-primary mb-4 border-b border-outline-variant/20 pb-2">Location Map</h4>
              <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden border border-outline-variant/20 shadow-inner">
                <iframe 
                  src={selectedDest.mapIframe}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
