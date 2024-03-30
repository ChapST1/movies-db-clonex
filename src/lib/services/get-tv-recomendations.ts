import type {DbResponse, Movie, Recomendations} from "@/types";

import {fetcher} from "../fetcher";

import {generateTvRecomendationsApiUrl} from "./config";

export async function getTvRecomendations(id: Movie["id"]) {
  const apiUrl = generateTvRecomendationsApiUrl(id);
  const recommendations = await fetcher<DbResponse<Recomendations>>(apiUrl);

  return recommendations;
}
