import { motion } from "framer-motion";
import ProfileImage from "../components/home.jpeg";

const Home = () => {
  return (
    <div id="Home" className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-8 max-w-6xl w-full">
        <div className="text-center md:text-left text-white max-w-xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Samba Ashok</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-10"
          >
            Full Stack Developer | Problem Solver
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a href="#Contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              Get In Touch
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              View Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>

          {/* Profile Image container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl z-10 bg-[#111]">
            <img
              src={ProfileImage}
              alt="Samba Ashok"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Samba+Ashok&size=400&background=111&color=fff" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
