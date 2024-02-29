import type {DbResponse, Movie, Person, Tv} from "@/types";

import {getAllTrendingMedia} from "@/lib/services/get-all-trending-media";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {TrendingMediaItem} from "./trending-media-item";

export async function TrendingMedia() {
  const {results} = (await getAllTrendingMedia()) as DbResponse<Movie | Tv | Person>;

  return (
    <Carousel className="relative mt-4" opts={{loop: true}}>
      <CarouselContent>
        {results.map((item) => {
          const {media_type} = item;

          return (
            <CarouselItem key={item.id}>
              {media_type === "movie" && <TrendingMediaItem media={item as Movie & Tv} />}
              {media_type === "tv" && <TrendingMediaItem media={item as Movie & Tv} />}
              {media_type === "person" && null}
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <aside className="absolute bottom-0 right-0 hidden w-[max-content] items-center justify-center gap-2 rounded-md bg-background/80  p-2 md:flex">
        <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
        <CarouselNext className="relative left-0 translate-x-0 translate-y-0" />
      </aside>
    </Carousel>
  );
}
