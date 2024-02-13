import type {Movie, MovieCast} from "@/types";

import {fetcher} from "../fetcher";

import {generateMoviesCastApiUrl} from "./config";

export async function getMovieCast(id: Movie["id"]) {
  const apiUrl = generateMoviesCastApiUrl(id);
  const cast = await fetcher<MovieCast>(apiUrl);

  return cast;
}
