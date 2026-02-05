# Changelog

## 0.17.4

- /posts can filtering post by tags
- New brand font, use [astro-font](https://github.com/rishi-raj-jain/astro-font) to reduce LCP.
- New last desktop on / and Hashnode request QueryPostsByTags
- Add a navigation bar by tags on /posts
- New Hero on /
- Add Seo, og, in /posts and /.
- New ShareIt component.
- Better card for post.
- Start layout, global styles.css from Licid.
- Configure dark, light theme with ThemeSwitcher in javascript.
- Add Logo, Header navigation bar
- Add fonts Iosevka Etoile, preload fonts with Astro, we'll see if it's a good choice
- Add/rewrite configs for biome, eslint, prettier. Base configurations from Turborepo are bad...
- Add Tailwindcss, a lot of pain to install it in monorepo
- Create a packages/licid
- Add a CMS on Astro: hashnode.com
- Add Astro using: npm create astro@latest apps/frontend

### Fixes

- Vercel fonts path
- ShareIt, correct the Linkedin site origin
- Outlined Card can be clicked
- Wrong color on OnVariantSurface for light theme.

### About Biome

Unfortunatelly, Biome doesn't format/support Astro/Html very well, so prettier is required to format code. Actually, Biome is most usefull as linter for Astro projects.
