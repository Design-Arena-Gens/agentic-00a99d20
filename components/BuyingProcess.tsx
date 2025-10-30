const steps = [
  {
    title: "Discover & Personalize",
    description:
      "Match with curated vehicles using our AI advisor or connect with a specialist for a guided selection based on your driving profile.",
    metrics: ["Live video tours", "Digital condition report", "1:1 build consultation"],
  },
  {
    title: "Secure Financing",
    description:
      "Access exclusive lender network rates, compare purchase vs. lease structures, and secure approval in under 12 hours.",
    metrics: ["APR as low as 2.49%", "Flexible 24-84 month terms", "Instant trade-in valuation"],
  },
  {
    title: "Concierge Delivery",
    description:
      "Our logistics team coordinates enclosed transport, home delivery walkthrough, and post-delivery support for your first 90 days.",
    metrics: ["Nationwide enclosed shipping", "White-glove detailing", "Complimentary service pickup"],
  },
];

export function BuyingProcess() {
  return (
    <section className="relative">
      <div className="container space-y-12">
        <div className="section-heading">
          <span>White-glove service</span>
          <h2>An elevated ownership journey end-to-end</h2>
          <p>
            Our concierge team manages every milestone—from sourcing rare allocations to arranging insured
            nationwide delivery—so you can focus on the thrill of the drive.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="glass-panel flex h-full flex-col gap-6 rounded-[24px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-6 shadow-[0_20px_45px_rgba(15,23,42,0.45)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(255,107,61,0.3)] bg-[rgba(255,107,61,0.12)] text-lg font-semibold text-[rgba(255,209,102,0.9)]">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[rgba(148,163,184,0.85)]">
                {step.description}
              </p>
              <ul className="space-y-2 text-sm text-[rgba(148,163,184,0.9)]">
                {step.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[rgba(79,209,197,0.85)]" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
