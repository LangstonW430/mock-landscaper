import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0f0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=80&auto=format&fit=crop"
                alt="Professionally landscaped estate property"
                className="w-full h-[520px] object-cover saturate-[0.9]"
              />
            </div>

            {/* Year callout — thin, editorial, not a floating card */}
            <div className="absolute -bottom-px -right-px bg-[#0f0d0b] border-t border-l border-[#2a2721] px-6 py-4">
              <p
                className="text-[#c5a264] text-3xl font-light tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                2009
              </p>
              <p className="text-[#6b6259] text-xs tracking-wide mt-0.5">Founded</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-[#c5a264] text-xs tracking-[0.25em] uppercase mb-5">
              About GreenEdge
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#f0ebe2] leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Landscape Work That Holds Its Standard Over Time
            </h2>

            <div className="space-y-5 text-[#9a8f82] text-[15px] leading-relaxed mb-10">
              <p>
                GreenEdge was founded by Marcus and Dana Rivera in 2009 with a deliberate
                focus on a smaller number of clients and a higher standard of work.
                That approach has not changed. We take on a limited number of new
                engagements each season, which allows every property to receive
                the attention it deserves.
              </p>
              <p>
                Our team includes ISA-certified arborists, licensed landscape architects,
                and experienced hardscape installers who have spent their careers working
                on residential properties where quality is non-negotiable. We do not
                subcontract design work. Every plan that carries the GreenEdge name
                is reviewed by a principal before we break ground.
              </p>
              <p>
                We work primarily in Franklin, Oakdale, and Westfield Counties,
                and we maintain an active client roster that we genuinely take pride in.
                Referrals account for the majority of new business — which we consider
                the most honest measure of our work.
              </p>
            </div>

            {/* Thin rule + credential list */}
            <div className="border-t border-[#2a2721] pt-8 mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  'ISA-Certified Arborists',
                  'Licensed Landscape Architects',
                  'NALP Professional Member',
                  '$2M General Liability Coverage',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#c5a264] flex-shrink-0" />
                    <span className="text-[#9a8f82] text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-[#c5a264] hover:bg-[#d4bc8a] text-[#08080a] px-7 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-300"
            >
              Begin a Conversation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
