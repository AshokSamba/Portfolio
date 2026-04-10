const About = () => {
  return (
    <div id="About" className="flex flex-col items-center justify-center bg-[#050505] text-white py-14 px-8">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
      <div className="max-w-4xl bg-[#111] p-10 rounded-2xl border border-gray-800 shadow-xl">
        <p className="text-center text-gray-300 text-lg leading-relaxed">
          I am a passionate software developer with a strong foundation in the MERN stack. 
          I love building scalable web applications, optimizing backend architectures, and creating beautiful, responsive user interfaces. 
          I am constantly exploring new technologies to improve my technical acumen and deliver state-of-the-art solutions.
        </p>
      </div>
    </div>
  );
};
export default About;
