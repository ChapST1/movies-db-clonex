import type {DbResponse, Movie, Recomendations} from "@/types";

import {fetcher} from "../fetcher";

import {generateMovieRecomendationsApiUrl} from "./config";

export async function getMovieRecomendations(id: Movie["id"]) {
  const apiUrl = generateMovieRecomendationsApiUrl(id);
  const recommendations = await fetcher<DbResponse<Recomendations>>(apiUrl);

  return recommendations;
}
