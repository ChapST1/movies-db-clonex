import type {DbResponse, Movie, Person, Tv} from "@/types";

import {fetcher} from "../fetcher";

import {generateSearchMultiMediaApiUrl} from "./config";

export async function searchMultiMedia({query}: {query: string}) {
  const apiUrl = generateSearchMultiMediaApiUrl({query});
  const searchResults = await fetcher<DbResponse<Movie | Person | Tv>>(apiUrl);

  return searchResults;
}
