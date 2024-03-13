import type {Person} from "@/types";

import {Suspense} from "react";

import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";
import {MoviesMediaSkeleton} from "@/components/skeletons/movies-media-skeleton";

import {PersonContentMovies} from "./person-content-movies";
import {PersonContentImages} from "./person-content-images";

export function PersonContent({person}: {person: Person}) {
  const {name, biography, id} = person;

  return (
    <div>
      <h1 className="py-2 text-4xl font-semibold">{name}</h1>
      <p className="text-pretty md:w-[80%]">{biography}</p>

      <Suspense fallback={<MovieGridSkeleton />}>
        <PersonContentMovies id={id} />
      </Suspense>

      <Suspense fallback={<MoviesMediaSkeleton />}>
        <PersonContentImages id={id} owner={name} />
      </Suspense>
    </div>
  );
}
