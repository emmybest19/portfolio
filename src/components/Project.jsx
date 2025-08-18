import React, { useEffect, useState } from "react";
// import Lightbox from 'react-image-lightbox';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import 'react-image-lightbox/style.css';

import "intersection-observer";

import Aos from "aos";

const allProjects = [
   {
    title: "E-commerce App",
    description: "A frontend online store.",
    image: "/assets/bond.png",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    category: "frontend",
    live: "https://bond-food.vercel.app/",
    code: "https://github.com/FrontendSuberu/bond_food",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my skills, projects, and services.",
    image: "/assets/portfolio.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    category: "frontend",
    live: "https://ebri-emmanuel-portfolio.vercel.app/",
    code: "https://github.com/emmybest19/portfolio",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Edu Tech App",
    description:
      "Build a landing page of an Edu-tech app to showcase my react and Tailwind skills ",
    image: "/assets/eduTech.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    category: "frontend",
    live: "https://my-learn-map.vercel.app/",
    code: "https://github.com/emmybest19/portfolio",
    span: "col-span-2 row-span-1",
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false,
    });
  }, []);
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-10 "
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-700 dark:text-white" data-aos="fade-down">
        My Projects
      </h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap items-center">
        {["all", "frontend", "full-stack"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(200px,_auto)] gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out ${project.span}`}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              
              className="w-full object-cover hover:opacity-90 transition-opacity duration-300 cursor-pointer"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm text-blue-600 dark:text-blue-400">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Live Preview
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}
