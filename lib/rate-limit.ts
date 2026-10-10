// Simple in-memory per-IP rate limiter. Fine for a single-instance Vercel function.
// ponytail: fine until you're multi-instance; upgrade to Vercel KV / Upstash if abuse becomes real.

type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

// Periodically purge expired buckets so the map doesn't grow unboundedly.
function sweep(now: number) {
  if (buckets.size < 1000) return
  for (const [k, b] of buckets) if (b.resetAt < now) buckets.delete(k)
}

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): { ok: true; remaining: number } | { ok: false; retryAfterSec: number } {
  const now = Date.now()
  sweep(now)
  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: limit - 1 }
  }
  if (bucket.count >= limit) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) }
  }
  bucket.count++
  return { ok: true, remaining: limit - bucket.count }
}

// Best-effort IP extraction from Vercel / proxy headers.
export function clientIp(req: Request): string {
  const h = req.headers
  return (
    h.get("x-forwarded-for")?.split(",")[0].trim() ||
    h.get("x-real-ip") ||
    h.get("cf-connecting-ip") ||
    "unknown"
  )
}
