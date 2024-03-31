import type {Movie, MovieDetail} from "@/types";

import {fetcher} from "../../fetcher";
import {movieIdApiUrl} from "../config/movie";

export async function getMovieById(id: Movie["id"]) {
  const apiUrl = movieIdApiUrl({id});
  const movie = await fetcher<MovieDetail>(apiUrl);

  return movie;
}
