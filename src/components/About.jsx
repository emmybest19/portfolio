import React from "react";
import { motion } from "framer-motion";

const facts = [
  { id: 1, title: "2 Years Coding", desc: "Started my journey in 2019, building full-stack apps." },
  { id: 2, title: "MongoDB + Express", desc: "MERN stack specialist for modern web platforms." },
  { id: 3, title: "E-learning Projects", desc: "Built platforms for remote learning with video & real-time chat." },
  { id: 4, title: "Public Health & Tech", desc: "Merging software skills with public health experience." },
];

const About = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#090e34] dark:bg-inherit text-gray-300 dark:text-white">
      {/* Section title */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-center px-4 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        <motion.div
          className="col-span-2 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/assets/pic2.jpg"
            alt="Profile"
            className="rounded-2xl shadow-xl object-cover w-full "
          />
        </motion.div>

        {/* Right: Bio and skills */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg leading-relaxed ">
            I'm a full-stack developer passionate about creating scalable web applications that solve real-world problems. With a background in software engineering and public health, I enjoy combining technical skill with purpose-driven design.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facts.map((fact) => (
              <motion.div
                key={fact.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow col-span-1"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-bold text-lg mb-2">{fact.title}</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300">{fact.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
