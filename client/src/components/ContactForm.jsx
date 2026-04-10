import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }
    
    // Construct formatting for the email
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    
    // Trigger user's mail client (Gmail/Outlook/Apple Mail)
    window.location.href = `mailto:sambaashok36@gmail.com?subject=${subject}&body=${body}`;
    
    setStatus("Opening your email client! ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div id="Contact" className="py-14 bg-[#050505] text-white flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Contact Me
      </motion.h2>

      <motion.form 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit} 
        className="flex flex-col gap-6 w-11/12 md:w-1/2 lg:w-1/3 mx-auto bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl border border-gray-800"
      >
        <input 
          placeholder="Name" 
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
          className="p-4 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
        />
        <input 
          placeholder="Email" 
          type="email"
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
          className="p-4 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
        />
        <textarea 
          placeholder="Message" 
          value={form.message}
          onChange={(e)=>setForm({...form,message:e.target.value})}
          className="p-4 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-40 resize-none transition-all"
        />
        <button type="submit" className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-bold py-4 rounded-lg transition-all text-white shadow-lg transform hover:-translate-y-1">
          Send Message
        </button>
        {status && <p className={`text-center mt-4 ${status.includes("Failed") ? "text-red-400" : "text-green-400"}`}>{status}</p>}
      </motion.form>
    </div>
  );
};

export default ContactForm;
