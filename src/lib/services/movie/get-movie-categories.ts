import type {MovieCategories} from "@/types";

import {fetcher} from "../../fetcher";
import {movieCategoriesApiUrl} from "../config/movie";

export async function getMovieCategories() {
  const apiUrl = movieCategoriesApiUrl({language: "en"});
  const categories = await fetcher<MovieCategories>(apiUrl);

  return categories;
}
