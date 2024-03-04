import type {Tv} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

export function SidebarSearchResultTv({tv}: {tv: Tv}) {
  const {id, poster_path, name} = tv;
  const path = generateFullPath({poster: {path: poster_path, size: "w92"}});

  return (
    <Link
      key={id}
      className="search-results-item grid grid-cols-[45px,1fr] gap-2 duration-500"
      href={`/movies/${id}`}
    >
      <picture className="overflow-hidden rounded-md">
        <img alt={name} className="h-full w-full" src={path} />
      </picture>

      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-2 text-xs font-bold">{name}</h3>
      </div>
    </Link>
  );
}
