import type {DbResponse, Movie, WithOptional} from "@/types";

import {getAllTrendingMedia} from "@/lib/services/get-all-trending-media";
import {CarouselMedia} from "@/components/carousel-media";

export async function CarouselMultiMediaTrending() {
  const {results} = (await getAllTrendingMedia()) as DbResponse<
    WithOptional<Movie, "release_date" | "title">
  >;

  return <CarouselMedia data={results} />;
}
