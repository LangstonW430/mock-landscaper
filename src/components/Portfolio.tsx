const projects = [
  {
    title: 'Hawthorne Residence',
    location: 'Oakdale, OH',
    scope: 'Full lawn restoration & garden design',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'The Mercer Property',
    location: 'Westfield, OH',
    scope: 'Native planting scheme & bed restructuring',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Ashford Estate',
    location: 'Franklin County, OH',
    scope: 'Natural stone terrace & hardscape installation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Keller Garden Court',
    location: 'Riverside Heights, OH',
    scope: 'Formal garden design & seasonal maintenance',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Elmwood Manor',
    location: 'Maplewood, OH',
    scope: 'Estate grounds management & irrigation',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Ridgeline Retreat',
    location: 'Franklin County, OH',
    scope: 'Landscape design & stone pathway installation',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#0f0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 pb-10 border-b border-[#2a2721]">
          <div>
            <p className="text-[#c5a264] text-xs tracking-[0.25em] uppercase mb-4">
              Selected Projects
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#f0ebe2] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Recent Work
            </h2>
          </div>
          <p className="text-[#6b6259] text-sm leading-relaxed max-w-xs lg:text-right">
            A selection of residential projects completed across the greater metro area.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2721]">
          {projects.map((project) => (
            <div key={project.title} className="group bg-[#0f0d0b] overflow-hidden">
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Caption */}
              <div className="px-5 py-5 border-t border-[#2a2721]">
                <p
                  className="text-[#f0ebe2] text-sm mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {project.title}
                </p>
                <p className="text-[#6b6259] text-xs tracking-wide mb-1">{project.location}</p>
                <p className="text-[#9a8f82] text-xs">{project.scope}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-[#6b6259] text-sm mb-6">
            Additional project photography available upon request during consultation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#c5a264]/40 hover:border-[#c5a264] text-[#c5a264] px-7 py-3.5 text-xs tracking-[0.12em] uppercase font-medium transition-all duration-300 hover:bg-[#c5a264]/5"
          >
            Schedule a Site Visit
          </a>
        </div>
      </div>
    </section>
  );
}
