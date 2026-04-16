import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer M.',
    location: 'Oakdale, OH',
    rating: 5,
    avatar: 'JM',
    avatarColor: 'bg-blue-700',
    service: 'Lawn Care & Seasonal Cleanup',
    text: "GreenEdge has been maintaining our yard for three years now. Our lawn is the envy of the neighborhood. Marcus's crew shows up on time every single week, and they never cut corners. Worth every penny.",
    project: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=70&auto=format&fit=crop',
  },
  {
    name: 'David & Lisa R.',
    location: 'Riverside Heights, OH',
    rating: 5,
    avatar: 'DR',
    avatarColor: 'bg-purple-700',
    service: 'Landscape Design & Hardscaping',
    text: "We had a blank slate backyard and absolutely no idea what to do with it. GreenEdge designed and built a gorgeous patio with a fire pit area and native plant beds. The whole project took two weeks and it came out even better than the renderings.",
    project: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=70&auto=format&fit=crop',
  },
  {
    name: 'Tom K.',
    location: 'Westfield, OH',
    rating: 5,
    avatar: 'TK',
    avatarColor: 'bg-green-700',
    service: 'Full Yard Transformation',
    text: "Hired GreenEdge after two other companies gave me the runaround. They came out for a free estimate the next day, gave me a clear quote, and started within the week. The before and after difference is unreal. Highly recommend.",
    project: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=70&auto=format&fit=crop',
  },
  {
    name: 'Sandra P.',
    location: 'Maplewood, OH',
    rating: 5,
    avatar: 'SP',
    avatarColor: 'bg-rose-700',
    service: 'Mulching & Bed Restoration',
    text: "My garden beds were a mess after a rough winter. GreenEdge came in, cleaned everything out, edged the beds perfectly, and laid fresh mulch. It looks amazing and they were so easy to work with. Already booked them for spring cleanup.",
    project: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&q=70&auto=format&fit=crop',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-orange-400 text-orange-400' : 'text-zinc-600'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0b100b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real reviews from real homeowners. Over 127 five-star ratings on Google.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 group relative overflow-hidden"
            >
              {/* Quote mark background */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-zinc-800 group-hover:text-zinc-700 transition-colors" />

              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={t.rating} />
                <span className="text-xs text-zinc-500 font-medium uppercase tracking-wide border border-zinc-700 px-2.5 py-1 rounded-full">
                  {t.service}
                </span>
              </div>

              {/* Review text */}
              <p className="text-zinc-300 text-[15px] leading-relaxed mb-5">
                "{t.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`${t.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.location}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-zinc-700 flex-shrink-0">
                  <img
                    src={t.project}
                    alt="Project result"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <div className="w-px h-8 bg-zinc-700" />
            <div className="text-center">
              <p className="text-white font-bold text-lg leading-none">4.9 / 5</p>
              <p className="text-zinc-500 text-xs mt-0.5">127 Google Reviews</p>
            </div>
            <div className="w-px h-8 bg-zinc-700" />
            <svg viewBox="0 0 40 40" className="w-8 h-8 flex-shrink-0" aria-label="Google">
              <path fill="#4285F4" d="M20 16.36v4.91h8.2c-.33 2.06-2.43 6.03-8.2 6.03-4.94 0-8.97-4.09-8.97-9.13s4.03-9.13 8.97-9.13c2.81 0 4.69 1.2 5.77 2.23l3.93-3.79C26.87 4.5 23.65 3 20 3 11.72 3 5 9.72 5 18s6.72 15 15 15c8.66 0 14.4-6.08 14.4-14.65 0-.98-.1-1.73-.24-2.48L20 16.36z" />
              <path fill="#34A853" d="M5 18c0 2.48.62 4.82 1.71 6.86l4.07-3.16A8.96 8.96 0 0111.03 18l-4.11-3.2A14.88 14.88 0 005 18z" />
              <path fill="#FBBC05" d="M20 9.87c2.28 0 3.82.99 4.7 1.82l3.47-3.38C25.87 6.08 23.16 5 20 5c-5.34 0-9.89 3.06-12.22 7.5l4.11 3.2C13 12.03 16.21 9.87 20 9.87z" />
              <path fill="#EA4335" d="M20 26.13c-3.79 0-7-2.16-8.11-5.7l-4.07 3.16C10.11 27.94 14.66 31 20 31c3.02 0 5.91-.99 8.06-2.84l-3.85-2.98A8.75 8.75 0 0120 26.13z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
