import { Phone, ArrowRight } from 'lucide-react';

interface CTABannerProps {
  headline?: string;
  sub?: string;
}

export default function CTABanner({
  headline = 'Ready to Transform Your Yard?',
  sub = 'Get a free, no-obligation quote from our team. We respond within 24 hours.',
}: CTABannerProps) {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=70&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/90 to-green-900/80" />
      </div>

      {/* Decorative green border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          {headline}
        </h2>
        <p className="text-green-200/80 text-lg mb-8 max-w-xl mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-orange-900/40 w-full sm:w-auto justify-center"
          >
            Get My Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:5551234567"
            className="flex items-center gap-2 border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
