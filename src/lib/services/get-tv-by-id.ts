import type {Tv, TvDetails} from "@/types";

import {fetcher} from "../fetcher";

import {generateTvByIdApiUrl} from "./config";

export async function getTvById(id: Tv["id"]) {
  const apiUrl = generateTvByIdApiUrl(id);
  const data = await fetcher<TvDetails>(apiUrl);

  return data;
}
