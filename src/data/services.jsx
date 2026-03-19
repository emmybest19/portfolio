import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiMysql, SiTypescript } from "react-icons/si";

export const services = [
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

export const techStack = [
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-xl md:text-4xl" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-500 text-xl md:text-4xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-xl md:text-4xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-xl md:text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-xl md:text-4xl" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-xl md:text-4xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400 text-xl md:text-4xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-xl md:text-4xl" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-500 text-xl md:text-4xl" />,
  },
];
