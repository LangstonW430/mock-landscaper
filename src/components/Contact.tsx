import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const services = [
  "Lawn Care & Maintenance",
  "Landscape Design",
  "Hardscaping",
  "Mulching & Bed Preparation",
  "Seasonal Care",
  "Irrigation & Water Management",
  "Estate Grounds Management",
  "Other / Not Yet Determined",
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
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#2a2721] hover:border-[#352f28] focus:border-[#c5a264] text-[#f0ebe2] placeholder-[#6b6259] py-3 text-sm outline-none transition-colors duration-200";

  const labelClass =
    "block text-[#6b6259] text-[10px] tracking-[0.2em] uppercase mb-2";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 pb-10 border-b border-[#2a2721]">
          <div>
            <p className="text-[#c5a264] text-xs tracking-[0.25em] uppercase mb-4">
              Get in Touch
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#f0ebe2] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Begin Your Project
            </h2>
          </div>
          <p className="text-[#6b6259] text-sm leading-relaxed max-w-xs lg:text-right">
            We respond to all inquiries within one business day and are happy to
            discuss your property by phone if you prefer.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-14 lg:gap-20 items-start">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-8">
              <a href="tel:5551234567" className="flex items-start gap-5 group">
                <div className="w-8 h-8 border border-[#2a2721] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#c5a264]/50 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#c5a264]" />
                </div>
                <div>
                  <p className="text-[#6b6259] text-[10px] tracking-[0.2em] uppercase mb-1">
                    Telephone
                  </p>
                  <p
                    className="text-[#f0ebe2] text-base group-hover:text-[#c5a264] transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    (555) 123-4567
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@greenedgelandscaping.com"
                className="flex items-start gap-5 group"
              >
                <div className="w-8 h-8 border border-[#2a2721] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#c5a264]/50 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#c5a264]" />
                </div>
                <div>
                  <p className="text-[#6b6259] text-[10px] tracking-[0.2em] uppercase mb-1">
                    Email
                  </p>
                  <p className="text-[#9a8f82] text-sm group-hover:text-[#f0ebe2] transition-colors break-all">
                    hello@greenedgelandscaping.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-8 h-8 border border-[#2a2721] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6b6259]" />
                </div>
                <div>
                  <p className="text-[#6b6259] text-[10px] tracking-[0.2em] uppercase mb-1">
                    Service Area
                  </p>
                  <p className="text-[#9a8f82] text-sm">
                    Franklin, Oakdale &amp; Westfield Counties
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-8 h-8 border border-[#2a2721] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#6b6259]" />
                </div>
                <div>
                  <p className="text-[#6b6259] text-[10px] tracking-[0.2em] uppercase mb-1">
                    Office Hours
                  </p>
                  <p className="text-[#9a8f82] text-sm">
                    Monday – Friday, 8am – 5pm
                  </p>
                  <p className="text-[#6b6259] text-xs mt-0.5">
                    Saturday by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Thin divider + note */}
            <div className="border-t border-[#2a2721] pt-8">
              <p className="text-[#6b6259] text-xs leading-relaxed">
                We accept a limited number of new clients each season. Early
                inquiries are encouraged for spring and summer projects.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="py-16 border-t border-[#2a2721]">
                <div className="w-8 h-px bg-[#c5a264] mb-8" />
                <h3
                  className="text-2xl text-[#f0ebe2] mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Inquiry Received
                </h3>
                <p className="text-[#9a8f82] text-sm leading-relaxed max-w-sm">
                  Thank you, {form.name.split(" ")[0]}. We will review your
                  inquiry and be in touch within one business day to arrange a
                  conversation.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-px h-5 bg-[#c5a264]" />
                  <p className="text-[#6b6259] text-xs tracking-wide">
                    Prefer to call? (555) 123-4567
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 border-t border-[#2a2721] pt-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
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
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Area of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer bg-[#08080a]`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#141210]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Tell Us About Your Property
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Property size, current condition, what you have in mind..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex items-center gap-2.5 bg-[#c5a264] hover:bg-[#d4bc8a] disabled:opacity-50 disabled:cursor-not-allowed text-[#08080a] px-8 py-4 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5"
                >
                  {submitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-[#08080a]/30 border-t-[#08080a] rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
