"use client";

import { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";
import type { Car } from "@/data/cars";
import { getUniqueMakes, getUniqueBodyStyles, getPriceRange } from "@/lib/cars";

const priceRange = getPriceRange();

type Filters = {
  search: string;
  make: string;
  bodyStyle: string;
  maxPrice: number;
  tags: string[];
};

type InventoryFiltersProps = {
  cars: Car[];
  onFilter: (cars: Car[]) => void;
};

export function InventoryFilters({ cars, onFilter }: InventoryFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    make: "All",
    bodyStyle: "All",
    maxPrice: priceRange.max,
    tags: [],
  });

  const availableTags = useMemo(
    () => Array.from(new Set(cars.flatMap((car) => car.tags))).sort(),
    [cars]
  );

  const filteredCars = useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase();
    return cars.filter((car) => {
      const matchesSearch = normalizedSearch
        ? `${car.year} ${car.make} ${car.model} ${car.trim}`.toLowerCase().includes(normalizedSearch)
        : true;
      const matchesMake = filters.make === "All" || car.make === filters.make;
      const matchesBodyStyle = filters.bodyStyle === "All" || car.bodyStyle === filters.bodyStyle;
      const matchesPrice = car.price <= filters.maxPrice;
      const matchesTags =
        filters.tags.length === 0 || filters.tags.every((tag) => car.tags.includes(tag));
      return matchesSearch && matchesMake && matchesBodyStyle && matchesPrice && matchesTags;
    });
  }, [cars, filters]);

  useEffect(() => {
    onFilter(filteredCars);
  }, [filteredCars, onFilter]);

  function updateFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function toggleTag(tag: string) {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  }

  function resetFilters() {
    setFilters({
      search: "",
      make: "All",
      bodyStyle: "All",
      maxPrice: priceRange.max,
      tags: [],
    });
  }

  return (
    <aside className="glass-panel sticky top-24 space-y-6 rounded-[26px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.4)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28rem] text-[rgba(148,163,184,0.65)]">
            Refine inventory
          </p>
          <p className="text-2xl font-semibold">Smart filters</p>
        </div>
        <button
          type="button"
          onClick={resetFilters}
          className="text-sm font-semibold text-[rgba(79,209,197,0.9)] hover:text-[rgba(79,209,197,1)]"
        >
          Reset
        </button>
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
            Search
          </label>
          <div className="flex items-center gap-3 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.85)] px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4 text-[rgba(148,163,184,0.7)]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0a7.5 7.5 0 1 0-10.607-10.607 7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="search"
              placeholder="Search by make, model, trim"
              value={filters.search}
              onChange={(event) => updateFilter("search", event.target.value)}
              className="h-10 flex-1 border-none bg-transparent text-sm text-white outline-none placeholder:text-[rgba(148,163,184,0.6)]"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
              Make
            </label>
            <select
              value={filters.make}
              onChange={(event) => updateFilter("make", event.target.value)}
              className="w-full rounded-full border border-[rgba(148,163,184,0.2)] bg-[rgba(15,23,42,0.8)] px-4 py-3 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
            >
              <option value="All">All makes</option>
              {getUniqueMakes().map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
              Body style
            </label>
            <select
              value={filters.bodyStyle}
              onChange={(event) => updateFilter("bodyStyle", event.target.value)}
              className="w-full rounded-full border border-[rgba(148,163,184,0.2)] bg-[rgba(15,23,42,0.8)] px-4 py-3 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
            >
              <option value="All">All styles</option>
              {getUniqueBodyStyles().map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
            Budget ({new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(filters.maxPrice)})
          </label>
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={1000}
            value={filters.maxPrice}
            onChange={(event) => updateFilter("maxPrice", Number(event.target.value))}
            className="w-full accent-[rgba(255,107,61,0.9)]"
          />
          <div className="flex justify-between text-xs text-[rgba(148,163,184,0.65)]">
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(priceRange.min)}
            </span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(priceRange.max)}
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
            Tags
          </p>
          <div className="flex flex-wrap gap-3">
            {availableTags.map((tag) => {
              const active = filters.tags.includes(tag);
              return (
                <button
                  type="button"
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={clsx(
                    "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.26rem] transition-colors",
                    active
                      ? "border-[rgba(79,209,197,0.45)] bg-[rgba(79,209,197,0.18)] text-[rgba(79,209,197,0.95)]"
                      : "border-[rgba(148,163,184,0.2)] bg-[rgba(148,163,184,0.12)] text-[rgba(203,213,225,0.85)] hover:border-[rgba(79,209,197,0.3)] hover:text-[rgba(79,209,197,0.9)]"
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
        <div className="rounded-2xl border border-[rgba(148,163,184,0.15)] bg-[rgba(79,209,197,0.1)] p-4 text-sm text-[rgba(148,163,184,0.9)]">
          Viewing <span className="font-semibold text-white">{filteredCars.length}</span> out of
          <span className="font-semibold text-white"> {cars.length}</span> vehicles
        </div>
      </div>
    </aside>
  );
}
