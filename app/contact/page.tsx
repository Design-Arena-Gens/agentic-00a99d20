import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const offices = [
  {
    city: "Los Angeles",
    address: "8600 Wilshire Blvd, Beverly Hills, CA",
    phone: "(424) 555-0110",
    email: "la@velocitymotors.com",
  },
  {
    city: "New York",
    address: "120 Hudson Yards, New York, NY",
    phone: "(212) 555-0144",
    email: "nyc@velocitymotors.com",
  },
  {
    city: "Austin",
    address: "901 2nd St, Austin, TX",
    phone: "(512) 555-0132",
    email: "atx@velocitymotors.com",
  },
];

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex flex-col gap-16 pb-24 pt-16">
        <section>
          <div className="container space-y-10">
            <div className="section-heading">
              <span>Contact</span>
              <h1 className="text-4xl font-semibold tracking-tight">Connect with our ownership advisors</h1>
              <p>
                Email, call, or schedule a video consultation with our concierge team. We operate across time zones to
                support vehicle discovery, financing, and delivery logistics.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <form className="glass-panel grid gap-4 rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.55)] p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      className="h-12 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.9)] px-4 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      className="h-12 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.9)] px-4 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="h-12 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.9)] px-4 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="h-12 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.9)] px-4 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
                    Interested vehicle or service
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 2024 Lucid Air Touring"
                    className="h-12 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.9)] px-4 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.24rem] text-[rgba(148,163,184,0.65)]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="rounded-3xl border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.9)] px-4 py-3 text-sm text-white focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
                  />
                </div>
                <button type="submit" className="btn btn-primary justify-center">
                  Submit inquiry
                </button>
                <p className="text-xs text-[rgba(148,163,184,0.7)]">
                  Our concierge team responds within 2 hours during business days. For immediate assistance call
                  (800) 555-0119.
                </p>
              </form>
              <div className="glass-panel space-y-6 rounded-[28px] border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.55)] p-8">
                <h2 className="text-xl font-semibold text-white">Flagship lounges</h2>
                <p className="text-sm text-[rgba(148,163,184,0.85)]">
                  Book a private viewing at one of our flagship lounges. Personalized appointments include vehicle walk-throughs,
                  financing consultations, and track experiences where available.
                </p>
                <ul className="space-y-4 text-sm text-[rgba(148,163,184,0.9)]">
                  {offices.map((office) => (
                    <li key={office.city} className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.28rem] text-[rgba(148,163,184,0.7)]">
                        {office.city}
                      </p>
                      <p>{office.address}</p>
                      <p>{office.phone}</p>
                      <p>{office.email}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
