import type {Movie, ServiceResponse, WithOptional} from "@/types";

import {getAllTrendingMedia} from "@/lib/services/get-all-trending-media";
import {CarouselMedia} from "@/components/ui/carousel-media";

export async function CarouselMultiMediaTrending() {
  const {results} = (await getAllTrendingMedia()) as ServiceResponse<
    WithOptional<Movie, "release_date" | "title">
  >;

  return <CarouselMedia data={results} />;
}
