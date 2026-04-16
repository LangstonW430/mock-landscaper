import { Phone, Mail, MapPin } from 'lucide-react';

const serviceLinks = [
  'Lawn Care & Maintenance',
  'Landscape Design',
  'Hardscaping',
  'Mulching & Bed Preparation',
  'Seasonal Care',
  'Irrigation & Water Management',
];

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Selected Projects', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Our Approach', href: '#process' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080a] border-t border-[#2a2721]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-5">
              <p
                className="text-[#f0ebe2] text-xl font-semibold tracking-[0.04em] hover:text-[#c5a264] transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                GreenEdge
              </p>
              <p className="text-[#6b6259] text-[9px] tracking-[0.3em] uppercase mt-0.5">
                Landscape &amp; Design
              </p>
            </a>
            <p className="text-[#6b6259] text-xs leading-relaxed max-w-[220px]">
              Estate landscaping and grounds management for discerning homeowners.
              Serving the greater metro area since 2009.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#6b6259] text-[10px] tracking-[0.25em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[#9a8f82] hover:text-[#c5a264] text-xs tracking-wide transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#6b6259] text-[10px] tracking-[0.25em] uppercase mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#9a8f82] hover:text-[#c5a264] text-xs tracking-wide transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#6b6259] text-[10px] tracking-[0.25em] uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5551234567"
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6b6259] mt-0.5 flex-shrink-0 group-hover:text-[#c5a264] transition-colors" />
                  <span className="text-[#9a8f82] group-hover:text-[#c5a264] text-xs transition-colors">
                    (555) 123-4567
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@greenedgelandscaping.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#6b6259] mt-0.5 flex-shrink-0 group-hover:text-[#c5a264] transition-colors" />
                  <span className="text-[#9a8f82] group-hover:text-[#c5a264] text-xs transition-colors break-all">
                    hello@greenedgelandscaping.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 text-[#6b6259] mt-0.5 flex-shrink-0" />
                  <span className="text-[#6b6259] text-xs leading-relaxed">
                    Franklin, Oakdale &amp; Westfield Counties, OH
                  </span>
                </div>
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-block mt-7 border border-[#c5a264]/30 hover:border-[#c5a264] text-[#c5a264] px-4 py-2.5 text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-[#c5a264]/5"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1e1c18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6b6259]/60 text-xs">
            © {currentYear} GreenEdge Landscaping LLC
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#6b6259]/60 hover:text-[#9a8f82] text-xs transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[#6b6259]/60 hover:text-[#9a8f82] text-xs transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
