# ვაზი — ქართული ღვინის ფქვილი

Landing page for a Georgian grape pomace flour brand. Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| All site copy (Georgian) | `src/i18n/dictionaries/ka.ts` |
| Brand name, domain, email, phone, socials | `src/config/site.ts` |
| Photo slots (placeholders → real photos) | `src/content/media.ts` |
| Colours, fonts, animation CSS | `src/app/globals.css` |
| Page sections | `src/components/sections/*` |
| Contact form endpoint | `src/app/api/contact/route.ts` |

## Before launch — placeholders to replace

- **Brand name** `ვაზი / VAZI` is a working name → `src/config/site.ts`.
- **Domain** → set `NEXT_PUBLIC_SITE_URL` (used for canonical URLs, sitemap, Open Graph).
- **Email / phone / Instagram / Facebook** → `src/config/site.ts` (empty string hides an item).
- **Photos**: every image is an illustrated SVG placeholder. Put photos in `public/images/` and set `src` on the matching entry in `src/content/media.ts`.
- **Packaging**: the pouch in the product section is a drawn mockup (`src/components/art/Pouch.tsx`); replace it with a product photo once packaging exists.
- **Weight / packaging specs** show "დაზუსტდება" → `product.specs` in the dictionary.
- **Contact form** currently validates and logs submissions only. Connect an email provider or CRM in `src/app/api/contact/route.ts`.

Content rule: no health claims, certifications, lab data, nutrition values, prices, partners or testimonials unless they are confirmed.

## Adding English

1. Add `"en"` to `locales` in `src/i18n/config.ts` (and an entry in `localeMeta`).
2. Create `src/i18n/dictionaries/en.ts` exporting an object typed as `Dictionary`.
3. Register it in `src/i18n/get-dictionary.ts`.

Georgian stays at `/`; English is served at `/en`. hreflang alternates and the sitemap update automatically.
