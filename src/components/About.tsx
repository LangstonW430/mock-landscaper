import { CheckCircle2, ArrowRight } from 'lucide-react';

const strengths = [
  'Family-owned and operated since 2009',
  'Fully licensed, bonded, and insured',
  'Satisfaction guaranteed on every job',
  'Transparent pricing — no hidden fees',
  'Responsive communication & on-time crews',
  'Locally rooted — we live here too',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0b100b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              <img
                src="https://images.unsplash.com/photo-1621873495914-a5c5f54d5b8a?w=900&q=80&auto=format&fit=crop"
                alt="GreenEdge landscaping crew at work"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-zinc-900 border border-zinc-700 rounded-2xl p-5 shadow-2xl shadow-black/60 max-w-[200px]">
              <p className="text-4xl font-extrabold text-orange-500 leading-none mb-1">15+</p>
              <p className="text-zinc-400 text-sm leading-tight">
                Years transforming yards across the region
              </p>
            </div>

            {/* Green accent line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-green-600 rounded-tl-2xl opacity-60" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              We Take Pride In Every{' '}
              <span className="text-green-400">Yard We Touch</span>
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed mb-5">
              GreenEdge was founded in 2009 by Marcus and Dana Rivera, a husband-and-wife team
              with a passion for beautiful outdoor spaces and a commitment to honest work.
              What started as two people and a truck has grown into a trusted crew of 12
              landscape professionals — but the family values haven't changed.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              We serve homeowners and businesses across the greater metro area, handling
              everything from weekly lawn care to complete outdoor redesigns. When you
              hire GreenEdge, you're not just getting a service — you're getting neighbors
              who care about doing the job right.
            </p>

            {/* Strengths checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
