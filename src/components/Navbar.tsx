import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-gray-900/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold text-green-400">YourName</div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#skills" className="hover:text-green-400 transition">Skills</a>
          <a href="#experience" className="hover:text-green-400 transition">Experience</a>
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4 flex flex-col gap-4">
          <a href="#about" className="hover:text-green-400 transition" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" className="hover:text-green-400 transition" onClick={() => setOpen(false)}>Skills</a>
          <a href="#experience" className="hover:text-green-400 transition" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" className="hover:text-green-400 transition" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-green-400 transition" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 