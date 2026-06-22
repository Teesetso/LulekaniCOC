import { env } from "@/lib/env";

export async function fetchCmsEntries(contentType: string) {
  if (!env.contentfulSpaceId || !env.contentfulToken) {
    return [];
  }

  const url = new URL(
    `https://cdn.contentful.com/spaces/${env.contentfulSpaceId}/entries`,
  );
  url.searchParams.set("access_token", env.contentfulToken);
  url.searchParams.set("content_type", contentType);

  const response = await fetch(url.toString(), {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as { items?: unknown[] };
  return data.items ?? [];
}
