import type {Movie, MovieImages} from "@/types";

import {fetcher} from "../fetcher";

import {generateMoviesImagesApiUrl} from "./config";

export async function getMovieImages(id: Movie["id"]) {
  const apiUrl = generateMoviesImagesApiUrl(id);
  const images = await fetcher<MovieImages>(apiUrl);

  return images;
}
