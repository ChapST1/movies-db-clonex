import type {Tv, TvImages} from "@/types";

import {fetcher} from "../fetcher";

import {generateTvImagesApiUrl} from "./config";

export async function getTvImages(id: Tv["id"]) {
  const apiUrl = generateTvImagesApiUrl(id);
  const images = await fetcher<TvImages>(apiUrl);

  return images;
}
