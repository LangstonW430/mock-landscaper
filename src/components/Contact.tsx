import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Lawn Care & Maintenance',
  'Landscape Design',
  'Hardscaping',
  'Mulching & Bed Prep',
  'Seasonal Cleanup',
  'Irrigation Systems',
  'Other / Not Sure',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission delay
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-zinc-800/70 border border-zinc-700 hover:border-zinc-600 focus:border-green-500 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-green-500/20';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0b100b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Request Your Free Quote
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours.
            Or just give us a call — we love talking to homeowners.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info card */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-5">
              <a
                href="tel:5551234567"
                className="flex items-start gap-4 group"
              >
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3 flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-0.5">Call Us Directly</p>
                  <p className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">(555) 123-4567</p>
                  <p className="text-zinc-500 text-xs mt-0.5">Fastest way to reach us</p>
                </div>
              </a>

              <div className="h-px bg-zinc-800" />

              <a href="mailto:hello@greenedgelandscaping.com" className="flex items-start gap-4 group">
                <div className="bg-green-800/30 border border-green-700/30 rounded-xl p-3 flex-shrink-0 group-hover:bg-green-800/50 transition-colors">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-0.5">Email Us</p>
                  <p className="text-white font-semibold group-hover:text-green-400 transition-colors">hello@greenedgelandscaping.com</p>
                  <p className="text-zinc-500 text-xs mt-0.5">We reply within 24 hours</p>
                </div>
              </a>

              <div className="h-px bg-zinc-800" />

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-0.5">Service Area</p>
                  <p className="text-white font-semibold">Greater Metro Area</p>
                  <p className="text-zinc-500 text-xs mt-0.5">Franklin, Oakdale & Westfield Counties</p>
                </div>
              </div>

              <div className="h-px bg-zinc-800" />

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-3 flex-shrink-0">
                  <Clock className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-0.5">Business Hours</p>
                  <p className="text-white font-semibold">Mon – Fri: 7am – 6pm</p>
                  <p className="text-zinc-400 text-sm">Sat: 8am – 2pm</p>
                  <p className="text-zinc-500 text-xs mt-1">Emergency service available</p>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="bg-green-900/20 border border-green-800/40 rounded-xl p-4">
              <p className="text-green-300 text-sm font-semibold mb-1.5">
                ✓ 100% Free, No-Obligation Quotes
              </p>
              <p className="text-green-200/60 text-xs leading-relaxed">
                We'll never pressure you into a service you don't need.
                Estimates are always free and usually delivered within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-900/40 rounded-full p-4 border border-green-700/40">
                      <CheckCircle2 className="w-12 h-12 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-base leading-relaxed max-w-sm mx-auto">
                    Thanks, {form.name.split(' ')[0]}! We received your request and
                    will reach out within 24 hours to schedule your free consultation.
                  </p>
                  <p className="text-orange-400 font-semibold mt-4">
                    Or call us now: (555) 123-4567
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs text-zinc-400 font-medium mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs text-zinc-400 font-medium mb-1.5 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs text-zinc-400 font-medium mb-1.5 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs text-zinc-400 font-medium mb-1.5 uppercase tracking-wide">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none`}
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-zinc-400 font-medium mb-1.5 uppercase tracking-wide">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your yard, what you're hoping for, any special considerations..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-900/30"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send My Request
                      </>
                    )}
                  </button>

                  <p className="text-zinc-600 text-xs text-center">
                    No spam. We only use your info to respond to your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
