import { Award, Users, ThumbsUp, MapPin } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '500+', label: 'Happy Homeowners' },
  { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate' },
  { icon: MapPin, value: '3', label: 'Counties Served' },
];

export default function TrustBar() {
  return (
    <section className="bg-green-900/20 border-y border-green-900/40 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
            >
              <div className="bg-green-800/50 border border-green-700/30 rounded-xl p-3 flex-shrink-0">
                <Icon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white tracking-tight leading-none mb-1">
                  {value}
                </p>
                <p className="text-sm text-zinc-400 font-medium leading-tight">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
