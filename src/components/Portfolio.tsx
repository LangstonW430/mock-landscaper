import { useRef, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  label: string;
  tag: string;
  before: string;
  after: string;
}

const projects: Project[] = [
  {
    label: 'Backyard Lawn Restoration',
    tag: 'Lawn Care',
    before: 'https://images.unsplash.com/photo-1580100586938-02822d99c4a8?w=800&q=80&auto=format&fit=crop',
    after:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
  },
  {
    label: 'Garden Bed Redesign',
    tag: 'Landscape Design',
    before: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop',
    after:  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop',
  },
  {
    label: 'Patio & Hardscape Install',
    tag: 'Hardscaping',
    before: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80&auto=format&fit=crop',
    after:  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
  },
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clamped = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPosition(clamped);
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePosition(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const onMouseUp = () => { dragging.current = false; };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    updatePosition(e.touches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (dragging.current) updatePosition(e.touches[0].clientX);
  };
  const onTouchEnd = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="relative h-64 sm:h-72 overflow-hidden rounded-xl cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Before image — full width, background */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* After image — clipped left side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={after}
          alt="After"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-9 h-9 shadow-xl flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide pointer-events-none">
        After
      </span>

      {/* Drag hint (fades on interaction) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white/80 text-xs px-3 py-1 rounded-full pointer-events-none whitespace-nowrap">
        ← Drag to compare →
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#080c08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Before & After Results
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Drag the slider to see the real transformation. These are actual GreenEdge projects.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.label} className="group">
              <BeforeAfterSlider before={project.before} after={project.after} />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <h3 className="text-white font-bold mt-0.5">{project.label}</h3>
                </div>
                <a
                  href="#contact"
                  className="text-orange-400 hover:text-orange-300 text-sm font-semibold flex items-center gap-1 transition-colors"
                >
                  Get Similar
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-zinc-400 mb-4">
            Ready to see your yard on this list?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-900/40"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
