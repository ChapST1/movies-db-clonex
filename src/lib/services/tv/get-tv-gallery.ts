import type {Tv, TvGallery} from "@/types";

import {fetcher} from "../../fetcher";
import {tvGalleryApiUrl} from "../config/tv";

export async function getTvGallery(id: Tv["id"]) {
  const apiUrl = tvGalleryApiUrl({id});
  const images = await fetcher<TvGallery>(apiUrl);

  return images;
}
