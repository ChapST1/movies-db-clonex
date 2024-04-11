import {Suspense} from "react";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

import {CarouselSkeleton} from "@/components/skeletons/carousel";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";
import {ShadowEffect} from "@/components/shadow-effect";
import {Error} from "@/components/error";

import {CarouselMultiMediaTrending} from "./carousel-multi-media-trending";
import {TrendingMovies} from "./trending-movies";

export function Home() {
  return (
    <>
      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<CarouselSkeleton />}>
          <CarouselMultiMediaTrending />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<MovieGridSkeleton />}>
          <TrendingMovies />
        </Suspense>
      </ErrorBoundary>

      <ShadowEffect className="pointer-events-none" />
    </>
  );
}
