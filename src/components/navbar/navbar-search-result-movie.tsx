import type {Movie} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

import {Badge} from "../ui/badge";

export function NavbarSearchResultMovie({movie}: {movie: Movie}) {
  const {id, poster_path, title, overview} = movie;

  const path = generateFullPath({poster: {path: poster_path, size: "w154"}});

  return (
    <Link
      key={id}
      className="search-results-item grid grid-cols-[60px,1fr] gap-3 duration-500"
      href={`/movies/${id}`}
    >
      <picture className="overflow-hidden rounded-md">
        <img alt={title} className="h-full w-full" src={path} />
      </picture>

      <div className="flex flex-col gap-1">
        <h3 className="line-clamp-1 text-base font-bold">{title}</h3>
        <p className="line-clamp-2 text-xs">{overview}</p>
        <Badge className="w-[max-content]" variant="secondary">
          Movie
        </Badge>
      </div>
    </Link>
  );
}
