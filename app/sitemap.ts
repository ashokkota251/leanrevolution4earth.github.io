import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const base = SITE_URL.replace(/\/+$/, "")

  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
    priority: number
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/our-story/", changeFrequency: "monthly", priority: 0.9 },
    { path: "/our-pillars/", changeFrequency: "monthly", priority: 0.9 },
    { path: "/our-work/", changeFrequency: "monthly", priority: 0.9 },
    { path: "/sdg-alignment/", changeFrequency: "yearly", priority: 0.6 },
    { path: "/get-involved/", changeFrequency: "monthly", priority: 0.8 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
