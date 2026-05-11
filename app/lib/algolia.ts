/**
 * algolia.ts
 *
 * Frontend Algolia client — uses the SEARCH API KEY only (safe to expose).
 *
 * Security model:
 *   NEXT_PUBLIC_ALGOLIA_APP_ID      → public, baked into the JS bundle
 *   NEXT_PUBLIC_ALGOLIA_SEARCH_KEY  → public, read-only, safe to expose
 *   ALGOLIA_WRITE_KEY               → secret, never sent to browser, used only
 *                                     in scripts/algolia-index.ts at build/deploy time
 *
 * Architecture: lazy singleton
 *   The liteClient constructor validates `appId` immediately and throws if
 *   it's empty. In Next.js, every import is evaluated during SSR/prerender
 *   (even for client components) — so module-level instantiation would crash
 *   the build when env vars aren't set in the build environment.
 *
 *   Solution: getSearchClient() lazily creates the instance on first call,
 *   which only happens in the browser (inside the SearchModal client component).
 *   SSR path never calls getSearchClient(), so it never throws.
 *
 *   react-instantsearch accepts any value for `searchClient` — we memoize
 *   the instance in a module-level variable so it's stable across re-renders.
 */

import { liteClient, type LiteClient } from "algoliasearch/lite";

/** The name of the Algolia index we search against. */
export const ALGOLIA_INDEX = "everytools_pages";

let _client: LiteClient | null = null;

/**
 * Returns the shared Algolia search client.
 *
 * Call this inside client components only (never in Server Components or
 * outside useEffect / event handlers). The first call instantiates the
 * client; subsequent calls return the cached instance.
 */
export function getSearchClient(): LiteClient {
  if (_client) return _client;

  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
  const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;

  if (!appId || !searchKey) {
    console.warn(
      "[Algolia] Missing env vars — search will not work. " +
        "Copy .env.local.example to .env.local and fill in your keys."
    );
    // Return a no-op client stub so the UI renders without throwing
    return {
      search: async () => ({ results: [{ hits: [], nbHits: 0, page: 0, nbPages: 0, hitsPerPage: 8, processingTimeMS: 0, exhaustiveNbHits: true, query: "", params: "", index: ALGOLIA_INDEX }] }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
  }

  _client = liteClient(appId, searchKey);
  return _client;
}
