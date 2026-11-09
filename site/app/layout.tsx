import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { business } from "@/content/business";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: `${business.name} is a women's beauty destination in ${business.location.area}, ${business.location.city}: hair care, skin care, facials, bridal beauty and advanced skin care. ${business.experience.label}.`,
};

export const viewport: Viewport = {
  themeColor: "#fcf9f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
