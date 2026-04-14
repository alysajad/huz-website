'use client';
import { useEffect, useState } from 'react';

export default function SnowEffect() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    // Generate flakes purely on the client side to prevent hydration mismatches
    const generateFlakes = () => {
      return Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `-${Math.random() * 10}s`,
        opacity: Math.random() * 0.6 + 0.2,
        size: `${Math.random() * 0.4 + 0.2}rem`
      }));
    };
    
    setFlakes(generateFlakes());
  }, []);

  if (flakes.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snow-flake"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
          }}
        />
      ))}
    </div>
  );
}
