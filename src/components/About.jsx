import React from "react";
import { motion } from "framer-motion";

const facts = [
  {
    id: 1,
    title: "2 Years Coding",
    desc: "Started my journey in 2023, building full-stack apps.",
  },
  {
    id: 2,
    title: "MongoDB + Express",
    desc: "MERN stack specialist for modern web platforms.",
  },
  {
    id: 3,
    title: "E-learning Projects",
    desc: "Built platforms for remote learning with video & real-time chat.",
  },
  {
    id: 4,
    title: "Public Health & Tech",
    desc: "Merging software skills with public health experience.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[#090e34] dark:bg-inherit text-gray-300 dark:text-white"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-10 text-center px-4 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 items-center">
        <motion.div
          className="flex justify-center flex-1 "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/assets/pic2.jpg"
            alt="Emmanuel Ebri profile photo"
            className="rounded-2xl shadow-xl object-cover w-full "
          />
        </motion.div>

        {/* Right: Bio and skills */}
        <motion.div
          className="space-y-6 flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-base leading-relaxed text-justify">
            Full-stack software developer with 3 years of experience building and deploying scalable, end-to-end web applications. Experienced across the stack with React, Next.js, TypeScript, Node.js, Express, MongoDB, MySQL, PostgreSQl and Python frameworks such as Django and Flask, with a strong focus on designing clean APIs and intuitive, high-performance user interfaces. Proven ability to develop complex systems, including real-time applications, role-based platforms, and API-driven architectures, while maintaining a high standard of code quality, security, and scalability. Skilled in translating complex requirements into reliable, production-ready solutions, with a consistent emphasis on performance, maintainability, and user experience across the entire development lifecycle, from concept to deployment.
          </p>

          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
