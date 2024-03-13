import {Suspense} from "react";

import {ShadowEffect} from "@/components/shadow-effect";
import {CarouselMultiMediaTrending} from "@/components/home/carousel-multi-media-trending";
import {CarouselSkeleton} from "@/components/skeletons/carousel";
import {TrendingMovies} from "@/components/home/trending-movies";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";

export default async function HomePage() {
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
