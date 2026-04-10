import { useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectCard = ({ proj }) => {
  const [showTech, setShowTech] = useState(false);

  return (
    <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors shadow-lg flex flex-col justify-between group h-full">
      <div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
        <p className="text-gray-400 mb-6">{proj.desc}</p>

        {/* Tech Stack Animated Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ${showTech ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-wrap gap-2 pt-2">
            {proj.techStack.map((tech, i) => (
              <span key={i} className="text-xs font-bold bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full border border-blue-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-auto pt-5 border-t border-gray-800">
        <a
          href={proj.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400 transition-colors"
        >
          <FaExternalLinkAlt /> View Project
        </a>
        <button
          onClick={() => setShowTech(!showTech)}
          className="flex items-center gap-2 text-sm font-semibold hover:text-purple-400 transition-colors ml-auto focus:outline-none"
        >
          <FaCode /> {showTech ? 'Hide Tech' : 'View Tech Stack'}
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-stack MERN e-commerce store with Stripe payment integration.",
      link: "#",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "Social Media  Platform App",
      desc: "Real-time chat functionality using Socket.io and React. ApnaCollege",
      link: "#",
      techStack: ["React", "Socket.io", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Task Manager",
      desc: "React By GeekforGeeks",
      link: "#",
      techStack: ["React", "Redux", "Tailwind CSS"]
    },
  ];

  return (
    <div id="Projects" className="flex flex-col items-center justify-center bg-[#050505] text-white py-14 px-8">
      <h2 className="text-4xl font-bold mb-12 text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
