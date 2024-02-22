import type {Tv} from "@/types";
import type {IsFilterProps} from "../movie/movie-item";

import Link from "next/link";
import clsx from "clsx";

import {generateFullPath} from "@/lib/create-full-path";

export function TvItem({tv, isFilter}: {tv: Tv; isFilter?: IsFilterProps}) {
  const {backdrop_path, name, id} = tv;
  const path = generateFullPath({backdrop: {path: backdrop_path, size: "w300"}});

  const isFilterMedia = clsx({
    hidden: isFilter && !isFilter.enable,
    block: isFilter && isFilter.enable,
  });

  return (
    <div className={isFilterMedia}>
      <Link href={`/tv/${id}`}>
        <picture>
          <img alt={name} src={path} />
        </picture>
      </Link>
    </div>
  );
}
