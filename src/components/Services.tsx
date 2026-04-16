import { ArrowRight } from 'lucide-react';

const services = [
  {
    index: '01',
    title: 'Lawn Care & Maintenance',
    description:
      'Precision mowing, edging, aeration, and seasonal fertilisation programmes tailored to your soil profile and turf variety. Your grounds are maintained to the same standard every visit.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80&auto=format&fit=crop',
  },
  {
    index: '02',
    title: 'Landscape Design',
    description:
      'Site analysis, conceptual design, and full installation of curated planting schemes. We work with your architecture and existing conditions to create environments that evolve beautifully over time.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop',
  },
  {
    index: '03',
    title: 'Hardscaping',
    description:
      'Natural stone terraces, bluestone walkways, retaining structures, and fire features built with the same materials and joinery standards found in high-end residential construction.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop',
  },
  {
    index: '04',
    title: 'Mulching & Bed Preparation',
    description:
      'Soil amendment, weed suppression, and premium hardwood mulch application that protects plant health and presents your beds with a clean, intentional finish year-round.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop',
  },
  {
    index: '05',
    title: 'Seasonal Care',
    description:
      'Spring and autumn programmes covering debris clearance, bed restoration, pruning, winterisation, and preparation for the next growing season. Scheduled and reliable.',
    image: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?w=600&q=80&auto=format&fit=crop',
  },
  {
    index: '06',
    title: 'Irrigation & Water Management',
    description:
      'Smart-controller irrigation design and installation that delivers the right amount of water to each zone. Reduces waste, promotes deep root development, and extends plant life.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format&fit=crop&crop=center',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 pb-10 border-b border-[#2a2721]">
          <div>
            <p className="text-[#c5a264] text-xs tracking-[0.25em] uppercase mb-4">
              Services
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#f0ebe2] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What We Do
            </h2>
          </div>
          <p className="text-[#6b6259] text-sm leading-relaxed max-w-xs lg:text-right">
            Every engagement begins with understanding your property, your use,
            and the standard of finish you expect.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2721]">
          {services.map(({ index, title, description, image }) => (
            <div
              key={title}
              className="group relative bg-[#08080a] overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/20 to-transparent" />

                {/* Index number */}
                <span className="absolute top-4 left-5 text-[#c5a264]/60 text-xs tracking-[0.2em] font-medium">
                  {index}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 pb-7">
                <h3
                  className="text-[#f0ebe2] text-lg mb-3 group-hover:text-[#c5a264] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {title}
                </h3>
                <p className="text-[#6b6259] text-sm leading-relaxed mb-5">
                  {description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[#c5a264] text-xs tracking-[0.15em] uppercase font-medium hover:gap-3 transition-all duration-200"
                >
                  Enquire
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
