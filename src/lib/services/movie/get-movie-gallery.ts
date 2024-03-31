import type {Movie} from "@/types";
import type {MovieGallery} from "@/types/movie/movie-gallery";

import {fetcher} from "../../fetcher";
import {movieGalleryApiUrl} from "../config/movie";

export async function getMovieGallery(id: Movie["id"]) {
  const apiUrl = movieGalleryApiUrl({id});
  const images = await fetcher<MovieGallery>(apiUrl);

  return images;
}
