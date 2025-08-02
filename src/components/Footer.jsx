import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-[#0e0e0e] text-gray-700 dark:text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left: Your name or logo */}
        <div className="text-lg font-semibold tracking-wide">
          Emmanuel Ebri
        </div>

        {/* Center: Navigation links */}
        <div className="flex gap-6 text-sm">
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          {/* GitHub */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.9c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.6.1-.6.1-.6 1.1.1 1.7 1.2 1.7 1.2 1 .1.6-.9 1.6-1.5-.5-.3-1.2-1-1.2-2.2 0-.5.2-1 .5-1.4-.1-.3-.4-1.2 0-2.4 0 0 .9-.3 2.5 1 .7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.5-1.3 2.5-1 2.5-1 .4 1.2.1 2.1 0 2.4.3.4.5.9.5 1.4 0 1.2-.6 1.9-1.2 2.2.6.5 1 .3 1.6 1.5 0 0 .7 2.3-4 1.6v1.9c0 .3.2.6.8.5A12 12 0 0012 0z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM9 8h3.6v2.2h.05c.5-1 1.7-2.2 3.45-2.2C20.4 8 22 10 22 14v10h-4v-9.3c0-2.2-.8-3.7-2.8-3.7-1.5 0-2.3 1-2.7 1.9-.1.3-.1.7-.1 1.1V24h-4z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M23.4 4.8c-.8.4-1.6.6-2.5.8a4.1 4.1 0 001.8-2.3 8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.7 11.6 11.6 0 01-8.4-4.2 4.1 4.1 0 001.3 5.4 4 4 0 01-1.8-.5v.1a4.1 4.1 0 003.3 4 4.2 4.2 0 01-1.8.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 19.5a11.6 11.6 0 006.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
        © {currentYear} Emmanuel Ebri. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
