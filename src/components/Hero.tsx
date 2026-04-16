import { Phone, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-0 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop"
          alt="Beautiful landscaped backyard"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c08] via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-700/50 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
            <Star className="w-3.5 h-3.5 fill-green-400" />
            <span>Rated #1 in the Greater Metro Area</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
              Outdoor Space
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8 max-w-xl">
            From lush lawns to stunning patios — GreenEdge delivers premium landscaping
            that adds real value to your home. Trusted by 500+ homeowners since 2009.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-xl shadow-orange-900/40 hover:shadow-orange-900/60 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:5551234567"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now: (555) 123-4567
            </a>
          </div>

          {/* Social proof row */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9</span>
              <span>(127 reviews)</span>
            </div>
            <div className="w-px h-4 bg-zinc-600 hidden sm:block" />
            <span>✓ Licensed & Insured</span>
            <div className="w-px h-4 bg-zinc-600 hidden sm:block" />
            <span>✓ Free Estimates</span>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c08] to-transparent z-10" />
    </section>
  );
}
