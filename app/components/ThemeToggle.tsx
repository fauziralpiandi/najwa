// components/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Set theme from local storage or default to 'light'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    setTheme(savedTheme || 'light');
  }, []);

  useEffect(() => {
    // Apply theme to the document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      aria-label="Toggle theme"
      className="flex items-center p-2 text-gray-600 dark:text-gray-300 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;