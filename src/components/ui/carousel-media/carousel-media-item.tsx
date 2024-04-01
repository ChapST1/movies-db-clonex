import type {Movie, Tv, WithOptional} from "@/types";

import {VideoIcon} from "lucide-react";
import Link from "next/link";

import {generateFullPath} from "@/lib/create-full-path";
import {formatDate} from "@/lib/format-date";

import {MediaButton} from "../../media-button";
import {MediaBookmark} from "../../media-bookmark";
import {Badge} from "../../ui/badge";
import {Button} from "../../ui/button";

interface CarouselData {
  media: WithOptional<Movie, "title" | "release_date"> & Tv;
}

export function CarouselMediaItem({media}: CarouselData) {
  const {
    poster_path,
    backdrop_path,
    overview,
    original_language,
    id,
    title,
    release_date,
    name,
    first_air_date,
  } = media;

  const poster = generateFullPath({poster: {path: poster_path, size: "w500"}});
  const backdrop = generateFullPath({backdrop: {path: backdrop_path, size: "w1280"}});
  const newDate = formatDate(release_date ?? first_air_date);

  const mediaLink = title ? `/movies/${id}` : `/tv/${id}`;

  return (
    <div
      className="grid w-full min-w-full grid-cols-1 gap-3 bg-center bg-no-repeat object-top p-3 py-5 md:grid-cols-[300px,1fr] md:bg-top"
      style={{
        backgroundImage: `linear-gradient(to top, hsl(var(--background)), 80%, rgba(0, 0, 255, 0.057)), url("${backdrop}")`,
        backgroundSize: "cover",
      }}
    >
      <picture className="relative">
        <img
          alt={title ?? name}
          className="relative z-10 m-auto aspect-[2/3] w-44 rounded-md object-cover md:h-full md:w-full"
          loading="lazy"
          src={poster}
        />
        {/* shadow blur effect */}
        <img
          aria-hidden
          alt={title ?? name}
          className="absolute left-0 top-0 hidden aspect-[2/3] w-44 rounded-md object-cover opacity-85 blur-md md:block md:h-full md:w-full"
          loading="lazy"
          src={poster}
        />
      </picture>
      <div className="flex h-full flex-col">
        <h2 className="text-4xl">{title ?? name}</h2>
        <time className="block text-sm">{newDate}</time>

        <div className="relative flex items-center justify-start gap-2 pt-4">
          <MediaButton>
            <VideoIcon />
          </MediaButton>

          <MediaBookmark className="relative left-0 top-0" mediaId={id} />
        </div>
        <Badge className="mt-4 w-[max-content] scale-110" variant="secondary">
          {original_language}
        </Badge>
        <p
          className="mt-4 max-h-28 w-full max-w-[80ch] overflow-y-auto text-pretty pb-8 "
          style={{
            maskImage: "linear-gradient( black 50%, transparent)",
          }}
        >
          {overview}
        </p>
        <Link className="w-full md:w-[max-content]" href={mediaLink}>
          <Button className="my-4 w-full">View more details</Button>
        </Link>
      </div>
    </div>
  );
}
