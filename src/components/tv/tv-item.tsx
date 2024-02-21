import type {Tv} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

export function TvItem({tv}: {tv: Tv}) {
  const {backdrop_path, name, id} = tv;
  const path = generateFullPath({backdrop: {path: backdrop_path, size: "w300"}});

  return (
    <div>
      <Link href={`/tv/${id}`}>
        <picture>
          <img alt={name} src={path} />
        </picture>
      </Link>
    </div>
  );
}
