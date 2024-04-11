import type {MovieDetail} from "@/types";

import {Suspense} from "react";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

import {Error} from "@/components/error";

import {MoviesMediaSkeleton} from "../../skeletons/movies-media-skeleton";
import {MovieGridSkeleton} from "../../skeletons/movie-grid-skeleton";

import {MovieDetailHero} from "./movie-hero";
import {MovieCharacters} from "./movie-characters";
import {MovieGallery} from "./movie-gallery";
import {MovieRecomendations} from "./movie-recomendations";
import {MovieDetailSidebar} from "./movie-sidebar";

export function MovieDetail({movie}: {movie: MovieDetail}) {
  const {id} = movie;

  return (
    <div>
      <MovieDetailHero movieDetail={movie} />
      <section className="grid gap-4 md:grid-cols-[1fr,300px]">
        <div>
          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<MoviesMediaSkeleton />}>
              <MovieCharacters id={id} />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<MoviesMediaSkeleton />}>
              <MovieGallery id={id} />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<MovieGridSkeleton />}>
              <MovieRecomendations id={id} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <MovieDetailSidebar info={movie} />
      </section>
    </div>
  );
}
