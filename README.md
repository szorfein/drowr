# Drowr

A 'little' site/blog with various stack... heberged for free by Vercel.

- Blog contents, SEO, Title, Subtitle... are enhanced by AI with Hashnode.
- Newsletter from Hashnode. (Request has been send and added in your Hashnode Dashboard but I've never see any confirmation email yet...[#601](https://github.com/anmode/grabtern-frontend/issues/601))
- Comments use [Giscus](https://giscus.app/) so it use Github Discussions, Authentication.
- The UI use [material 3](https://https://m3.material.io/) recommendation.
- Add [substats](https://substats.swo.moe/) to get last followers.
- Inspired by best Astro template's like [foxy](https://github.com/oxygenna-themes/foxi-astro-theme), [astroplate](https://github.com/zeon-studio/astroplate/tree/multilingual) and [darkness](https://github.com/kpab/astro-darkness/tree/working) help to keep a high score in [PageSpeed Insight](https://pagespeed.web.dev/analysis/https-drowr-vercel-app/2ati6omvbl?form_factor=desktop).

Powered by:

<p align="left">
<a href="https://turborepo.dev/"><img src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/turborepo.svg" alt="turborepo" height="40" /></a>  <a href="https://astro.build"><img src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/astro.svg" alt="astrojs" height="40" /></a> <a href="https://hashnode.com/"><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress" alt="hashnode" height="40" /></a>  <a href="https://vercel.com/"><img src="https://github.com/devicons/devicon/raw/refs/heads/master/icons/vercel/vercel-original.svg" alt="vercel" height="40" /></a>  <a href="https://tailwindcss.com"><img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg" alt="tailwindcss" height="40" /></a> <br />
<img src="https://github.com/szorfein/drowr/blob/main/.github/assets/licid-cut.png?raw=true" height="80" weight="80" />
</p>

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: a [Astro.js](https://astro.build/) app
- `@drowr/licid`: Material components for Astro using tailwindcss and [IosevkaEtoile](https://github.com/be5invis/Iosevka) as font shared by both `web` and `docs` applications.
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

npm run build
npm run dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Configuration Options](https://turborepo.dev/docs/reference/configuration)
