# ZED Creatives — Brand & Design Studio

Static multi-page website for ZED Creatives (branding and graphic design studio). Serves the full marketing site plus a client area (orders, profile, portal preview) and a built-in admin editor that persists edits to `localStorage`.

## Pages

- Marketing: landing page, services, portfolio, pricing, FAQ, testimonials, blog, careers, contact, legal (privacy/terms)
- Commerce: shop, product, cart, checkout, orders, wishlist
- Account: login, profile
- Admin: `admin.html` (edits homepage sections, portfolio, services, products, pricing, FAQ, testimonials, contact, colours)
- Utility: `404.html`

## Deploy

Hosts on GitHub Pages (custom domain via `CNAME` = `zed.creatives.com`). Push the folder, then enable Pages → Deploy from branch. No build step.

## Notes

- All CSS and app logic are inlined per page; no external asset files.
- `admin.html`, `login.html`, and `testimonials.html` run in local-only mode — data lives in `localStorage` until a Supabase backend is wired up (the old `assets/supabase-config.js` / `assets/zed-db.js` references were removed because those files did not exist).
- The site favicon, Open Graph, and Twitter card tags are inline data/local assets.