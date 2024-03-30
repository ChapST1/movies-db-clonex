import type {Tv, TvCast} from "@/types";

import {fetcher} from "../fetcher";

import {generateMoviesCastApiUrl} from "./config";

export async function getTvCast(id: Tv["id"]) {
  const apiUrl = generateMoviesCastApiUrl(id);
  const cast = await fetcher<TvCast>(apiUrl);

  return cast;
}
