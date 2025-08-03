import React, { useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { SiMongodb, SiMysql, SiSupabase, SiTypescript } from "react-icons/si";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and dynamic interfaces using React.js, Tailwind CSS, and more.",
    icon: <FaReact className="text-blue-500 text-4xl" />,
  },
  {
    title: "Backend Development",
    description:
      "Creating scalable APIs with Node.js, Express, and integrating MongoDB and MySQL.",
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
  },
  {
    title: "Database Management",
    description:
      "Efficient data modeling and handling with MongoDB, MySQL, and Firebase.",
    icon: <FaDatabase className="text-yellow-600 text-4xl" />,
  },
];

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl md:text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl md:text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl md:text-4xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-500 text-3xl md:text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl md:text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl md:text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl md:text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-3xl md:text-4xl" /> },
 
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl md:text-4xl" /> },
];

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className=" bg-[#090e34] relative dark:bg-inherit mt-8 ">
      <div className="max-w-7xl  mx-auto px-4 text-center py-8  ">
        <h2
          className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 dark:text-blue-700"
          data-aos="fade"
          data-aos-duration="500"
          data-aos-delay="700"
        >
          What I Do
        </h2>
        <p
          className="text-white mb-12 dark:text-white/60"
          data-aos="slide-right"
          data-aos-delay="1000"
          data-aos-duration="2000"
        >
          I'm a full-stack developer delivering robust, scalable, and efficient
          web solutions.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 ">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 1000}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition dark:bg-gray-800 "
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white/60">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <h3
          className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4"
          data-aos="slide-left"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Tech Stack
        </h3>
        <div className="relative px-4">
          {/* Gradient Edges */}
          {/* <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent dark:from-inherit z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-inherit to-transparent z-10 pointer-events-none" /> */}

         
          <div className="flex justify-between whitespace-nowrap px-4 py-4 ">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col justify-between items-center "
              >
                {tech.icon}
                <span className="mt-2 text-sm text-white dark:text-white/80">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
