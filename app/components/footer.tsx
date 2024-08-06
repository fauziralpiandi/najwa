import React from 'react';
import { SiNextdotjs, SiVercel } from 'react-icons/si'; // Ikon dari react-icons

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center opacity-65 mt-16">
      <div className="flex flex-col">
        <p className="font-medium text-xs">
          <a
            href="https://opensource.org/licenses/MIT"
            className="font-black"
            rel="noopener noreferrer"
            target="_blank"
          >
            MIT License
          </a>{' '}
          &copy; 2024 Fauzira Alpiandi
        </p>
      </div>
      <ul className="flex space-x-2">
        <li>
          <a
            className="flex items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://nextjs.org"
          >
            <SiNextdotjs />
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
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
