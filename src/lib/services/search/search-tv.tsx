import type {ServiceResponse, Tv} from "@/types";

import {fetcher} from "../../fetcher";
import {searchTvApiUrl} from "../config/search";

export async function searchTv({query, page}: {query: string; page: number}) {
  const apiUrl = searchTvApiUrl({query, page});
  const results = await fetcher<ServiceResponse<Tv>>(apiUrl);

  return results;
}
