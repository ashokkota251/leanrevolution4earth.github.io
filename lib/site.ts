// Site-wide constants. Deploy-time configurable via env vars.
//
// Default matches the current GitHub Pages deployment.
// Override at build time when switching hosts:
//
//   Custom domain (e.g. leanrevolution4earth.org):
//     NEXT_PUBLIC_SITE_URL=https://leanrevolution4earth.org
//     NEXT_PUBLIC_BASE_PATH=
//
//   GitHub Pages project repo under user:
//     NEXT_PUBLIC_SITE_URL=https://ashokkota251.github.io/leanrevolution4earth
//     NEXT_PUBLIC_BASE_PATH=/leanrevolution4earth
//
//   GitHub Pages org root (repo is <org>.github.io):
//     NEXT_PUBLIC_SITE_URL=https://leanrevolution4earth.github.io
//     NEXT_PUBLIC_BASE_PATH=
//
// Keep in sync with next.config.mjs.

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ashokkota251.github.io/leanrevolution4earth.github.io"

// Strip any trailing slash so we can safely append paths.
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "")
export const SITE_NAME = "Lean Revolution 4 Earth"
