import type {MovieCategories} from "@/types";

import {fetcher} from "../fetcher";

import {generateGetMovieCategoriesApiUrl} from "./config";

export async function getMovieCategories() {
  const apiUrl = generateGetMovieCategoriesApiUrl({language: "en"});
  const categories = await fetcher<MovieCategories>(apiUrl);

  return categories;
}
