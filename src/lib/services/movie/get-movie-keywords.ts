import type {Movie} from "@/types";
import type {MovieKeywords} from "@/types/movie/movie-keywords";

import {fetcher} from "../../fetcher";
import {movieKeywordsApiUrl} from "../config/movie";

export async function getMovieKeywords(id: Movie["id"]) {
  const apiUrl = movieKeywordsApiUrl({id});
  const keywords = await fetcher<MovieKeywords>(apiUrl);

  return keywords;
}
