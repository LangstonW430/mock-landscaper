import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

// Inline SVG social icons (lucide-react doesn't include brand icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const serviceLinks = [
  'Lawn Care & Maintenance',
  'Landscape Design',
  'Hardscaping',
  'Mulching & Bed Prep',
  'Seasonal Cleanup',
  'Irrigation Systems',
];

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Customer Reviews', href: '#testimonials' },
  { label: 'How It Works', href: '#process' },
  { label: 'Get a Free Quote', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <div className="bg-green-600 rounded-lg p-1.5">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">
                Green<span className="text-orange-500">Edge</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Professional landscaping for homeowners who demand quality.
              Serving the greater metro area since 2009.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="bg-zinc-800 hover:bg-blue-700 border border-zinc-700 hover:border-blue-600 text-zinc-400 hover:text-white w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="bg-zinc-800 hover:bg-pink-700 border border-zinc-700 hover:border-pink-600 text-zinc-400 hover:text-white w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-zinc-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-zinc-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5551234567"
                  className="flex items-start gap-2.5 text-zinc-400 hover:text-orange-400 text-sm transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-orange-400" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@greenedgelandscaping.com"
                  className="flex items-start gap-2.5 text-zinc-400 hover:text-green-400 text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-green-400" />
                  hello@greenedgelandscaping.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Franklin, Oakdale & Westfield Counties, OH</span>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs text-center sm:text-left">
            © {currentYear} GreenEdge Landscaping LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
