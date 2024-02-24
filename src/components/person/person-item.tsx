import type {Person} from "@/types";
import type {IsFilterProps} from "../movie/movie-item";

import Link from "next/link";
import clsx from "clsx";

import {generateFullPath} from "@/lib/create-full-path";

import {MovieBookmark} from "../movie/movie-bookmark";
import {MovieOptions} from "../movie/movie-options";

export function PersonItem({person, isFilter}: {person: Person; isFilter?: IsFilterProps}) {
  const {profile_path, name, id} = person;
  const path = generateFullPath({profile: {path: profile_path, size: "w185"}});

  const isFilterMedia = clsx({
    hidden: isFilter && !isFilter.enable,
    block: isFilter && isFilter.enable,
  });

  return (
    <article
      className={`group relative z-0 h-[300px] min-h-[300px] overflow-hidden rounded-md ${isFilterMedia}`}
    >
      <Link className="group flex h-full flex-col gap-1 bg-accent p-1" href={`/tv/${id}`}>
        <picture className="relative block flex-grow overflow-hidden rounded-sm">
          <img
            alt={name}
            className="h-full w-full object-cover  duration-300 group-hover:scale-105"
            loading="lazy"
            src={path}
          />
        </picture>

        <footer className="w-full rounded-sm  bg-background p-3">
          <h3 className="line-clamp-1" title={name}>
            {name}
          </h3>
        </footer>
      </Link>
      <MovieBookmark />
      <MovieOptions options={{isPerson: true}} />
      {/* add ts problem */}
    </article>
  );
}
