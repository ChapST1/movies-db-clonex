import type {DbResponse, Tv} from "@/types";

import {fetcher} from "../fetcher";

import {generateSearchTvApiUrl} from "./config";

export async function searchTv({query}: {query: string}) {
  const apiUrl = generateSearchTvApiUrl({query});
  const results = await fetcher<DbResponse<Tv>>(apiUrl);

  return results;
}
