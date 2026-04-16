import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-zinc-800/50'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="bg-green-600 group-hover:bg-green-500 transition-colors rounded-lg p-1.5">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">
              Green<span className="text-orange-500">Edge</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-300 hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-px after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5551234567"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-orange-400 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-orange-900/30"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-zinc-950/98 backdrop-blur-md border-t border-zinc-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-zinc-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 mt-3 space-y-2">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 text-zinc-300 hover:text-orange-400 px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
              onClick={closeMenu}
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors"
              onClick={closeMenu}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
