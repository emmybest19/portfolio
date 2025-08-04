
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 md:px-16 py-3 flex items-center gap-6 justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <a href="#home">{isDarkMode ? <img
            src="/assets/logo-white.png"
            alt=""
            className="w-20"
            
          /> : <img
            src="/assets/logo-black.png"
            alt=""
            className="w-20"
            
          />}</a>
        </div>

        
        <nav className="hidden lg:flex space-x-6 text-2xl text-gray-700 dark:text-gray-200 font-medium">
          {["home", "services", "projects", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="border-b-2 border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 pb-1 capitalize"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-3 gap-5">
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <a
            href="https://docs.google.com/document/d/17BozDK_pIrNo3kfXTG-r3DWUAcI2oVo4/edit?usp=drive_link&ouid=104472351311393617845&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-2xl"
          >
            My CV
          </a>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20 space-y-6">
          {["home", "services", "projects", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMobileMenu}
              className="text-gray-800 dark:text-gray-100 text-lg hover:text-blue-600 dark:hover:text-blue-400 capitalize"
            >
              {item}
            </a>
          ))}
          <a
            href="/assets/Emmanuel_Ebri_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Discover Me
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}
    </header>
  );
};

export default Header;
