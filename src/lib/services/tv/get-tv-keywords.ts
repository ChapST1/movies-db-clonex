import type {Tv, TvKeywords} from "@/types";

import {fetcher} from "../../fetcher";
import {tvKeywordsApiUrl} from "../config/tv";

export async function getTvKeywords(id: Tv["id"]) {
  const apiUrl = tvKeywordsApiUrl({id});
  const keywords = await fetcher<TvKeywords>(apiUrl);

  return keywords;
}
