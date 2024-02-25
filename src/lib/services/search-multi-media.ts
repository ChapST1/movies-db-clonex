import type {DbResponse, Movie, Person, Tv} from "@/types";

import {fetcher} from "../fetcher";

import {generateSearchMultiMediaApiUrl} from "./config";

export async function searchMultiMedia({query, page = "1"}: {query: string; page?: string}) {
  const apiUrl = generateSearchMultiMediaApiUrl({query, page});
  const searchResults = await fetcher<DbResponse<Movie | Person | Tv>>(apiUrl);

  return searchResults;
}
