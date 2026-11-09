# Smietz Beauty Hub

Marketing website for **Smietz Beauty Hub**, a women's beauty, skin and hair care salon in Mulund West, Mumbai.
It is a fully static site (11 pages plus a 404) where every appointment call-to-action goes to WhatsApp or the phone.

## Repository layout

| Folder | What it is |
|---|---|
| `/reference` | **Inputs only, never edited by the site.** `business-info.md` is the single source of business facts, `assets.md` lists the real Cloudinary assets, and `stitch-export/` holds the original design screens and `DESIGN.md` tokens. |
| `/site` | The Next.js application. Everything below happens here. |

## Tech stack

- Next.js 16 (App Router, React 19), **static export** (`output: "export"`)
- Tailwind CSS v4 (design tokens live in `site/app/globals.css` under `@theme`)
- TypeScript, ESLint, Zod (booking-form validation)
- Fonts via `next/font` (Playfair Display, Plus Jakarta Sans, Great Vibes)
- Cloudflare Workers static assets (Wrangler) for hosting

## Requirements

- **Node.js 22 or newer** (`site/.nvmrc` pins 22)
- npm 10+

## Local setup

```bash
cd site
npm ci            # install exactly what package-lock.json specifies
npm run dev       # http://localhost:3000
```

Optional: copy `site/.env.example` to `site/.env.local` to override `NEXT_PUBLIC_SITE_URL`.

## Scripts (run inside `/site`)

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build; writes the static site to `site/out` |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates route types, then runs `tsc --noEmit` |
| `npm run preview` | Builds, then serves `out/` with Wrangler locally at http://127.0.0.1:8787 (same headers and 404 behaviour as production) |
| `npm run deploy` | Builds, then `wrangler deploy` (needs `wrangler login`; normally Cloudflare's Git integration deploys instead) |

## Editing content

All business facts and copy are data, not hard-coded in components.

| File | Controls |
|---|---|
| `site/content/business.ts` | Name, phone, WhatsApp, Instagram, address, hours text, Google review link. `address.pending` and `hours.pending` mark owner-unconfirmed items. |
| `site/content/services.ts` | The 9 categories and every service, **names exactly as in `business-info.md`**. |
| `site/content/copy/services.ts` | One neutral description per service (`PENDING OWNER REVIEW`). |
| `site/content/copy/*.ts` | Page copy (home, about, other pages). |
| `site/content/faqs.ts` | The six FAQs (only facts from `business-info.md`). |
| `site/content/navigation.ts` | Header, drawer and footer links. |
| `site/content/gallery.ts` | Gallery items and filters. |
| `site/lib/whatsapp.ts` | The single WhatsApp link builder; every booking CTA uses it. |

## Images and swapping demo images for Cloudinary

Every image is registered in **`site/content/images.ts`**. Entries marked `demo: true` are placeholder pictures stored in `site/public/images/demo/`. Real photos are `demo: false`.

To replace a demo image with a real photo, edit that **one entry**:

1. Upload the photo to Cloudinary.
2. In `images.ts`, set `src` to the Cloudinary URL (`https://res.cloudinary.com/<cloud>/image/upload/v.../file.jpg`).
3. Update `alt`, `width`, `height`, and set `demo: false`. Optionally set `position` (CSS `object-position`) to keep faces in frame.

Cloudinary URLs are resized automatically (`f_auto,q_auto`, responsive widths) by `site/lib/image-loader.ts`. Local images are served as-is, so keep new local files reasonably small. The logo is `public/images/logo.jpg`; it is rendered by `components/layout/Logo.tsx`, which can be simplified when a transparent PNG/SVG exists.

## Deployment (Cloudflare Workers, static assets)

The build produces plain files in `site/out`. `site/wrangler.jsonc` serves them as an assets-only Worker named `smietz-web`, with `404.html` for unknown URLs. `site/public/_headers` adds security headers and caching.

Set up once in the Cloudflare dashboard (**Workers & Pages → Create application → GitHub**, pick this repo) with:

| Setting | Value |
|---|---|
| Worker / project name | `smietz-web` (must match `wrangler.jsonc`) |
| Root directory | `/site` |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy` |
| Variable `NODE_VERSION` | `22` |
| Variable `NEXT_PUBLIC_SITE_URL` | your public URL, no trailing slash |

Every push to `main` then builds and deploys. `NEXT_PUBLIC_SITE_URL` is read at **build** time, so changing it needs a new build.

## Pending owner confirmation

Nothing below may be published as fact until the owner confirms it (from `reference/business-info.md` §12).

- [ ] **Business address**: shown on the site, still marked `pending: true`
- [ ] **Opening hours**: currently "Call or WhatsApp us for timings"
- [ ] **Bridal & makeup package inclusions**
- [ ] **Laser hair reduction**: technology, areas, eligibility
- [ ] **Prices** (only if the owner wants them shown)
- [ ] **Genuine testimonials / Google reviews**, plus the real Google review link (`googleReviewUrl` in `business.ts`)
- [ ] **Service descriptions** in `content/copy/services.ts` (marked pending owner review)
- [ ] **Sushama's story details and milestones**
- [ ] **Demo images to replace with real photos**: every `demo: true` entry in `images.ts` (hero, services, gallery, bridal, Instagram strip, map). Several are Stitch screenshots with visible browser chrome.
- [ ] **Logo**: provide a transparent PNG or SVG (current JPG relies on a blend mode)
- [ ] **Custom domain**: then set `NEXT_PUBLIC_SITE_URL` and rebuild
