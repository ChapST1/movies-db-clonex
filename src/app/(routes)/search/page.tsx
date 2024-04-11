import type {SearchPreference} from "@/types";

import {Suspense} from "react";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

import {SearchResults} from "@/components/search/search-results";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";
import {Error} from "@/components/error";

async function SearchPage({
  searchParams: {q, page = "1", by = "all"},
}: {
  searchParams: {
    q: string;
    page: string;
    by: SearchPreference;
  };
}) {
  if (!q) {
    return null;
  }

  return (
    <ErrorBoundary errorComponent={Error}>
      <Suspense key={`${q}${page}${by}`} fallback={<MovieGridSkeleton />}>
        <SearchResults by={by} page={page} q={q} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default SearchPage;
