import type {MovieDetail} from "@/types";

import {Suspense} from "react";

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
          <Suspense fallback={<MoviesMediaSkeleton />}>
            <MovieCharacters id={id} />
          </Suspense>

          <Suspense fallback={<MoviesMediaSkeleton />}>
            <MovieGallery id={id} />
          </Suspense>

          <Suspense fallback={<MovieGridSkeleton />}>
            <MovieRecomendations id={id} />
          </Suspense>
        </div>
        <MovieDetailSidebar info={movie} />
      </section>
    </div>
  );
}
