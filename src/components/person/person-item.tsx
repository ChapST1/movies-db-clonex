import type {Person} from "@/types";

import Link from "next/link";
import {twMerge} from "tailwind-merge";

import {generateFullPath} from "@/lib/create-full-path";

import {MediaBookmark} from "../media-bookmark";
import {MediaPicture} from "../ui/media/media-picture";
import {MediaFooter} from "../ui/media/media-footer";
import {MediaFooterName} from "../ui/media/media-footer-name";

interface MediaProps extends React.ComponentProps<"picture"> {
  person: Person;
}

export function PersonItem({person, className, ...props}: MediaProps) {
  const {profile_path, name, id} = person;
  const path = generateFullPath({profile: {path: profile_path, size: "w185"}});

  return (
    <MediaPicture className={twMerge("group", className)} {...props}>
      <Link className="group" href={`/people/${id}`}>
        <picture className="relative block flex-grow overflow-hidden rounded-media">
          <img
            alt={name}
            className="aspect-[0.7] h-full w-full  object-cover duration-300 group-hover:scale-105"
            loading="lazy"
            src={path}
          />
        </picture>

        <MediaFooter>
          <MediaFooterName title={name}>{name}</MediaFooterName>
        </MediaFooter>
      </Link>
      <MediaBookmark
        className="absolute right-1 top-2 size-9 -translate-y-7 opacity-0 duration-200 group-hover:visible group-hover:-translate-y-0 group-hover:opacity-100 md:size-10"
        mediaId={person.id}
      />
    </MediaPicture>
  );
}
