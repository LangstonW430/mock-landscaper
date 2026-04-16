import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#08080a]/97 backdrop-blur-md border-b border-[#2a2721]'
          : 'bg-gradient-to-b from-black/55 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo — wordmark only, no icon box */}
          <a href="#" className="flex flex-col leading-none group">
            <span
              className="text-[#f0ebe2] text-xl font-semibold tracking-[0.04em] group-hover:text-[#c5a264] transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              GreenEdge
            </span>
            <span className="text-[#6b6259] text-[9px] tracking-[0.3em] uppercase mt-0.5">
              Landscape &amp; Design
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#9a8f82] hover:text-[#f0ebe2] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:5551234567"
              className="flex items-center gap-1.5 text-[#9a8f82] hover:text-[#c5a264] text-sm transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              className="bg-[#c5a264] hover:bg-[#d4bc8a] text-[#08080a] px-5 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-300"
            >
              Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#9a8f82] hover:text-[#f0ebe2] p-2 -mr-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#08080a]/98 backdrop-blur-md border-t border-[#2a2721] px-4 py-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-[#9a8f82] hover:text-[#f0ebe2] px-3 py-2.5 text-sm font-medium tracking-wide transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#2a2721] mt-3 space-y-3">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 text-[#9a8f82] hover:text-[#c5a264] px-3 py-2 text-sm transition-colors"
              onClick={closeMenu}
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              className="block w-full bg-[#c5a264] hover:bg-[#d4bc8a] text-[#08080a] px-4 py-3 text-center text-xs font-semibold tracking-[0.1em] uppercase transition-colors"
              onClick={closeMenu}
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
