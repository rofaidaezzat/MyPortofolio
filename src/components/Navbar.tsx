import { useState } from "react";

const NAVIGATION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-gray-900/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-400">Rofaida Ezzat</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4 flex flex-col gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-400 transition"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
