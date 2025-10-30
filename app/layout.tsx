import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Velocity Motors | Premium Car Marketplace",
    template: "%s | Velocity Motors",
  },
  description:
    "Discover your next car with Velocity Motors. Browse curated listings, compare trims, and explore financing options on a modern car marketplace platform.",
  metadataBase: new URL("https://agentic-00a99d20.vercel.app"),
  openGraph: {
    title: "Velocity Motors | Premium Car Marketplace",
    description:
      "Discover your next car with Velocity Motors. Browse curated listings, compare trims, and explore financing options on a modern car marketplace platform.",
    type: "website",
    url: "https://agentic-00a99d20.vercel.app",
    siteName: "Velocity Motors",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Velocity Motors showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Motors | Premium Car Marketplace",
    description:
      "Discover your next car with Velocity Motors. Browse curated listings, compare trims, and explore financing options on a modern car marketplace platform.",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
