import type {Tv, TvCast} from "@/types";

import {fetcher} from "../../fetcher";
import {tvCastApiUrl} from "../config/tv";

export async function getTvCast(id: Tv["id"]) {
  const apiUrl = tvCastApiUrl({id});
  const cast = await fetcher<TvCast>(apiUrl);

  return cast;
}
