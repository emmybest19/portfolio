import React from "react";
import { Link } from "react-router-dom";
import socialLinks from "../data/socialLinks.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-[#090e34] text-gray-700 dark:text-gray-300 py-10 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <Link to="/" className="text-lg font-semibold tracking-wide hover:text-blue-600 transition-colors">
          Emmanuel Ebri
        </Link>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="hover:text-blue-500 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
        &copy; {currentYear} Emmanuel Ebri. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
