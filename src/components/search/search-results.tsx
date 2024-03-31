import type {ServiceResponse, Movie, Person, SearchPreference, Tv} from "@/types";

import {searchMultiMedia} from "@/lib/services/search/search-multi-media";
import {searchMovies} from "@/lib/services/search/search-movies";
import {searchTv} from "@/lib/services/search/search-tv";
import {searchPerson} from "@/lib/services/search/search-person";

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
  const pageToNumber = Number(page) || 1;

  if (by === "all") {
    const response = (await searchMultiMedia({
      query: q,
      page: pageToNumber,
    })) as ServiceResponse<Movie | Tv | Person>;

    return <SearchResultsMulti page={page} q={q} response={response} />;
  }

  if (by === "movie") {
    const response = (await searchMovies({query: q, page: pageToNumber})) as ServiceResponse<Movie>;

    return <SearchResultsMovies page={page} q={q} response={response} />;
  }

  if (by === "tv") {
    const response = (await searchTv({query: q, page: pageToNumber})) as ServiceResponse<Tv>;

    return <SearchResultsTv page={page} q={q} response={response} />;
  }

  // if (by === "person") {
  const response = (await searchPerson({query: q, page: pageToNumber})) as ServiceResponse<Person>;

  return <SearchResultsPerson page={page} q={q} response={response} />;
}
