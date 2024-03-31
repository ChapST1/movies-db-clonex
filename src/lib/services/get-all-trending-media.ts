import type {Movie, Person, ServiceResponse, Tv} from "@/types";

import {fetcher} from "../fetcher";

import {generateGetAllMediaTrending} from "./config";

export async function getAllTrendingMedia() {
  const apiUrl = generateGetAllMediaTrending({page: 1});
  const media = await fetcher<ServiceResponse<Movie | Person | Tv>>(apiUrl);

  return media;
}
