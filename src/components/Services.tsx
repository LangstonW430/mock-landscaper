import { Scissors, PenTool, Layers, Leaf, Wind, Droplets, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Care & Maintenance',
    description:
      'Weekly or bi-weekly mowing, edging, blowing, and seasonal fertilization to keep your lawn thick, green, and healthy all year long.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80&auto=format&fit=crop',
    highlight: true,
  },
  {
    icon: PenTool,
    title: 'Landscape Design',
    description:
      'Custom planting plans, garden beds, and full outdoor redesigns tailored to your style, soil, and budget. We handle it all — plants, layout, and installation.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop',
    highlight: false,
  },
  {
    icon: Layers,
    title: 'Hardscaping',
    description:
      'Patios, retaining walls, walkways, and fire pit areas built to last. We use premium materials that complement your home and add serious curb appeal.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop',
    highlight: false,
  },
  {
    icon: Leaf,
    title: 'Mulching & Bed Prep',
    description:
      'Fresh mulch application protects your plants, retains moisture, and instantly improves the look of your landscaping beds. We refresh and edge for a crisp finish.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop',
    highlight: false,
  },
  {
    icon: Wind,
    title: 'Seasonal Cleanup',
    description:
      'Spring and fall cleanups including leaf removal, debris clearing, bed cleanup, and preparing your yard for the next season. On time, every time.',
    image: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?w=600&q=80&auto=format&fit=crop',
    highlight: false,
  },
  {
    icon: Droplets,
    title: 'Irrigation Systems',
    description:
      'Smart sprinkler installation and maintenance that keeps your lawn watered efficiently. Save money on water bills while keeping every zone healthy.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=600&q=80&auto=format&fit=crop',
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#080c08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From weekly lawn care to full outdoor transformations — we bring professional
            results to every job, big or small.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, image, highlight }) => (
            <div
              key={title}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${
                highlight
                  ? 'border-green-600/60 bg-green-950/40'
                  : 'border-zinc-800 bg-zinc-900/60'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                {/* Icon badge */}
                <div
                  className={`absolute top-4 left-4 rounded-xl p-2.5 ${
                    highlight ? 'bg-green-600' : 'bg-zinc-800/90 backdrop-blur-sm border border-zinc-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${highlight ? 'text-white' : 'text-green-400'}`} />
                </div>
                {highlight && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group/link ${
                    highlight ? 'text-green-400 hover:text-green-300' : 'text-orange-400 hover:text-orange-300'
                  }`}
                >
                  Get a Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
