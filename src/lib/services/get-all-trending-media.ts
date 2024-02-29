import type {DbResponse, Movie, Person, Tv} from "@/types";

import {fetcher} from "../fetcher";

import {generateGetAllMediaTrending} from "./config";

export async function getAllTrendingMedia() {
  const apiUrl = generateGetAllMediaTrending({page: 1});
  const media = await fetcher<DbResponse<Movie | Person | Tv>>(apiUrl);

  return media;
}
