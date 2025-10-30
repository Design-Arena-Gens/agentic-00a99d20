import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const milestones = [
  {
    year: "2020",
    title: "Velocity Motors founded",
    description:
      "Launched as a digital-first platform focused on transparent electric vehicle purchasing experiences.",
  },
  {
    year: "2021",
    title: "Concierge delivery network",
    description:
      "Expanded to 20 metropolitan hubs with enclosed transport and trade-in pickup capabilities nationwide.",
  },
  {
    year: "2023",
    title: "Certified partner ecosystem",
    description:
      "Introduced rigorous 240-point inspection protocols and on-demand video inspections across 44 showrooms.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex flex-col gap-16 pb-24 pt-16">
        <section>
          <div className="container space-y-10">
            <div className="section-heading">
              <span>Our story</span>
              <h1 className="text-4xl font-semibold tracking-tight">Reimagining the car buying journey</h1>
              <p>
                Velocity Motors was created by enthusiasts and technology leaders who believed exotic and electric
                ownership should be as seamless as summoning a ride. Today, we deliver unparalleled transparency,
                bespoke sourcing, and concierge logistics nationwide.
              </p>
            </div>
            <div className="glass-panel grid gap-8 rounded-[32px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Driven by data, powered by people</h2>
                <p className="text-sm leading-relaxed text-[rgba(148,163,184,0.85)]">
                  Our curated marketplace blends machine learning with a human touch. Proprietary AI surfaces the
                  best inventory while experienced specialists handle inspections, financing, and delivery. The result:
                  a buying experience that's transparent, efficient, and exhilarating.
                </p>
              </div>
              <div className="rounded-[28px] border border-[rgba(79,209,197,0.35)] bg-[rgba(79,209,197,0.12)] p-6 text-sm text-[rgba(79,209,197,0.92)]">
                92% of clients return within 18 months through our TradeForward™ upgrade program. Our concierge team
                coordinates insurance, titling, and ongoing service pick-up across North America.
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="glass-panel flex h-full flex-col gap-4 rounded-[24px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-6"
                >
                  <span className="text-sm uppercase tracking-[0.3rem] text-[rgba(148,163,184,0.7)]">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                  <p className="text-sm text-[rgba(148,163,184,0.85)]">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
