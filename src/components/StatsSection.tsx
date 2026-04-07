import Link from "next/link";

const stats = [
  { value: "9,526", label: "Total Tons Carbon" },
  { value: "125", label: "Total Tons Waste" },
  { value: "78,840", label: "Total Gal Water saved" },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-lr-blue text-white">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-lr-green mb-2">
          Our Results
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          We&apos;ve helped labs all over the greater Boston area.
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-5xl md:text-6xl font-bold text-lr-green">
                {stat.value}
              </p>
              <p className="mt-2 text-[15px] text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
        <Link
          href="/donate"
          className="inline-flex items-center justify-center rounded-lg bg-lr-green px-8 py-3.5 text-[15px] font-semibold text-lr-dark hover:bg-lr-green/90 transition-colors"
        >
          Donate now
        </Link>
      </div>
    </section>
  );
}
