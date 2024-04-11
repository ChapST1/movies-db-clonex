import type {Person} from "@/types";

import {Suspense} from "react";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";
import {MoviesMediaSkeleton} from "@/components/skeletons/movies-media-skeleton";
import {Error} from "@/components/error";

import {PersonContentMovies} from "./person-content-movies";
import {PersonContentImages} from "./person-content-images";

export function PersonContent({person}: {person: Person}) {
  const {name, biography, id} = person;

  return (
    <div>
      <h1 className="py-2 text-4xl font-semibold">{name}</h1>
      <p
        className="max-h-56 overflow-y-auto text-pretty pb-14"
        style={{
          maskImage: "linear-gradient(black, 80%, transparent)",
        }}
      >
        {biography}
      </p>

      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<MovieGridSkeleton />}>
          <PersonContentMovies id={id} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<MoviesMediaSkeleton />}>
          <PersonContentImages id={id} owner={name} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
