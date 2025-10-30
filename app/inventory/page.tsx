"use client";

import { useState } from "react";
import { CarCard } from "@/components/CarCard";
import { InventoryFilters } from "@/components/InventoryFilters";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllCars } from "@/lib/cars";
import type { Car } from "@/data/cars";

const inventory = getAllCars();

export default function InventoryPage() {
  const [filtered, setFiltered] = useState<Car[]>(inventory);

  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex flex-col gap-16 pb-24 pt-16">
        <section>
          <div className="container space-y-10">
            <div className="section-heading">
              <span>Inventory</span>
              <h1 className="text-4xl font-semibold tracking-tight">Discover your next vehicle</h1>
              <p>
                Explore a curated inventory of electric, performance, and luxury vehicles. Every listing
                includes comprehensive specs, verified condition reports, and delivery concierge.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_2fr]">
              <InventoryFilters cars={inventory} onFilter={setFiltered} />
              <div className="grid gap-6">
                <div className="flex items-center justify-between text-sm text-[rgba(148,163,184,0.8)]">
                  <span>
                    Showing <span className="font-semibold text-white">{filtered.length}</span> vehicles
                  </span>
                  <span>Updated 4 hours ago</span>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {filtered.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
                {filtered.length === 0 && (
                  <div className="glass-panel rounded-[24px] border border-[rgba(255,107,61,0.25)] bg-[rgba(255,107,61,0.1)] p-8 text-center text-sm text-[rgba(255,209,102,0.9)]">
                    No vehicles match those filters yet. Adjust your selections or reach out to our concierge team for bespoke sourcing.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
