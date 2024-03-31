import type {Movie, Recommendations, ServiceResponse} from "@/types";

import {fetcher} from "../../fetcher";
import {tvRecomendationsApiUrl} from "../config/tv";

export async function getTvRecomendations(id: Movie["id"]) {
  const apiUrl = tvRecomendationsApiUrl({id});
  const recommendations = await fetcher<ServiceResponse<Recommendations>>(apiUrl);

  return recommendations;
}
