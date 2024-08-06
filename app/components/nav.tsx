// components/Navbar.tsx
'use client';

import { usePathname } from 'next/navigation'; // Untuk Next.js 13+
import Link from 'next/link';
import { FaStarOfLife, FaBriefcase, FaBook } from 'react-icons/fa'; // Ikon dari react-icons
import Theme from './ThemeToggle'; // Sesuaikan path jika perlu

const navItems = {
  '/': { name: 'home', icon: <FaStarOfLife /> },
  '/work': { name: 'exps', icon: <FaBriefcase /> },
  '/blog': { name: 'blogs', icon: <FaBook /> },
};

export function Navbar() {
  const pathname = usePathname(); // Mendapatkan rute saat ini

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-2 pr-10">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
              <Link
                key={path}
                href={path}
                className={`flex items-center py-1 px-2 transition-opacity duration-500 ease-in-out ${
                  pathname === path
                    ? 'opacity-100 text-neutral-800 dark:text-neutral-200'
                    : 'opacity-50 dark:hover:text-neutral-200'
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
