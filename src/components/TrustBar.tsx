// Credentials strip — quality signals, not quantity counts
const credentials = [
  { value: 'NALP Member', detail: 'National Assoc. of Landscape Professionals' },
  { value: 'ISA Certified', detail: 'Arborists on every design project' },
  { value: 'Est. 2009', detail: 'Fifteen years of estate-level work' },
  { value: 'Fully Insured', detail: '$2M liability · Workers\' comp on every crew' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[#2a2721] bg-[#0f0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#2a2721]">
          {credentials.map(({ value, detail }) => (
            <div
              key={value}
              className="px-6 py-7 sm:px-8 sm:py-8 flex flex-col gap-1.5"
            >
              <p
                className="text-[#f0ebe2] text-base font-semibold tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {value}
              </p>
              <p className="text-[#6b6259] text-xs leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
