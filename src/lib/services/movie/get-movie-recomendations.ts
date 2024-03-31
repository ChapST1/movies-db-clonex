import type {Movie, Recommendations, ServiceResponse} from "@/types";

import {fetcher} from "../../fetcher";
import {movieRecomendationsApiUrl} from "../config/movie";

export async function getMovieRecomendations(id: Movie["id"]) {
  const apiUrl = movieRecomendationsApiUrl({id});
  const recommendations = await fetcher<ServiceResponse<Recommendations>>(apiUrl);

  return recommendations;
}
