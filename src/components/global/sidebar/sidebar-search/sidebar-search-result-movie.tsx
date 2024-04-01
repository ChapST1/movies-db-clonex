import type {Movie} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

export function SidebarSearchResultMovie({movie}: {movie: Movie}) {
  const {id, poster_path, title} = movie;

  const path = generateFullPath({poster: {path: poster_path, size: "w92"}});

  return (
    <Link
      key={id}
      className="search-results-item grid grid-cols-[45px,1fr] gap-2 duration-500"
      href={`/movies/${id}`}
    >
      <picture className="overflow-hidden rounded-md">
        <img alt={title} className="aspect-[1/0] h-full w-full" loading="lazy" src={path} />
      </picture>

      <div className="flex flex-col gap-1">
        <h3 className="line-clamp-2 text-xs font-bold">{title}</h3>
      </div>
    </Link>
  );
}
