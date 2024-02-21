import type {Tv} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

import {Badge} from "../ui/badge";

export function NavbarSearchResultTv({tv}: {tv: Tv}) {
  const {id, poster_path, name, overview} = tv;
  const path = generateFullPath({poster: {path: poster_path, size: "w185"}});

  return (
    <Link
      key={id}
      className="search-results-item grid grid-cols-[60px,1fr] gap-3 duration-500"
      href={`/movies/${id}`}
    >
      <picture className="overflow-hidden rounded-md">
        <img alt={name} className="h-full w-full" src={path} />
      </picture>

      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-1 text-base font-bold">{name}</h3>
        <p className="line-clamp-2 text-xs">{overview}</p>
        <Badge className="w-[max-content]" variant="secondary">
          Tv
        </Badge>
      </div>
    </Link>
  );
}
