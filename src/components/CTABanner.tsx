import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  headline?: string;
  sub?: string;
  ctaText?: string;
}

export default function CTABanner({
  headline = 'Designed for Properties That Demand More',
  sub = 'We take on a limited number of new clients each season. Enquiries are welcome year-round.',
  ctaText = 'Request a Consultation',
}: CTABannerProps) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=70&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center saturate-[0.6]"
        />
        <div className="absolute inset-0 bg-[#0f0d0b]/92" />
      </div>

      {/* Top/bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#c5a264]/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c5a264]/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#c5a264] text-xs tracking-[0.25em] uppercase mb-5">
          GreenEdge Landscaping
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-[48px] text-[#f0ebe2] leading-tight tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {headline}
        </h2>
        <p className="text-[#9a8f82] text-base mb-10 max-w-md mx-auto leading-relaxed">
          {sub}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2.5 bg-[#c5a264] hover:bg-[#d4bc8a] text-[#08080a] px-8 py-4 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            {ctaText}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:5551234567"
            className="border border-[#f0ebe2]/20 hover:border-[#f0ebe2]/40 text-[#9a8f82] hover:text-[#f0ebe2] px-8 py-4 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
