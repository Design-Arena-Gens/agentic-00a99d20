import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";

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

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/inventory/${car.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.62)] shadow-[0_24px_50px_rgba(15,23,42,0.48)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <div className="relative aspect-[16/10]">
          <Image
            src={car.imageUrl}
            alt={`${car.year} ${car.make} ${car.model}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        {car.status && (
          <span className="absolute left-5 top-5 rounded-full border border-[rgba(255,209,102,0.32)] bg-[rgba(255,209,102,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28rem] text-[rgba(255,209,102,0.9)]">
            {car.status}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-sm uppercase tracking-[0.28rem] text-[rgba(148,163,184,0.65)]">
              {car.trim}
            </p>
          </div>
          <p className="text-lg font-semibold text-white">{formatCurrency(car.price)}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-[rgba(148,163,184,0.85)]">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.6)]">Mileage</span>
            <span className="font-medium text-white">{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.6)]">Power</span>
            <span className="font-medium text-white">{car.power}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.6)]">Fuel</span>
            <span className="font-medium text-white">{car.fuelType}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.6)]">Drivetrain</span>
            <span className="font-medium text-white">{car.drivetrain}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {car.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(148,163,184,0.12)] px-3 py-1 font-semibold uppercase tracking-[0.26rem] text-[rgba(203,213,225,0.92)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
