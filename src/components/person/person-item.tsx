import type {Person} from "@/types";
import type {IsFilterProps} from "../movie/movie-item";

import Link from "next/link";
import clsx from "clsx";

import {generateFullPath} from "@/lib/create-full-path";

export function PersonItem({person, isFilter}: {person: Person; isFilter?: IsFilterProps}) {
  const {profile_path, name, id} = person;
  const path = generateFullPath({profile: {path: profile_path, size: "w185"}});
  const isFilterMedia = clsx({
    hidden: isFilter && !isFilter.enable,
    block: isFilter && isFilter.enable,
  });

  return (
    <div className={isFilterMedia}>
      <Link href={`/people/${id}`}>
        <picture>
          <img alt={name} src={path} />
        </picture>
      </Link>
    </div>
  );
}
