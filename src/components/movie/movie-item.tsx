import type {Movie} from "@/types";

import Link from "next/link";
import clsx from "clsx";

import {generateFullPath} from "@/lib/create-full-path";

import {MediaOptions} from "../media-options";

import {MovieBookmark} from "./movie-bookmark";

export interface IsFilterProps {
  enable: boolean;
}

export function MovieItem({movie, isFilter}: {movie: Movie; isFilter?: IsFilterProps}) {
  const {id, poster_path, title, backdrop_path, overview, release_date} = movie;

  const isFilterMedia = clsx({
    hidden: isFilter && !isFilter.enable,
    block: isFilter && isFilter.enable,
  });

  const poster = generateFullPath({poster: {path: poster_path, size: "w154"}});
  const backdrop = generateFullPath({backdrop: {path: backdrop_path, size: "w300"}});

  return (
    <article
      className={`group relative z-0 h-[300px] min-h-[300px] overflow-hidden rounded-md ${isFilterMedia}`}
    >
      <Link className="group flex h-full flex-col gap-1 bg-accent p-1" href={`/movies/${id}`}>
        <picture className="relative block flex-grow overflow-hidden rounded-sm">
          <img
            alt={title}
            className="h-full w-full object-cover  duration-300 group-hover:scale-105"
            loading="lazy"
            src={poster}
          />
        </picture>

        <footer className="w-full rounded-sm  bg-background p-3">
          <h3 className="line-clamp-1" title={title}>
            {title}
          </h3>
        </footer>
      </Link>
      <MovieBookmark />
      <MediaOptions
        overviewInfo={{
          backdrop: `${backdrop}`,
          poster: `${poster}`,
          date: release_date,
          id,
          info: overview,
          title,
        }}
      />
    </article>
  );
}
