import { FaExternalLinkAlt } from "react-icons/fa";
import certMern from "../components/cert-mern.png";
import certOracle from "../components/cert-oracle.png";
import certHacker from "../components/cert-hacker.png";

const Certifications = () => {
  const certs = [
    {
      title: "MERN Stack Completion",
      org: "Apna College",
      image: certMern,
      link: ""
    },
    {
      title: "Oracle AI Certificate",
      org: "Oracle",
      image: certOracle,
      link: ""
    },
    {
      title: "HackerRank problemSolving",
      org: "HackerRank",
      image: certHacker,
      link: ""
    },

  ];

  return (
    <div id="Certifications" className="flex flex-col items-center justify-center bg-[#050505] text-white py-14 px-8">
      <h2 className="text-4xl font-bold mb-12 text-blue-400">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {certs.map((cert, idx) => (
          <div key={idx} className="bg-[#111] rounded-2xl border border-gray-800 flex flex-col overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all shadow-lg shadow-black/50 group">

            {/* Certificate Image Chassis */}
            <div className="h-48 w-full bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center border-b border-gray-800">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=Cert&size=400&background=1a1a1a&color=fff&font-size=0.33` }}
              />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card Content & Action */}
            <div className="p-6 flex flex-col flex-grow bg-[#0a0a0a]">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{cert.org}</p>

              <div className="mt-auto">
                <a
                  href={cert.link || cert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#111] border border-gray-700 hover:border-blue-500 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all text-sm group-hover:shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                >
                  <FaExternalLinkAlt /> View Certificate
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
