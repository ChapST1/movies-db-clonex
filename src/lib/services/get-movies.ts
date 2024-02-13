import type {DbResponse, Movie} from "@/types";

import {fetcher} from "@/lib/fetcher";

import {DISCOVER_MOVIE_API_URL} from "./config";

export async function getMovies() {
  const movies = await fetcher<DbResponse<Movie>>(DISCOVER_MOVIE_API_URL);

  return movies;
}
