import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="blurred-circle -left-32 top-1/3" />
      <div className="blurred-circle secondary -right-24 top-0" />
      <div className="container relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <span className="pill">Award-winning car marketplace</span>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Elevate your next drive with curated performance & electric vehicles
          </h1>
          <p className="text-lg text-[rgba(148,163,184,0.9)]">
            Velocity Motors brings transparency, concierge service, and immersive digital buying to
            the automotive experience. Browse limited-run releases, configure financing, and take
            delivery anywhere in North America.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/inventory" className="btn btn-primary">
              Browse 120+ listings
            </Link>
            <Link href="/sell" className="btn btn-secondary">
              List your vehicle
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "Avg. delivery", value: "5 days" },
              { label: "Customer rating", value: "4.98" },
              { label: "Cities served", value: "44" },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-4">
                <span className="text-sm uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.7)]">
                  {stat.label}
                </span>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate hidden overflow-hidden rounded-[32px] border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.68)] shadow-[0_25px_60px_rgba(15,23,42,0.65)] lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,61,0.35),transparent_55%)]" />
          <Image
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80"
            alt="Velocity Motors flagship showroom"
            width={1200}
            height={900}
            className="h-full w-full object-cover object-center"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-[rgba(148,163,184,0.2)] bg-[rgba(13,17,23,0.78)]/90 p-4 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.32rem] text-[rgba(148,163,184,0.7)]">
                Delivered this week
              </p>
              <p className="mt-1 text-lg font-semibold">2024 Lucid Air Touring</p>
            </div>
            <span className="rounded-full bg-[rgba(255,107,61,0.2)] px-4 py-1 text-sm font-semibold text-[rgba(255,209,102,0.95)]">
              Owner rating 5.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
