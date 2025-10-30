const stats = [
  {
    value: "$1.4B+",
    label: "Vehicle transactions",
    description: "Processed across electric, luxury, and performance segments since 2020.",
  },
  {
    value: "92%",
    label: "Repeat clients",
    description: "Drivers return for trade-up programs within 18 months on average.",
  },
  {
    value: "44",
    label: "Partner showrooms",
    description: "Certified inspection centers located across North America for in-person viewings.",
  },
];

export function ShowcaseStats() {
  return (
    <section>
      <div className="container glass-panel rounded-[32px] border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.55)] p-10 shadow-[0_30px_60px_rgba(15,23,42,0.5)]">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-3">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.3rem] text-[rgba(148,163,184,0.7)]">
                {stat.label}
              </p>
              <p className="text-sm text-[rgba(148,163,184,0.85)]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
