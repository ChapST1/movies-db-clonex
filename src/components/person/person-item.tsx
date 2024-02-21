import type {Person} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

export function PersonItem({person}: {person: Person}) {
  const {profile_path, name, id} = person;
  const path = generateFullPath({profile: {path: profile_path, size: "w185"}});

  return (
    <div>
      <Link href={`/people/${id}`}>
        <picture>
          <img alt={name} src={path} />
        </picture>
      </Link>
    </div>
  );
}
