import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown, FaArrowRight, FaChevronRight } from "react-icons/fa";

import Aos from "aos";

const Hero = () => {
  useEffect(()=> {
    Aos.init({duration: 1000})
  }, [])

  return (
    <section className="min-h-screen w-full flex  bg-gray-50 pt-20 dark:bg-inherit dark:text-white ">
      <div className=" max-w-7xl mx-auto px-6 md:px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-5 md:gap-16 mt-20">
        
        {/* Left content */}
        <div data-aos="slide-right" className="">
          <h1 className="text-4xl  md:text-5xl font-bold text-gray-800 mb-6 dark:text-white/80">
            Hi, I'm Emmanuel Ebri
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 dark:text-white/80">
            I'm a {" "}
            <span className="text-blue-600 font-semibold">
              <Typewriter
                words={["Full-stack Developer", "Front-end Developer", "Back-end Developer", "Database Manager"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={130}
                delaySpeed={2000}
              />
            </span>
          </p>

          <a
            href="#projects"
            className="inline-flex text-xl items-center bg-blue-600 text-white px-3 py-3 rounded-md  hover:bg-blue-700 transition gap-4"
          >
            Explore <FaChevronRight className="" />
          </a>
        </div>

        {/* Right content */}
        <div className="relative">
          <img
            src="/assets/my pic.jpg"
            alt="Hero visual"
            className="w-ful md:max-w-xl lg:max-w-2xl rounded-lg rounded-tl-2xl"
            data-aos="zoom-in"
          />
          <div className="absolute inset-0 bg-black/5 dark:bg-black/30 rounded-lg rounded-tl-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
