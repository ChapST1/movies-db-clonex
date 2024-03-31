import type {MovieTrend, ServiceResponse} from "@/types";

import {fetcher} from "@/lib/fetcher";

import {moviestrendingApiUrl} from "../config/movie";

export async function getTrendingMovies({
  time = "day",
  page = 1,
}: {
  time: "day" | "week";
  page: number;
}) {
  const apiUrl = moviestrendingApiUrl({time, page});
  const movies = await fetcher<ServiceResponse<MovieTrend>>(apiUrl);

  return movies;
}
