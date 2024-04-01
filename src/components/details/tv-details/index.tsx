import type {TvDetails} from "@/types";

import {Suspense} from "react";

import {MoviesMediaSkeleton} from "@/components/skeletons/movies-media-skeleton";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";

import {TvDetailHero} from "./tv-hero";
import {TvCharacters} from "./tv-characters";
import {TvGallery} from "./tv-gallery";
import {TvRecomendations} from "./tv-recomendations";

export function TvDetail({tvDetails}: {tvDetails: TvDetails}) {
  const {id} = tvDetails;

  return (
    <div>
      <TvDetailHero tvDetail={tvDetails} />
      <section className="grid gap-4 md:grid-cols-[1fr,300px]">
        <div>
          <Suspense fallback={<MoviesMediaSkeleton />}>
            <TvCharacters id={id} />
          </Suspense>

          <Suspense fallback={<MoviesMediaSkeleton />}>
            <TvGallery id={id} />
          </Suspense>

          <Suspense fallback={<MovieGridSkeleton />}>
            <TvRecomendations id={id} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
