import type {SearchPreference} from "@/types";

import {Suspense} from "react";

import {SearchResults} from "@/components/search/search-results";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";

async function SearchPage({
  searchParams: {q, page = "1", by = "all"},
}: {
  searchParams: {
    q: string;
    page: string;
    by: SearchPreference;
  };
}) {
  return (
    <Suspense key={`${q}${page}`} fallback={<MovieGridSkeleton />}>
      <SearchResults by={by} page={page} q={q} />
    </Suspense>
  );
}

export default SearchPage;
