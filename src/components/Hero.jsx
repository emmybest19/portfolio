import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full px-4 sm:px-5 md:px-5 flex bg-gray-50 pt-20 dark:bg-inherit dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row gap-5 md:gap-x-16 mt-20 w-full md:justify-between md:items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className="flex-1 max-w-2xl"
        >
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-gray-800 mb-6 dark:text-white/80">
            Hi, I'm Emmanuel Ebri
          </h1>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-700 mb-6 dark:text-white/80">
            I'm a{" "}
            <span className="text-blue-600 font-semibold">
              <Typewriter
                words={[
                  "Full-stack Developer",
                  "Front-end Developer",
                  "Back-end Developer",
                  "Database Manager",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={130}
                delaySpeed={2000}
              />
            </span>
          </p>

          <Link
            to="/projects"
            className="inline-flex text-base items-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition gap-3"
          >
            Explore <FaChevronRight />
          </Link>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <img
            src="/assets/hero-portrait.jpg"
            alt="Emmanuel Ebri portrait"
            className="w-full md:max-w-full lg:max-w-full rounded-lg rounded-tl-2xl h-auto object-cover"
          />
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/5 dark:bg-black/30 rounded-lg rounded-tl-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
