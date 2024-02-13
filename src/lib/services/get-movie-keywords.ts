import type {Movie, MovieKeywords} from "@/types";

import {fetcher} from "../fetcher";

import {generateMoviesKeywordsApiUrl} from "./config";

export async function getMovieKeywords(id: Movie["id"]) {
  const apiUrl = generateMoviesKeywordsApiUrl(id);
  const keywords = await fetcher<MovieKeywords>(apiUrl);

  return keywords;
}
