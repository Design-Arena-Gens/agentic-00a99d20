import { BuyingProcess } from "@/components/BuyingProcess";
import { FeaturedInventory } from "@/components/FeaturedInventory";
import { Hero } from "@/components/Hero";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { ShowcaseStats } from "@/components/ShowcaseStats";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex flex-col gap-24 pb-24 pt-16">
        <Hero />
        <ShowcaseStats />
        <FeaturedInventory />
        <BuyingProcess />
        <Testimonials />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
