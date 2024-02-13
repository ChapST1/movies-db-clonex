import type {Movie, MovieDetail} from "@/types";

import {fetcher} from "../fetcher";

import {generateMovieByIdApiUrl} from "./config";

export async function getMovieById(id: Movie["id"]) {
  const apiUrl = generateMovieByIdApiUrl(id);
  const movie = await fetcher<MovieDetail>(apiUrl);

  return movie;
}
