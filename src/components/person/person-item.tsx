import type {Person} from "@/types";
import type {IsFilterProps} from "../movie/movie-item";

import Link from "next/link";
import clsx from "clsx";

import {generateFullPath} from "@/lib/create-full-path";

import {MediaBookmark} from "../media-bookmark";
import {MediaOptions} from "../media-options";

export function PersonItem({person, isFilter}: {person: Person; isFilter?: IsFilterProps}) {
  const {profile_path, name, id} = person;
  const path = generateFullPath({profile: {path: profile_path, size: "w185"}});

  const isFilterMedia = clsx({
    hidden: isFilter && !isFilter.enable,
    block: isFilter && isFilter.enable,
  });

  return (
    <article
      className={`group relative z-0 min-h-[200px] min-w-[150px] overflow-hidden ${isFilterMedia}`}
    >
      <Link className="group" href={`/people/${id}`}>
        <picture className="relative block flex-grow overflow-hidden rounded-xl">
          <img
            alt={name}
            className="aspect-[0.7] h-full w-full  object-cover duration-300 group-hover:scale-105"
            loading="lazy"
            src={path}
          />
        </picture>

        <footer className="w-full rounded-sm bg-background p-2">
          <h3 className="line-clamp-1" title={name}>
            {name}
          </h3>
        </footer>
      </Link>
      <MediaBookmark mediaId={person.id} />
      <MediaOptions options={{isPerson: true}} />
      {/* add ts problem */}
    </article>
  );
}
