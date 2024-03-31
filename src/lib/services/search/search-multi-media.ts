import type {Movie, Person, ServiceResponse, Tv} from "@/types";

import {fetcher} from "../../fetcher";
import {searchMultiMediaApiUrl} from "../config/search";

export async function searchMultiMedia({query, page}: {query: string; page: number}) {
  const apiUrl = searchMultiMediaApiUrl({query, page});
  const searchResults = await fetcher<ServiceResponse<Movie | Person | Tv>>(apiUrl);

  return searchResults;
}
