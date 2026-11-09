/**
 * Public site URL used for canonical links, the sitemap and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL at build time; the default is a placeholder workers.dev
 * address. Replace it (or set the variable) when a custom domain is attached.
 */
const DEFAULT_URL = "https://smietz-web.workers.dev";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL).replace(/\/+$/, "");
