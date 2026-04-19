/** @type {import('next').NextConfig} */
// Static export. Deployed to GitHub Pages under the custom domain
// leanrevolution4earth.com, so basePath is empty by default.
//
// Override with NEXT_PUBLIC_BASE_PATH at build time when deploying
// without a custom domain (e.g. "/leanrevolution4earth" for a
// project-repo GitHub Pages URL). Keep in sync with lib/site.ts.
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
