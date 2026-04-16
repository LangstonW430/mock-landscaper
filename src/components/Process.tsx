import { MessageSquare, ClipboardList, Sparkles } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Request a Free Quote',
    description:
      'Fill out our quick form or give us a call. Tell us what you need and we\'ll schedule a free on-site consultation — usually within 48 hours.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'We Plan Your Project',
    description:
      'Our team walks your property, listens to your vision, and puts together a detailed plan and transparent quote. No surprises, no pressure.',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'We Transform Your Space',
    description:
      'Our crew gets to work — on time, on budget, and with the clean craftsmanship you\'d expect. When we\'re done, you\'ll love your yard.',
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-[#080c08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simple. Fast. Reliable.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Getting started takes 60 seconds. Here's what happens after you reach out.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-green-800/60 via-green-600/40 to-green-800/60 z-0" />

          {steps.map(({ step, icon: Icon, title, description }, idx) => (
            <div key={step} className="relative z-10 flex flex-col items-center text-center md:text-left md:items-start">
              {/* Step number + icon */}
              <div className="relative mb-6">
                <div className="bg-zinc-900 border-2 border-green-700/60 rounded-2xl p-4 shadow-lg shadow-green-950/40">
                  <Icon className="w-8 h-8 text-green-400" />
                </div>
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center leading-none">
                  {idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-zinc-400 text-[15px] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA below steps */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
          >
            Start Step 1 — Get My Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
