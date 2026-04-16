const testimonials = [
  {
    name: 'Jennifer M.',
    detail: 'Oakdale — Lawn Maintenance, 3-year client',
    text: "We've worked with other landscaping companies over the years. GreenEdge is different in that they actually notice things before you have to ask — an emerging drainage issue, a planting that isn't thriving, a section that needs attention before the season turns. That level of attentiveness is rare.",
  },
  {
    name: 'David & Lisa R.',
    detail: 'Riverside Heights — Full Landscape Design & Hardscaping',
    text: "We gave them a blank slate — a full half-acre behind the house with no direction other than 'make it feel like it belongs here.' The result is better than anything we'd imagined. The stone terrace, the way the planting transitions from the lawn edge inward — it reads as intentional in a way we couldn't have specified ourselves.",
  },
  {
    name: 'Thomas K.',
    detail: 'Westfield — Estate Grounds Management',
    text: "I have a property that requires a consistent eye and a crew that can be trusted to work without supervision. GreenEdge has managed our grounds for four years. In that time, I've had to call them once — to let them know we'd be traveling and they had full access. That's the kind of relationship I was looking for.",
  },
  {
    name: 'Sandra P.',
    detail: 'Maplewood — Garden Bed Restoration & Seasonal Care',
    text: "The difference between GreenEdge and the company I used previously is evident in how they leave a job. Everything is edged precisely, the transitions between materials are clean, and they take the debris with them. My beds have been in better condition every spring since we made the switch.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 pb-10 border-b border-[#2a2721]">
          <p className="text-[#c5a264] text-xs tracking-[0.25em] uppercase mb-4">
            Client Testimonials
          </p>
          <h2
            className="text-4xl sm:text-5xl text-[#f0ebe2] leading-tight max-w-xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            In Their Own Words
          </h2>
        </div>

        {/* Testimonials — editorial two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#2a2721]">
          {/* Left column */}
          <div className="space-y-0 divide-y divide-[#2a2721] md:pr-12">
            {testimonials.slice(0, 2).map((t) => (
              <blockquote key={t.name} className="py-10 first:pt-0">
                <p className="text-[#9a8f82] text-[15px] leading-[1.8] mb-6 italic">
                  "{t.text}"
                </p>
                <footer>
                  <p
                    className="text-[#f0ebe2] text-sm font-medium"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#6b6259] text-xs mt-1 tracking-wide">{t.detail}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-0 divide-y divide-[#2a2721] md:pl-12">
            {testimonials.slice(2).map((t) => (
              <blockquote key={t.name} className="py-10 first:pt-0 md:first:pt-0">
                <p className="text-[#9a8f82] text-[15px] leading-[1.8] mb-6 italic">
                  "{t.text}"
                </p>
                <footer>
                  <p
                    className="text-[#f0ebe2] text-sm font-medium"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#6b6259] text-xs mt-1 tracking-wide">{t.detail}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-12 pt-10 border-t border-[#2a2721] text-center">
          <p className="text-[#6b6259] text-sm">
            Additional references available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
