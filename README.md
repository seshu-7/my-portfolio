# VSR Kamini — Portfolio

Next.js App Router · TypeScript · Tailwind CSS · next-themes · Framer Motion

Stark editorial aesthetic: sharp serif display, DM Mono for all data/labels,
amber (#E8650A) accent used only on live interaction states. No cards, no gradients,
no pill badges. Nav uses scrollIntoView — no anchor hrefs that break in iframes.

## Quick start

```bash
npm install
npm run dev        # localhost:3000
npm run build && npm start
```

> The build fetches DM Mono + Inter from Google Fonts at compile time.
> Needs internet access to fonts.googleapis.com (standard).

## Display font

`Editorial New` is not on Google Fonts. The layout.tsx has a commented-out
`localFont` block ready to activate. Drop the .woff2 files into `public/fonts/`:
  - EditorialNew-Regular.woff2
  - EditorialNew-Bold.woff2
  - EditorialNew-Italic.woff2
Then uncomment the block and add `${editorialNew.variable}` to the html className.

Until then the site falls back to Georgia — still good, just less distinctive.
Get Editorial New from: https://pangrampangram.com/products/editorial-new

## File map

```
app/
  layout.tsx        fonts, metadata, OG/Twitter tags, theme provider
  page.tsx          home — composes all sections
  globals.css       CSS custom property tokens, keyframes, base styles
components/
  hero.tsx          name, role, positioning statement, terminal mount
  terminal-typer.tsx  live "build → deploy" typing sequence (signature interaction)
  skills-marquee.tsx  continuous horizontal scroll of skills
  selected-work.tsx   accordion case studies (no routing — stays on one page)
  capabilities.tsx    two-column ruled list
  about.tsx           education sidebar + bio
  contact.tsx         italic serif headline + email CTA
  site-header.tsx     sticky header, scrollIntoView nav (no anchor hrefs)
  site-footer.tsx
  theme-provider.tsx  next-themes wrapper
  theme-toggle.tsx    light/dark button
  reveal.tsx          Framer Motion scroll reveal
lib/
  content.ts          single typed source of truth for all copy + metrics
  utils.ts            cn()
```

## Placeholders to fill

1. **`app/layout.tsx` line ~30** — replace `https://your-url.vercel.app` with your real
   Vercel URL after first deploy (makes OG/Twitter cards work).
2. **`lib/content.ts` — Anchor links** — replace `{{live_demo_url}}` and
   `{{github_repo_url}}` with real URLs. Both render visually disabled until set.
3. **`public/fonts/`** — add Editorial New .woff2 files and uncomment the localFont
   block in layout.tsx for the full typographic effect.
4. **`app/opengraph-image.png`** (1200×630) + **`app/twitter-image.png`** — social share images.
5. **`app/icon.png`** — favicon.
