import { useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const InternshipCard = ({ intern }) => {
  const [showTech, setShowTech] = useState(false);

  return (
    <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all shadow-lg border-l-4 border-l-purple-500 flex flex-col justify-between group">
      <div>
        <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">{intern.role} - {intern.company}</h3>
        <p className="text-purple-400 mb-4">{intern.duration}</p>
        <ul className="list-disc text-gray-300 space-y-3 mb-6 ml-5">
          {intern.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* Tech Stack Animated Dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ${showTech ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-wrap gap-2 pt-2">
            {intern.techStack.map((tech, i) => (
              <span key={i} className="text-xs font-bold bg-purple-500/10 text-purple-400 px-3 py-1.5 rounded-full border border-purple-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-auto pt-5 border-t border-gray-800">
        <a
          href={intern.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-semibold hover:text-purple-400 transition-colors"
        >
          <FaExternalLinkAlt /> View Internship
        </a>
        <button
          onClick={() => setShowTech(!showTech)}
          className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400 transition-colors ml-auto focus:outline-none"
        >
          <FaCode /> {showTech ? 'Hide Tech' : 'View Tech Stack'}
        </button>
      </div>
    </div>
  );
};

const Internships = () => {
  const internships = [
    {
      role: "MERN Intern",
      company: "WebStack Academy",
      duration: "March 2026 - April 2026",
      link: "#",
      techStack: ["React.js", "Node.js", "Express", "Tailwind CSS"],
      points: [
        <>Developed a scalable frontend using React.js and Tailwind CSS.</>,
        <>Developed scalable backend microservices using Node.js and Express.</>,
        <>Improved application performance by 30% through query optimization.</>,
        <>Collaborated with cross-functional teams to deliver new features on time.</>
      ]
    }
  ];

  return (
    <div id="Internships" className="flex flex-col items-center justify-center bg-[#0a0a0a] text-white py-14 px-8">
      <h2 className="text-4xl font-bold mb-12 text-purple-400">Internships</h2>
      <div className="max-w-4xl w-full flex flex-col gap-8">
        {internships.map((intern, idx) => (
          <InternshipCard key={idx} intern={intern} />
        ))}
      </div>
    </div>
  );
};

export default Internships;
