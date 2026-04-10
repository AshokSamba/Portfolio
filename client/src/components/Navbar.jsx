import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    "Home", "About", "Skills", "Academic", "Internships", 
    "Projects", "Certifications", "Achievements", "Contact"
  ];

  return (
    <nav className="fixed w-full bg-black/60 border-b border-purple-500/40 text-white flex flex-wrap justify-center gap-4 md:gap-8 p-6 z-50 shadow-[0_4px_30px_rgba(168,85,247,0.2)] backdrop-blur-xl transition-all">
      {navItems.map((item) => (
        <Link 
          key={item} 
          to={item} 
          smooth={true} 
          duration={500} 
          spy={true}
          activeClass="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 scale-110 font-bold"
          className="cursor-pointer hover:text-purple-400 transition-all uppercase text-xs md:text-sm font-extrabold tracking-widest hover:scale-110"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
