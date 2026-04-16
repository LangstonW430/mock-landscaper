import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop"
          alt="Professionally landscaped estate garden"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="text-[#c5a264] text-sm font-medium tracking-[0.2em] uppercase mb-7">
            Estate Landscaping &amp; Design
          </p>

          {/* Headline — Playfair Display */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-[72px] text-[#f0ebe2] leading-[1.08] tracking-tight mb-7"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Outdoor Environments{' '}
            <em className="not-italic text-[#c5a264]">Crafted</em>{' '}
            for the Exceptional Home
          </h1>

          {/* Subheadline */}
          <p className="text-[#9a8f82] text-lg leading-relaxed mb-10 max-w-[500px]">
            GreenEdge designs and maintains landscapes that reflect the quality
            of your property — from intimate garden courts to full estate grounds.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2.5 bg-[#c5a264] hover:bg-[#d4bc8a] text-[#08080a] px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:5551234567"
              className="flex items-center justify-center gap-2.5 border border-[#f0ebe2]/25 hover:border-[#f0ebe2]/50 text-[#f0ebe2] px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#c5a264]" />
              (555) 123-4567
            </a>
          </div>

          {/* Credentials row — no star counts, no "free" */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="w-px h-4 bg-[#c5a264]" />
              <span className="text-[#9a8f82] text-xs tracking-widest uppercase">NALP Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-px h-4 bg-[#c5a264]" />
              <span className="text-[#9a8f82] text-xs tracking-widest uppercase">Licensed &amp; Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-px h-4 bg-[#c5a264]" />
              <span className="text-[#9a8f82] text-xs tracking-widest uppercase">Est. 2009</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08080a] to-transparent z-10" />
    </section>
  );
}
