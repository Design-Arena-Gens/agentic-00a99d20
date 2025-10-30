const testimonials = [
  {
    quote:
      "Velocity Motors transformed our EV buying experience. The digital concierge & same-week delivery made it effortless.",
    name: "Jasmine Carter",
    role: "Model S Plaid Owner, New York",
  },
  {
    quote:
      "The curated selection saved me months of searching. Transparent specs, financing, and live video tours sealed the deal.",
    name: "Noah Allen",
    role: "Porsche Taycan GTS Owner, Los Angeles",
  },
  {
    quote:
      "Concierge pickup of my trade-in plus nationwide delivery of the R1S was unbelievably smooth. Five-star service.",
    name: "Emilia Rojas",
    role: "Rivian R1S Owner, Denver",
  },
];

export function Testimonials() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <span>Client stories</span>
          <h2>Thousands of premium deliveries nationwide</h2>
          <p>
            From hypercars to daily electrics, our ownership advisors handle every step including remote
            inspections, financing, and concierge delivery logistics.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="glass-panel flex h-full flex-col justify-between rounded-[24px] border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.55)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.45)]"
            >
              <blockquote className="text-lg leading-relaxed text-[rgba(226,232,240,0.95)]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-[rgba(148,163,184,0.8)]">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
