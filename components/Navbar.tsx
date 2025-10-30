"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/financing", label: "Financing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-[rgba(13,17,23,0.8)] border-b border-[rgba(148,163,184,0.15)]">
      <nav className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[rgba(255,107,61,0.12)] transition-transform duration-300 group-hover:scale-105">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,209,102,0.8),transparent)] blur-xl opacity-70" />
            <span className="relative text-lg font-semibold text-white tracking-tight">VM</span>
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">Velocity Motors</span>
            <span className="text-xs uppercase tracking-[0.28rem] text-[rgba(148,163,184,0.8)]">
              Curated car marketplace
            </span>
          </div>
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-[rgba(148,163,184,0.15)] bg-[rgba(21,27,35,0.75)] px-2 py-1 shadow-[0_8px_24px_rgba(15,23,42,0.35)] lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors", 
                  active
                    ? "text-white"
                    : "text-[rgba(148,163,184,0.8)] hover:text-white"
                )}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-[rgba(255,107,61,0.15)] backdrop-blur-md border border-[rgba(255,107,61,0.35)] shadow-[0_10px_20px_rgba(255,107,61,0.25)]" />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/sell"
            className="rounded-full border border-[rgba(79,209,197,0.35)] bg-[rgba(79,209,197,0.12)] px-4 py-2 text-sm font-semibold text-[rgba(79,209,197,0.95)] transition-transform hover:-translate-y-0.5"
          >
            Sell with us
          </Link>
          <Link
            href="/inventory"
            className="btn btn-primary text-sm shadow-[0_14px_32px_rgba(255,107,61,0.35)]"
          >
            View inventory
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(148,163,184,0.2)] bg-[rgba(15,23,42,0.65)] text-white shadow-[0_8px_20px_rgba(15,23,42,0.45)] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-3xl border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.92)] p-4 shadow-[0_20px_40px_rgba(15,23,42,0.65)]">
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                      active
                        ? "bg-[rgba(255,107,61,0.15)] text-white"
                        : "text-[rgba(148,163,184,0.85)] hover:bg-[rgba(148,163,184,0.14)] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 grid gap-2">
              <Link
                href="/sell"
                className="rounded-2xl border border-[rgba(79,209,197,0.35)] bg-[rgba(79,209,197,0.12)] px-4 py-3 text-center text-sm font-semibold text-[rgba(79,209,197,0.95)]"
              >
                Sell with us
              </Link>
              <Link href="/inventory" className="btn btn-primary justify-center text-sm">
                View inventory
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
