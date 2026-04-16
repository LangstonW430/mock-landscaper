const steps = [
  {
    index: '01',
    title: 'An Initial Conversation',
    description:
      'We begin with a phone or in-person conversation to understand your property, your goals, and the scope of what you have in mind. There is no obligation at this stage — it simply helps us determine whether we are a good fit for each other.',
  },
  {
    index: '02',
    title: 'A Plan Built Around Your Property',
    description:
      'We conduct a detailed site assessment and prepare a written scope of work, design drawings where applicable, and a clear investment summary. You will know exactly what is planned and what it costs before we begin.',
  },
  {
    index: '03',
    title: 'Execution to a Consistent Standard',
    description:
      'Our crew arrives as scheduled and works to a standard we would be comfortable pointing to as our own. When the project is complete, we walk the property with you. We do not consider the job finished until you do.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#0f0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 pb-10 border-b border-[#2a2721]">
          <div>
            <p className="text-[#c5a264] text-xs tracking-[0.25em] uppercase mb-4">
              Our Approach
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#f0ebe2] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How We Work
            </h2>
          </div>
          <p className="text-[#6b6259] text-sm leading-relaxed max-w-xs lg:text-right">
            Every engagement follows the same deliberate process — regardless of project size.
          </p>
        </div>

        {/* Steps — horizontal rule layout, no numbered badge badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#2a2721]">
          {steps.map(({ index, title, description }) => (
            <div key={index} className="md:px-10 first:pl-0 last:pr-0 py-10 md:py-0">
              <p className="text-[#c5a264]/50 text-xs tracking-[0.25em] uppercase mb-5">
                {index}
              </p>
              <h3
                className="text-[#f0ebe2] text-xl mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {title}
              </h3>
              <p className="text-[#6b6259] text-sm leading-[1.8]">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10 border-t border-[#2a2721]">
          <p className="text-[#9a8f82] text-sm max-w-sm">
            Ready to begin? The first conversation is complimentary and comes with no expectation.
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#c5a264] hover:bg-[#d4bc8a] text-[#08080a] px-7 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-300"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
