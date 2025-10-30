import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllCars, getCarBySlug } from "@/lib/cars";

type CarDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllCars().map((car) => ({ slug: car.slug }));
}

export function generateMetadata({ params }: CarDetailPageProps): Metadata {
  const car = getCarBySlug(params.slug);
  if (!car) {
    return {};
  }

  const title = `${car.year} ${car.make} ${car.model} ${car.trim}`;

  return {
    title,
    description: car.description,
    openGraph: {
      title,
      description: car.description,
      images: [{ url: car.imageUrl }],
    },
  };
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatMileage(value: number) {
  return `${value.toLocaleString()} mi`;
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  const vehicle = car;

  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex flex-col gap-16 pb-24 pt-16">
        <section>
          <div className="container space-y-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <Link
                  href="/inventory"
                  className="inline-flex items-center gap-2 text-sm text-[rgba(148,163,184,0.75)] transition-colors hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                  </svg>
                  Back to inventory
                </Link>
                <span className="pill">{vehicle.status ?? "Certified"} listing</span>
                <h1 className="text-4xl font-semibold tracking-tight text-white">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h1>
                <p className="text-sm uppercase tracking-[0.3rem] text-[rgba(148,163,184,0.7)]">
                  {vehicle.trim}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-[rgba(148,163,184,0.85)]">
                <div className="rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.55)] px-6 py-4 text-center">
                  <p className="text-xs uppercase tracking-[0.26rem] text-[rgba(148,163,184,0.6)]">
                    Asking
                  </p>
                  <p className="text-xl font-semibold text-white">{formatCurrency(vehicle.price)}</p>
                </div>
                <div className="rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.55)] px-6 py-4 text-center">
                  <p className="text-xs uppercase tracking-[0.26rem] text-[rgba(148,163,184,0.6)]">
                    Mileage
                  </p>
                  <p className="text-xl font-semibold text-white">{formatMileage(vehicle.mileage)}</p>
                </div>
                <div className="rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.55)] px-6 py-4 text-center">
                  <p className="text-xs uppercase tracking-[0.26rem] text-[rgba(148,163,184,0.6)]">
                    Location
                  </p>
                  <p className="text-xl font-semibold text-white">{vehicle.location}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr]">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.65)]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={vehicle.imageUrl}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {vehicle.gallery.map((image) => (
                    <div
                      key={image}
                      className="overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.18)]"
                    >
                      <Image
                        src={image}
                        alt={`${vehicle.make} ${vehicle.model} gallery`}
                        width={640}
                        height={420}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="glass-panel grid gap-6 rounded-[24px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Vehicle overview</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[rgba(148,163,184,0.85)]">
                      {vehicle.description}
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-sm uppercase tracking-[0.28rem] text-[rgba(148,163,184,0.68)]">
                        Performance stats
                      </h3>
                      <ul className="space-y-2 text-sm text-[rgba(148,163,184,0.9)]">
                        <li className="flex justify-between">
                          <span>Power</span>
                          <span className="font-semibold text-white">{vehicle.power}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>0-60 mph</span>
                          <span className="font-semibold text-white">{vehicle.zeroToSixty}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Efficiency</span>
                          <span className="font-semibold text-white">{vehicle.efficiency}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Drivetrain</span>
                          <span className="font-semibold text-white">{vehicle.drivetrain}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm uppercase tracking-[0.28rem] text-[rgba(148,163,184,0.68)]">
                        Ownership notes
                      </h3>
                      <ul className="space-y-2 text-sm text-[rgba(148,163,184,0.9)]">
                        <li className="flex justify-between">
                          <span>Fuel type</span>
                          <span className="font-semibold text-white">{vehicle.fuelType}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Transmission</span>
                          <span className="font-semibold text-white">{vehicle.transmission}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Body style</span>
                          <span className="font-semibold text-white">{vehicle.bodyStyle}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Location</span>
                          <span className="font-semibold text-white">{vehicle.location}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="glass-panel rounded-[24px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-8">
                  <h3 className="text-lg font-semibold text-white">Highlights</h3>
                  <ul className="mt-4 grid gap-3 text-sm text-[rgba(148,163,184,0.9)] sm:grid-cols-2">
                    {vehicle.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[rgba(79,209,197,0.85)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-panel rounded-[24px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-8">
                  <h3 className="text-lg font-semibold text-white">Included features</h3>
                  <div className="mt-4 grid gap-2 text-sm text-[rgba(148,163,184,0.9)] md:grid-cols-2">
                    {vehicle.features.map((feature) => (
                      <span key={feature} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-4 w-4 text-[rgba(79,209,197,0.9)]"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="glass-panel sticky top-24 space-y-6 rounded-[26px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.5)]">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.28rem] text-[rgba(148,163,184,0.65)]">
                    Concierge support
                  </p>
                  <p className="text-2xl font-semibold text-white">Reserve this vehicle</p>
                  <p className="text-sm text-[rgba(148,163,184,0.85)]">
                    Secure it today with a fully refundable deposit and schedule a live video walkthrough with our specialists.
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(79,209,197,0.35)] bg-[rgba(79,209,197,0.12)] p-5 text-sm text-[rgba(79,209,197,0.95)]">
                  Delivery estimate: 5-7 business days nationwide with enclosed transport.
                </div>
                <div className="space-y-3">
                  <button className="btn btn-primary w-full justify-center text-sm font-semibold">
                    Place reservation
                  </button>
                  <button className="btn btn-secondary w-full justify-center text-sm font-semibold">
                    Schedule virtual tour
                  </button>
                  <p className="text-xs text-[rgba(148,163,184,0.7)]">
                    Need bespoke configurations? Email our specialists at concierge@velocitymotors.com or call
                    (800) 555-0119.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
