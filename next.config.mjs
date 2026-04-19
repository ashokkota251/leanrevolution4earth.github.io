/** @type {import('next').NextConfig} */
// Static export for GitHub Pages.
//
// The default production deployment lives at:
//   https://ashokkota251.github.io/leanrevolution4earth.github.io/
// which requires a basePath of "/leanrevolution4earth.github.io".
//
// Override with NEXT_PUBLIC_BASE_PATH at build time when deploying to a
// custom domain (e.g. leanrevolution4earth.org) — set it to "" to disable.
// Keep in sync with lib/site.ts.
const isProd = process.env.NODE_ENV === "production"
const defaultBasePath = isProd ? "/leanrevolution4earth.github.io" : ""
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : defaultBasePath

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
