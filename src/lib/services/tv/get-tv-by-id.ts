import type {Tv, TvDetails} from "@/types";

import {fetcher} from "../../fetcher";
import {tvIdApiUrl} from "../config/tv";

export async function getTvById(id: Tv["id"]) {
  const apiUrl = tvIdApiUrl({id});
  const data = await fetcher<TvDetails>(apiUrl);

  return data;
}
