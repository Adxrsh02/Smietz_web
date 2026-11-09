import type { Metadata, Viewport } from "next";
import { Great_Vibes, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { business } from "@/content/business";
import { FloatingWhatsApp, MobileActionBar } from "@/components/layout/ActionBars";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Decorative signature script. Used only for the "Sushama" signature on the About page.
const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "./" },
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
    <html lang="en-IN" className={`${playfair.variable} ${jakarta.variable} ${script.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-on-primary"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="pt-[72px] pb-24 outline-none md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
