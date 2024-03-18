import type {Movie} from "@/types";

import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";

import {MediaOptions} from "../media-options";
import {MediaPicture} from "../media/media-picture";
import {MediaPictureImage} from "../media/media-picture-image";
import {MediaFooter} from "../media/media-footer";
import {MediaFooterName} from "../media/media-footer-name";

export interface IsFilterProps {
  enable: boolean;
}

export function MovieItem({movie}: {movie: Movie}) {
  const {id, poster_path, title, backdrop_path, overview, release_date} = movie;

  const poster = generateFullPath({poster: {path: poster_path, size: "w185"}});
  const backdrop = generateFullPath({backdrop: {path: backdrop_path, size: "w300"}});

  return (
    <MediaPicture className="group">
      <Link className="" href={`/movies/${id}`}>
        <MediaPictureImage alt={title} src={poster} />
      </Link>

      <MediaFooter>
        <MediaFooterName>{title}</MediaFooterName>
      </MediaFooter>

      <MediaOptions
        overviewInfo={{
          backdrop: `${backdrop}`,
          poster: `${poster}`,
          date: release_date,
          id,
          info: overview,
          title,
        }}
      />
    </MediaPicture>
  );
}
