'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaStarOfLife } from 'react-icons/fa';
import Theme from './ThemeToggle';
import { ReactNode } from 'react';

type NavItem = {
  name: string;
  icon?: ReactNode;
};

const navItems: Record<string, NavItem> = {
  '/': { name: 'Fauzira Alpiandi', icon: <FaStarOfLife /> },
  //'/blog': { name: '/ Blog' },
  //'/exp': { name: '/ Exp' },
  //'/startkit': { name: '/ Startkit' },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-rows item-start justify-between" id="nav">
          <div className="flex flex-rows space-x-1 font-medium">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
              <Link
                key={path}
                href={path}
                className={`nav-link flex items-center ${
                  pathname === path ? 'active' : ''
                }`}
              >
                {path === '/' && icon && <span className="mr-2 items-center">{icon}</span>}
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