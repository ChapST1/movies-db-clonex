import type {Movie} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

import {MovieBookmark} from "./movie-bookmark";
import {MovieOptions} from "./movie-options";

export function MovieItem({movie}: {movie: Movie}) {
  const {id, poster_path, title} = movie;

  return (
    <article className="group relative z-0 h-[300px] min-h-[300px] overflow-hidden rounded-md">
      <Link className="group flex h-full flex-col gap-1 bg-accent p-1" href={`/movies/${id}`}>
        <picture className="relative block flex-grow overflow-hidden rounded-sm">
          <img
            alt={title}
            className="h-full w-full object-cover  duration-300 group-hover:scale-105"
            loading="lazy"
            src={generateFullPath({poster: {path: poster_path, size: "w154"}})}
          />
        </picture>

        <footer className="w-full rounded-sm  bg-background p-3">
          <h3 className="line-clamp-1" title={title}>
            {title}
          </h3>
        </footer>
      </Link>
      <MovieBookmark className="absolute right-3 top-3" />
      <MovieOptions overviewInfo={movie} />
    </article>
  );
}
