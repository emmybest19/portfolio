import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

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

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-3 flex items-center gap-6 justify-between">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <Link to="/">
            {isDarkMode ? (
              <img
                src="/assets/logo-white.png"
                alt="Emmanuel Ebri logo"
                className="w-20"
              />
            ) : (
              <img
                src="/assets/logo-black.png"
                alt="Emmanuel Ebri logo"
                className="w-20"
              />
            )}
          </Link>
        </div>

        <nav
          className="hidden lg:flex space-x-6 text-base text-gray-700 dark:text-gray-200 font-medium"
          role="navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                    : "border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-3 gap-5">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

         
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-white dark:bg-gray-900 z-50 transform transition-transform delay-150 duration-1000 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20 space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-lg capitalize transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          {/* <a
            href="https://docs.google.com/document/d/17BozDK_pIrNo3kfXTG-r3DWUAcI2oVo4/edit?usp=drive_link&ouid=104472351311393617845&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-justify flex justify-center items-center"
          >
            My Resume
          </a> */}
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        />
      )}
    </header>
  );
};

export default Header;
