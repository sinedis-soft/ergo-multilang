const inMemory = new Map<string, { count: number; firstHit: number }>();

const WINDOW_MS = Number(process.env.LEAD_RATE_LIMIT_WINDOW_MS || 60_000);
const MAX_HITS = Number(process.env.LEAD_RATE_LIMIT_MAX || 20);

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = inMemory.get(key);

  if (!bucket) {
    inMemory.set(key, { count: 1, firstHit: now });
    return false;
  }

  if (now - bucket.firstHit > WINDOW_MS) {
    inMemory.set(key, { count: 1, firstHit: now });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_HITS;
}
