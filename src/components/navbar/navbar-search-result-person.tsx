import type {Person} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";
import {formatPersonGender} from "@/lib/format-person-gender";

import {Badge} from "../ui/badge";

export function NavbarSearchResultPerson({person}: {person: Person}) {
  const {profile_path, name, id, gender} = person;
  const path = generateFullPath({profile: {path: profile_path, size: "w185"}});
  const formatGender = formatPersonGender(gender);

  return (
    <Link
      key={id}
      className="search-results-item grid grid-cols-[60px,1fr] gap-3 duration-500"
      href={`/people/${id}`}
    >
      <picture className="overflow-hidden rounded-md">
        <img alt={name} className="h-full w-full" src={path} />
      </picture>

      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-1 text-base font-bold">{name}</h3>
        <span className="line-clamp-2 text-xs">{formatGender}</span>
        <Badge className="w-[max-content]" variant="secondary">
          Person
        </Badge>
      </div>
    </Link>
  );
}