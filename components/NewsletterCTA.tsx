export function NewsletterCTA() {
  return (
    <section className="pb-24">
      <div className="container glass-panel grid gap-8 rounded-[32px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.6)] p-10 shadow-[0_24px_54px_rgba(15,23,42,0.45)] md:grid-cols-[2fr_3fr] md:items-center">
        <div className="space-y-4">
          <span className="pill">Launch allocations & private drops</span>
          <h2 className="text-3xl font-semibold tracking-tight">Stay ahead of exclusive releases</h2>
          <p className="text-sm leading-relaxed text-[rgba(148,163,184,0.85)]">
            Join our insider list to receive embargoed launch invites, curated buyer guides, and
            trade-in incentives before they are public.
          </p>
        </div>
        <form className="grid gap-4 sm:grid-cols-[1.8fr_1fr]">
          <input
            type="email"
            required
            placeholder="Email address"
            className="h-12 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,15,24,0.9)] px-5 text-sm text-white placeholder:text-[rgba(148,163,184,0.5)] focus:border-[rgba(79,209,197,0.55)] focus:outline-none"
          />
          <button
            type="submit"
            className="btn btn-primary h-12 justify-center text-sm font-semibold"
          >
            Get early access
          </button>
          <p className="sm:col-span-2 text-xs text-[rgba(148,163,184,0.7)]">
            We respect your inbox. Expect 1-2 curated drops per month. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
