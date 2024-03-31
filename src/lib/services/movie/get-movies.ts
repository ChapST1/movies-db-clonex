import type {Movie, ServiceResponse} from "@/types";

import {fetcher} from "@/lib/fetcher";

import {movieDiscoverApiUrl} from "../config/movie";

export async function getMovies() {
  const movies = await fetcher<ServiceResponse<Movie>>(movieDiscoverApiUrl);

  return movies;
}
