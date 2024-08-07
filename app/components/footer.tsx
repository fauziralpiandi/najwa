import React from 'react';
import { SiNextdotjs, SiVercel } from 'react-icons/si'; // Ikon dari react-icons

const Footer: React.FC = () => {
  return (
    <footer
      className="flex justify-between items-center opacity-65 mt-16"
      aria-label="Footer"
    >
      <div className="flex flex-col font-medium text-xs">
        <p>Copyright &copy; 2024 Fauzira Alpiandi</p>
      </div>
      <ul className="flex space-x-2" aria-label="Tech-Stack">
        <li>
          <a
            className="flex items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://nextjs.org"
            aria-label="Next.js"
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
            aria-label="Vercel"
          >
            <SiVercel />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
