import Image from "next/image";
import Link from "next/link";
import { getFeaturedCars } from "@/lib/cars";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function FeaturedInventory() {
  const featured = getFeaturedCars();

  return (
    <section className="relative">
      <div className="container space-y-12">
        <div className="section-heading">
          <span>Featured inventory</span>
          <h2>Hyper-curated selection updated weekly</h2>
          <p>
            Our team sources the rarest builds, launch editions, and low-mileage electric vehicles from
            partners you can trust. Every vehicle includes a digital condition report and delivery concierge.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel group relative overflow-hidden rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.6)] shadow-[0_30px_60px_rgba(15,23,42,0.5)]">
            {featured[0] && (
              <Link href={`/inventory/${featured[0].slug}`} className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured[0].imageUrl}
                    alt={`${featured[0].year} ${featured[0].make} ${featured[0].model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-6 top-6 rounded-full bg-[rgba(15,23,42,0.76)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32rem] text-[rgba(255,209,102,0.85)]">
                    Flagship
                  </span>
                </div>
                <div className="grid gap-6 p-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {featured[0].year} {featured[0].make} {featured[0].model}
                    </h3>
                    <span className="rounded-full border border-[rgba(255,107,61,0.35)] bg-[rgba(255,107,61,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28rem] text-[rgba(255,107,61,0.9)]">
                      {featured[0].trim}
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {["price", "zeroToSixty", "efficiency"].map((key) => (
                      <div key={key} className="rounded-2xl border border-[rgba(148,163,184,0.15)] bg-[rgba(15,23,42,0.55)] p-4">
                        <p className="text-xs uppercase tracking-[0.26rem] text-[rgba(148,163,184,0.65)]">
                          {key === "price" ? "Asking" : key === "zeroToSixty" ? "0-60" : "Range"}
                        </p>
                        <p className="mt-2 text-xl font-semibold">
                          {key === "price"
                            ? formatCurrency(featured[0].price)
                            : featured[0][key as "zeroToSixty" | "efficiency"]}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[rgba(148,163,184,0.85)]">
                    {featured[0].description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {featured[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(148,163,184,0.2)] bg-[rgba(148,163,184,0.12)] px-3 py-1 font-semibold uppercase tracking-[0.28rem] text-[rgba(203,213,225,0.9)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div className="grid gap-6">
            {featured.slice(1).map((car) => (
              <Link
                key={car.id}
                href={`/inventory/${car.slug}`}
                className="group glass-panel flex flex-col gap-4 rounded-[24px] border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.55)] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3rem] text-[rgba(148,163,184,0.65)]">
                      {car.status ?? "Certified"}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">
                      {car.year} {car.make} {car.model}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[rgba(255,209,102,0.32)] bg-[rgba(255,209,102,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26rem] text-[rgba(255,209,102,0.9)]">
                    {car.bodyStyle}
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.15)]">
                  <Image
                    src={car.imageUrl}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    width={640}
                    height={380}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[rgba(148,163,184,0.85)]">
                  <span className="font-semibold text-white">{formatCurrency(car.price)}</span>
                  <span>•</span>
                  <span>{car.mileage.toLocaleString()} mi</span>
                  <span>•</span>
                  <span>{car.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
