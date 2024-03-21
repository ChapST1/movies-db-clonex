import type {DbResponse, Movie, Person, SearchPreference, Tv} from "@/types";

import {searchMultiMedia} from "@/lib/services/search-multi-media";
import {searchMovies} from "@/lib/services/search-movies";
import {searchTv} from "@/lib/services/search-tv";
import {searchPerson} from "@/lib/services/search-person";

import {SearchResultsMulti} from "./search-results-multi";
import {SearchResultsMovies} from "./search-results-movies";
import {SearchResultsTv} from "./search-results-tv";
import {SearchResultsPerson} from "./search-results-person";

export async function SearchResults({
  page,
  q,
  by,
}: {
  page: string;
  q: string;
  by: SearchPreference;
}) {
  if (by === "all") {
    const response = (await searchMultiMedia({
      query: q,
      page,
    })) as DbResponse<Movie | Tv | Person>;

    return <SearchResultsMulti page={page} q={q} response={response} />;
  }

  if (by === "movie") {
    const response = (await searchMovies({query: q})) as DbResponse<Movie>;

    return <SearchResultsMovies page={page} q={q} response={response} />;
  }

  if (by === "tv") {
    const response = (await searchTv({query: q})) as DbResponse<Tv>;

    return <SearchResultsTv page={page} q={q} response={response} />;
  }

  // if (by === "person") {
  const response = (await searchPerson({query: q})) as DbResponse<Person>;

  return <SearchResultsPerson page={page} q={q} response={response} />;
}
