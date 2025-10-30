import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const programs = [
  {
    title: "Velocity Reserve",
    description:
      "Tailored financing for performance and electric vehicles with balloon payment structures and flexible upgrade cycles.",
    highlights: ["APR from 2.49%", "Upgrade after 24 months", "90-day first payment deferral"],
  },
  {
    title: "Concierge Lease",
    description:
      "Guaranteed buy-back values, included maintenance, and nationwide delivery bundled into a single monthly payment.",
    highlights: ["Zero down options", "12k-18k annual mileage", "Enclosed delivery included"],
  },
  {
    title: "TradeForward™",
    description:
      "Apply your current vehicle equity instantly. Receive a firm offer within minutes and roll positive credit into your new build.",
    highlights: ["Instant offers", "Equity matched in 24h", "Concierge pick-up"],
  },
];

export default function FinancingPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex flex-col gap-16 pb-24 pt-16">
        <section>
          <div className="container space-y-10">
            <div className="section-heading">
              <span>Financing</span>
              <h1 className="text-4xl font-semibold tracking-tight">Flexible programs built for modern drivers</h1>
              <p>
                Whether you are building a collection or electrifying your daily commute, Velocity Finance unlocks
                concierge support, multi-lender approvals, and elevated ownership perks.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="glass-panel flex h-full flex-col gap-5 rounded-[24px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-6"
                >
                  <h2 className="text-xl font-semibold text-white">{program.title}</h2>
                  <p className="text-sm text-[rgba(148,163,184,0.85)]">{program.description}</p>
                  <ul className="space-y-3 text-sm text-[rgba(148,163,184,0.9)]">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[rgba(79,209,197,0.85)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="glass-panel grid gap-6 rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.55)] p-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Concierge credit guidance</h2>
                <p className="text-sm leading-relaxed text-[rgba(148,163,184,0.85)]">
                  Our finance advisors secure approvals with prime, near-prime, and corporate programs. Receive
                  tailored term sheets, compare lease vs. finance scenarios, and lock rates for 30 days while you
                  finalize your build.
                </p>
              </div>
              <div className="rounded-[24px] border border-[rgba(79,209,197,0.35)] bg-[rgba(79,209,197,0.12)] p-6 text-sm text-[rgba(79,209,197,0.92)]">
                Upload documents securely, track underwriting status, and e-sign contracts from any device. Concierge
                agents are available 7 days a week for live consultations.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
