# Changelog

## 0.6.0

- Add fonts Iosevka Etoile, we'll see if it's a good choice
- Add/rewrite configs for biome, eslint, prettier. Base configurations from Turborepo are bad...
- Add Tailwindcss, a lot of pain to install it in monorepo
- Create a packages/licid
- Add a CMS on Astro: hashnode.com
- Add Astro using: npm create astro@latest apps/frontend

### About Biome

Unfortunatelly, Biome doesn't format/support Astro/Html very well, so prettier is required to format code. Actually, Biome is most usefull as linter for Astro projects.
