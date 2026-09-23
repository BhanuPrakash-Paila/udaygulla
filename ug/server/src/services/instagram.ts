import { env } from "../config/env.js";
export async function getInstagramMedia() {
  if (!env.INSTAGRAM_ACCESS_TOKEN || !env.INSTAGRAM_USER_ID) return [];
  try {
    const response = await fetch(
      `https://graph.instagram.com/${env.INSTAGRAM_USER_ID}/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${env.INSTAGRAM_ACCESS_TOKEN}`,
      { signal: AbortSignal.timeout(4000) },
    );
    if (!response.ok) return [];
    const payload = (await response.json()) as { data?: unknown[] };
    return payload.data ?? [];
  } catch {
    return [];
  }
}
