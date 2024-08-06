'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const initialTheme = savedTheme || 'dark';
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
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
      className="flex-end items-center"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
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
