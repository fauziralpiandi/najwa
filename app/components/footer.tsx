import React from 'react';
import { SiNextdotjs, SiVercel, SiGithub } from 'react-icons/si'; // Ikon dari react-icons

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center opacity-75 mt-16 mb-8">
      <p className="font-medium text-sm text-neutral-800 dark:text-neutral-200">
        &copy; 2024 Fauzira Alpiandi
      </p>
      <ul className="flex space-x-2 text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://nextjs.org"
          >
            <SiNextdotjs />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com"
          >
            <SiVercel />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
