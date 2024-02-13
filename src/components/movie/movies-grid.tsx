import type {Movie} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

import {MovieBookmark} from "./movie-bookmark";
import {MovieOptions} from "./movie-options";

export function MoviesGrid({movies}: {movies: Movie[]}) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {movies.map((item) => {
        const {id, poster_path, title} = item;

        return (
          <article key={id} className="group relative z-0  rounded-md border-2 border-accent/80">
            <Link className="group block p-2 pb-0" href={`/movies/${id}`}>
              <picture className="relative block overflow-hidden rounded-sm">
                <img
                  alt=""
                  className="w-full duration-300 group-hover:scale-105"
                  loading="lazy"
                  src={generateFullPath({poster: {path: poster_path, size: "w154"}})}
                />
              </picture>

              <footer className="w-full bg-background/80 py-3 ">
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

      {/* Dicover more */}
      <Link
        className="flex items-center justify-center rounded-md border-2 border-accent/80 text-2xl"
        href="/movies/trending"
      >
        see more
      </Link>
    </section>
  );
}
