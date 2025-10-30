import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { href: "/inventory", label: "All Inventory" },
      { href: "/electric", label: "Electric Fleet" },
      { href: "/certified", label: "Certified Pre-Owned" },
      { href: "/sell", label: "Sell Your Vehicle" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/financing", label: "Financing" },
      { href: "/trade-in", label: "Trade-In valuation" },
      { href: "/warranty", label: "Warranty options" },
      { href: "/concierge", label: "Concierge delivery" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Velocity" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[rgba(148,163,184,0.12)] bg-[rgba(13,17,23,0.9)]">
      <div className="container grid gap-16 py-16 lg:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[rgba(255,107,61,0.12)]">
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,107,61,0.5),transparent)] blur-lg opacity-70" />
              <span className="relative text-xl font-semibold">VM</span>
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Velocity Motors</span>
              <span className="text-xs uppercase tracking-[0.32rem] text-[rgba(148,163,184,0.7)]">
                Elevated car buying
              </span>
            </div>
          </Link>
          <p className="max-w-lg text-[rgba(148,163,184,0.85)]">
            We curate performance, luxury, and electric vehicles from trusted partners nationwide.
            Every listing is inspected by our specialists, ensuring transparency and confidence
            from discovery to delivery.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-[rgba(148,163,184,0.7)]">
            <span>© {new Date().getFullYear()} Velocity Motors</span>
            <span>•</span>
            <Link href="/privacy">Privacy</Link>
            <span>•</span>
            <Link href="/terms">Terms</Link>
            <span>•</span>
            <Link href="/support">Support</Link>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm text-[rgba(229,231,235,0.9)]">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
