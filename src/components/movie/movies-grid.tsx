import type {Movie} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

import {MovieBookmark} from "./movie-bookmark";
import {MovieOptions} from "./movie-options";

export function MoviesGrid({movies}: {movies: Movie[] | undefined}) {
  return (
    <section
      className="grid grid-cols-2
      gap-4 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
    >
      {movies?.map((item) => {
        const {id, poster_path, title} = item;

        return (
          <article key={id} className="group relative z-0 rounded-md border-2 border-accent/80">
            <Link className="group flex h-full flex-col p-1" href={`/movies/${id}`}>
              <picture className="relative block flex-grow overflow-hidden rounded-sm">
                <img
                  alt={title}
                  className="h-full w-full object-cover  duration-300 group-hover:scale-105"
                  loading="lazy"
                  src={generateFullPath({poster: {path: poster_path, size: "w154"}})}
                />
              </picture>

              <footer className="w-full bg-background/80 p-3 ">
                <h3 className="line-clamp-1" title={title}>
                  {title}
                </h3>
              </footer>
            </Link>
            <MovieBookmark className="absolute right-3 top-3" />
            <MovieOptions overviewInfo={item} />
          </article>
        );
      })}
    </section>
  );
}
