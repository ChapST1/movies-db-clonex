import type {MovieDetail} from "@/types";

import {Suspense} from "react";

import {getMovieById} from "@/lib/services/get-movie-by-id";
import {MovieDetailHero} from "@/components/movie-details/movie-hero";
import {MovieCharacters} from "@/components/movie-details/movie-characters";
import {MovieImages} from "@/components/movie-details/movie-images";
import {MovieRecomendations} from "@/components/movie-details/movie-recomendations";
import {MoviesMediaSkeleton} from "@/components/skeletons/movies-media-skeleton";
import {MovieDetailSidebar} from "@/components/movie-details/movie-sidebar";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";

export default async function MovieDetail({params: {id}}: {params: {id: MovieDetail["id"]}}) {
  const movie = (await getMovieById(id)) as MovieDetail;

  return (
    <div>
      <MovieDetailHero movieDetail={movie} />
      <section className="grid gap-4 md:grid-cols-[1fr,300px]">
        <div>
          <Suspense fallback={<MoviesMediaSkeleton />}>
            <MovieCharacters id={id} />
          </Suspense>

          <Suspense fallback={<MoviesMediaSkeleton />}>
            <MovieImages id={id} />
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
