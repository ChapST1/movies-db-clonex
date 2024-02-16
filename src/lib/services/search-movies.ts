import type {DbResponse, Movie} from "@/types";

import {fetcher} from "../fetcher";

import {generateSearchMovieApiUrl} from "./config";

export async function searchMovies({query}: {query: string}) {
  const apiUrl = generateSearchMovieApiUrl({query});
  const results = await fetcher<DbResponse<Movie>>(apiUrl);

  return results;
}
