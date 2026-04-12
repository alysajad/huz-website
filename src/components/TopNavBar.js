'use client';

import PillNav from './PillNav';
import { usePathname } from 'next/navigation';

export default function TopNavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', ariaLabel: 'Home' }, // This first item is used for the logo in PillNav
    { href: '/kashmir', label: 'Kashmir Packages', ariaLabel: 'Kashmir Packages' },
    { href: '/umrah', label: 'Umrah & Hajj', ariaLabel: 'Umrah & Hajj' },
    { href: '/ziyarat', label: 'Ziyarat', ariaLabel: 'Ziyarat' },
    { href: '/#about', label: 'About Us', ariaLabel: 'About Us' },
  ];

  return (
    <PillNav
      logo="/logo.png"
      items={navItems}
      activeHref={pathname}
      baseColor="#10b981" // Emerald primary color for hover circles
      hoveredPillTextColor="#000000" // Dark text on the emerald hover fill
      pillTextColor="#ffffff" // White text normally on the dark glassy bg
    />
  );
}
