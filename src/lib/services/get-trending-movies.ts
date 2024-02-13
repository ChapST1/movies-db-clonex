import type {DbResponse, MovieTrend} from "@/types";

import {GENERATE_TRENDING_MOVIES_API_URL, type GenerateTrendingMoviesApiUrlProps} from "./config";

export async function getTrendingMovies({
  time = "day",
  page = 1,
}: GenerateTrendingMoviesApiUrlProps) {
  const apiUrl = GENERATE_TRENDING_MOVIES_API_URL({time, page});

  try {
    const res = await fetch(apiUrl);
    const data = (await res.json()) as DbResponse<MovieTrend>;

    return data;
  } catch (error) {
    return {};
  }
}
