// components/Navbar.tsx
'use client';

import { usePathname } from 'next/navigation'; // Untuk Next.js 13+
import Link from 'next/link';
import { FaStarOfLife } from 'react-icons/fa'; // Ikon dari react-icons
import Theme from './ThemeToggle'; // Sesuaikan path jika perlu

const navItems = {
  '/': { name: 'Fauzira Alpiandi', icon: <FaStarOfLife /> },
};

export function Navbar() {
  const pathname = usePathname(); // Mendapatkan rute saat ini

  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-rows item-start justify-between"
          id="nav"
        >
          <div className="flex flex-rows font-medium">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
              <Link
                key={path}
                href={path}
                className={`flex items-center transition-opacity duration-500 ease-in-out ${
                  pathname === path ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <span className="mr-2">{icon}</span>
                {name}
              </Link>
            ))}
          </div>
          <Theme />
        </nav>
      </div>
    </aside>
  );
}
