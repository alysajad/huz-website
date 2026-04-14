import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TeamCard = ({ imageUrl, name, role, instagram = '#', twitter = '#' }) => {
  return (
    <div className="group relative w-full h-[450px] overflow-hidden rounded-md cursor-pointer flex flex-col justify-end">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110 filter grayscale brightness-90 group-hover:filter-none group-hover:brightness-100"
        />
      </div>

      {/* Luxury Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-20 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
        <h3 className="text-3xl font-serif text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs uppercase tracking-[0.2em] font-medium text-primary mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {role}
        </p>
        
        {/* Social Links sliding in */}
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <Link href={instagram} className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="text-sm border-b border-primary/30 pb-1">Instagram</span>
          </Link>
          <Link href={twitter} className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="text-sm border-b border-primary/30 pb-1">Twitter</span>
          </Link>
        </div>
      </div>

      {/* Deco Border */}
      <div className="absolute inset-4 z-30 border border-primary/0 group-hover:border-primary/20 transition-colors duration-700 pointer-events-none rounded-sm"></div>
    </div>
  );
};

export default TeamCard;
