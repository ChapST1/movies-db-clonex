import {Suspense} from "react";

import {CarouselSkeleton} from "@/components/skeletons/carousel";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";
import {ShadowEffect} from "@/components/shadow-effect";

import {CarouselMultiMediaTrending} from "./carousel-multi-media-trending";
import {TrendingMovies} from "./trending-movies";

export function Home() {
  return (
    <>
      <Suspense fallback={<CarouselSkeleton />}>
        <CarouselMultiMediaTrending />
      </Suspense>

      <Suspense fallback={<MovieGridSkeleton />}>
        <TrendingMovies />
      </Suspense>

      <ShadowEffect className="pointer-events-none" />
    </>
  );
}
