import {Suspense} from "react";

import {SearchResults} from "@/components/search/search-results";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";

async function SearchPage({
  searchParams: {q, movie, tv, people, page = "1"},
}: {
  searchParams: {q: string; tv: string; movie: string; people: string; page: string};
}) {
  return (
    <Suspense key={`${q}${page}`} fallback={<MovieGridSkeleton />}>
      <SearchResults movie={movie} page={page} people={people} q={q} tv={tv} />
    </Suspense>
  );
}

export default SearchPage;
