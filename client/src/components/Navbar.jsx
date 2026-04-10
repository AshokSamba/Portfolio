import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home", "About", "Skills", "Academic", "Internships", 
    "Projects", "Certifications", "Achievements", "Contact"
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-black/80 border-b border-purple-500/30 text-white z-50 shadow-lg backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              SA.
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item} 
                  to={item} 
                  smooth={true} 
                  duration={500} 
                  spy={true}
                  offset={-80}
                  activeClass="text-purple-400 border-b-2 border-purple-500 scale-105"
                  className="cursor-pointer hover:text-purple-400 px-3 py-2 transition-all uppercase text-xs font-bold tracking-widest"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
            >
              {isOpen ? <HiX className="h-8 w-8 text-purple-400" /> : <HiMenuAlt3 className="h-8 w-8 text-purple-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 bg-black/95 border-b border-purple-500/20" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center">
          {navItems.map((item) => (
            <Link 
              key={item} 
              to={item} 
              smooth={true} 
              duration={500} 
              spy={true}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer hover:bg-purple-600/20 hover:text-purple-400 px-3 py-4 rounded-md text-base font-extrabold tracking-widest uppercase transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
