import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10 border-t border-gray-800">
      <div className="flex justify-center gap-8 mb-6 text-3xl">
        <a href="mailto:sambaashok36@gmail.com" className="hover:text-purple-400 transition-transform hover:scale-125"><FaEnvelope /></a>
        <a href="https://github.com/AshokSamba" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-transform hover:scale-125"><FaGithub /></a>
        <a href="https://leetcode.com/u/Sambaashok36/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-transform hover:scale-125"><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/profile/sambaashok" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-transform hover:scale-125"><SiGeeksforgeeks /></a>
        <a href="https://linkedin.com/in/sambaashok36/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-transform hover:scale-125"><FaLinkedin /></a>
      </div>
      <p className="text-center text-gray-500 font-medium">© 2026 Samba Ashok | Full Stack Developer</p>
    </footer>
  );
};

export default Footer;
