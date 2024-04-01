import type {Tv} from "@/types";

import Link from "next/link";
import {twMerge} from "tailwind-merge";

import {generateFullPath} from "@/lib/create-full-path";

import {MediaOptions} from "../media-options";
import {MediaPicture} from "../ui/media/media-picture";
import {MediaPictureImage} from "../ui/media/media-picture-image";
import {MediaFooter} from "../ui/media/media-footer";
import {MediaFooterName} from "../ui/media/media-footer-name";

interface MediaProps extends React.ComponentProps<"picture"> {
  tv: Tv;
}

export function TvItem({tv, className, ...props}: MediaProps) {
  const {backdrop_path, poster_path, name, id, overview, first_air_date} = tv;
  const poster = generateFullPath({poster: {path: poster_path, size: "w185"}});
  const backdrop = generateFullPath({backdrop: {path: backdrop_path, size: "w300"}});

  return (
    <MediaPicture className={twMerge("group", className)} {...props}>
      <Link href={`/tv/${id}`}>
        <MediaPictureImage alt={name} src={poster} />
      </Link>

      <MediaFooter>
        <MediaFooterName>{name}</MediaFooterName>
      </MediaFooter>

      <MediaOptions
        overviewInfo={{
          backdrop: `${backdrop}`,
          poster: `${poster}`,
          date: first_air_date,
          id,
          info: overview,
          title: name,
        }}
      />
    </MediaPicture>
  );
}
