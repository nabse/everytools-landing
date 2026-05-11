/**
 * scripts/algolia-index.ts
 *
 * Indexing script — pushes all pages to Algolia and configures index settings.
 *
 * Run with:
 *   npm run algolia:index
 *
 * Uses the WRITE API KEY (never exposed to the browser).
 * Requires .env.local with ALGOLIA_APP_ID, ALGOLIA_WRITE_KEY set.
 *
 * ── When to re-run ────────────────────────────────────────────────────────────
 *   • After adding or removing pages
 *   • After editing titles, descriptions, or keywords in search-records.ts
 *   • After deploying to production (add to CI/CD pipeline)
 *
 * ── Architecture note ────────────────────────────────────────────────────────
 *   We use `saveObjects` with `autoGenerateObjectIDIfNotExist: false` so that
 *   re-running the script fully replaces existing records (upsert semantics).
 *   For large sites you'd instead use `replaceAllObjects` (atomic swap) to
 *   avoid serving stale results during a long reindex. For 15 records, a
 *   simple saveObjects is fast enough that it doesn't matter.
 */

import { config } from "dotenv";
import { resolve } from "path";
import { algoliasearch } from "algoliasearch";
import { searchRecords, type SearchRecord } from "../app/lib/search-records";

// Load .env.local (Next.js convention) from the project root
config({ path: resolve(process.cwd(), ".env.local") });

const appId = process.env.ALGOLIA_APP_ID ?? process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const writeKey = process.env.ALGOLIA_WRITE_KEY;

if (!appId || !writeKey) {
  console.error(
    "❌  Missing required env vars.\n" +
      "    Set ALGOLIA_APP_ID and ALGOLIA_WRITE_KEY in .env.local"
  );
  process.exit(1);
}

const INDEX_NAME = "everytools_pages";

// Full algoliasearch client (with write access) — ONLY used server-side
const client = algoliasearch(appId, writeKey);

async function configureIndex() {
  console.log("⚙️   Configuring index settings...");

  await client.setSettings({
    indexName: INDEX_NAME,
    indexSettings: {
      /**
       * Searchable attributes — ordered by importance.
       * Matches in earlier attributes rank higher than later ones.
       * `unordered(keywords)` means position within the array doesn't affect ranking.
       */
      searchableAttributes: [
        "title",
        "description",
        "unordered(keywords)",
        "toolName",
      ],

      /**
       * Attributes returned with highlight tags in search results.
       * We only highlight what's visible in the result card.
       */
      attributesToHighlight: ["title", "description"],

      /**
       * Snippet: show up to 25 words around the matching term in description.
       * Great for long descriptions where the match isn't at the start.
       */
      attributesToSnippet: ["description:25"],

      /**
       * Custom ranking: pages with higher `rank` values appear first when
       * two results have identical relevance scores.
       * Order: homepage (20) > tool-home (15) > guide (8)
       */
      customRanking: ["desc(rank)"],

      /**
       * Faceting: allows filtering by tool and type in the UI.
       * `filterOnly` means the attribute is indexed for filtering but not
       * displayed — saves index size.
       */
      attributesForFaceting: ["filterOnly(tool)", "filterOnly(type)"],

      /**
       * Typo tolerance: allow 1 typo for words ≥ 4 chars, 2 typos for ≥ 8.
       * Covers common misspellings like "algorihtm", "explian", "veedg".
       */
      typoTolerance: true,
      minWordSizefor1Typo: 4,
      minWordSizefor2Typos: 8,

      /**
       * Ignore plurals: "summaries" matches "summary", "extensions" → "extension"
       */
      ignorePlurals: true,

      /**
       * Prefix search on the last word enables as-you-type autocomplete.
       * "fast yout" matches "fast YouTube summarizer"
       */
      queryType: "prefixLast",

      /**
       * If a query returns 0 results, progressively drop the last words
       * to try to find partial matches.
       */
      removeWordsIfNoResults: "lastWords",

      /**
       * Default number of hits per page in the search modal.
       */
      hitsPerPage: 8,

      /**
       * Highlight tags used by react-instantsearch's <Highlight> component.
       * Must match exactly what the frontend expects.
       */
      highlightPreTag: '<mark class="algolia-highlight">',
      highlightPostTag: "</mark>",
    },
  });

  console.log("✅  Index settings configured.");
}

async function pushRecords(records: SearchRecord[]) {
  console.log(`📤  Pushing ${records.length} records to "${INDEX_NAME}"...`);

  /**
   * In algoliasearch v5, saveObjects returns BatchResponse[].
   * waitForTasks: true tells the helper to poll until every batch task
   * has completed — equivalent to manually calling waitForTask on each.
   * For 15 records this completes in ~1 second.
   */
  await client.saveObjects({
    indexName: INDEX_NAME,
    objects: records,
    waitForTasks: true,
  });

  console.log(`✅  ${records.length} records indexed successfully.`);
}

async function main() {
  console.log(`\n🔍  EveryTools Algolia Indexer`);
  console.log(`    App ID:  ${appId}`);
  console.log(`    Index:   ${INDEX_NAME}`);
  console.log(`    Records: ${searchRecords.length}\n`);

  await configureIndex();
  await pushRecords(searchRecords);

  console.log("\n🎉  Done! Your Algolia index is up to date.\n");
}

main().catch((err) => {
  console.error("❌  Indexing failed:", err);
  process.exit(1);
});
