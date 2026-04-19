/** @type {import('next').NextConfig} */
// Static export. To switch deployments, set NEXT_PUBLIC_BASE_PATH at build time
// (leave empty for custom domain or org-root pages; set to "/repo-name" for a
// GitHub Pages project repo). Kept in sync with lib/site.ts.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

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
