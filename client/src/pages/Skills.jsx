const Skills = () => {
  const categories = [
    {
      title: "Languages & Core",
      skills: ["Java", "Python", "SQL", "DSA (Java)"]
    },
    {
      title: "Frameworks & Tech",
      skills: ["React.js", "Node.js", "Express.js", "Bootstrap"]
    },
    {
      title: "Tools & Databases",
      skills: ["MySQL", "MongoDB", "Redux"]
    },
    {
      title: "Platforms & IDEs",
      skills: ["Visual Studio Code", "Eclipse", "Google Colab"]
    }
  ];

  return (
    <div id="Skills" className="flex flex-col items-center justify-center bg-[#0a0a0a] text-white py-14 px-8">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {categories.map((cat, index) => (
          <div key={index} className="bg-[#111] border border-gray-800 p-8 rounded-2xl shadow-lg hover:border-purple-500 transition-colors group">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 border-b border-gray-800 pb-4 group-hover:border-purple-500 transition-colors">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {cat.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-[#1a1a1a] border border-gray-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-purple-600 hover:border-purple-400 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Skills;
