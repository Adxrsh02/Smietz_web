import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/hair-care",
  "/services/skin-care-facials",
  "/services/advanced-skin-care",
  "/services/bridal-makeup",
  "/gallery",
  "/testimonials",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
