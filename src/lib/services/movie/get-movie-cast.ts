import type {Movie, MovieCast} from "@/types";

import {fetcher} from "../../fetcher";
import {movieCastApiUrl} from "../config/movie";

export async function getMovieCast(id: Movie["id"]) {
  const apiUrl = movieCastApiUrl({id});
  const cast = await fetcher<MovieCast>(apiUrl);

  return cast;
}
