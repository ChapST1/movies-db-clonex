import type {Movie, ServiceResponse} from "@/types";

import {fetcher} from "../../fetcher";
import {searchMovieApiUrl} from "../config/search";

export async function searchMovies({query, page}: {query: string; page: number}) {
  const apiUrl = searchMovieApiUrl({query, page});
  const results = await fetcher<ServiceResponse<Movie>>(apiUrl);

  return results;
}
