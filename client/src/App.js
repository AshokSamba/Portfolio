import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Internships from "./pages/Internships";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import Academic from "./pages/Academic";

function App() {
  return (
    <div className="font-sans bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Academic />
      <Internships />
      <Projects />

      <Certifications />
      <Achievements />

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
