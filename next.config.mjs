/** @type {import('next').NextConfig} */
// Supports TWO deployment targets:
//   1) Vercel (default) — full Next.js with API routes, dynamic rendering, server-only env vars.
//      This is required for /api/donate and /api/webhooks/zoho to work.
//   2) GitHub Pages — static HTML export. API routes won't work here.
//      Enable with NEXT_STATIC_EXPORT=true during build.
//
// basePath only matters when deploying to a GitHub Pages project-repo URL
// (not needed under the custom domain). Keep in sync with lib/site.ts.
const basePath     = process.env.NEXT_PUBLIC_BASE_PATH || ""
const staticExport = process.env.NEXT_STATIC_EXPORT === "true"

const nextConfig = {
  ...(staticExport && { output: "export" }),
  trailingSlash: true,
  basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: staticExport, // Vercel can optimise images; static export cannot
  },
}

export default nextConfig
