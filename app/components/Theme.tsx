'use client';

import { useState, useEffect } from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    setTheme(savedTheme || 'light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);

    const body = document.body;
    body.classList.add('theme-transition');
    setTimeout(() => {
      body.classList.remove('theme-transition');
    }, 300);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      aria-label="Toggle theme"
      className="flex items-center p-1.5 ml-12 text-gray-600 dark:text-gray-300 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
    >
      {theme === 'light' ? <FaToggleOn /> : <FaToggleOff />}
      <style jsx global>
        {`
          .theme-transition {
            transition:
              background-color 0.3s ease-in-out,
              color 0.3s ease-in-out;
          }
          html,
          body {
            transition:
              background-color 0.3s ease-in-out,
              color 0.3s ease-in-out;
          }
        `}
      </style>
    </button>
  );
};

export default ThemeToggle;
