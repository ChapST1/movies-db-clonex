import type {Movie, Tv} from "@/types";

import {VideoIcon} from "@radix-ui/react-icons";
import Link from "next/link";

import {MediaBookmark} from "@/components/media-bookmark";
import {MediaButton} from "@/components/media-button";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {generateFullPath} from "@/lib/create-full-path";
import {formatDate} from "@/lib/format-date";

/**
 * https://github.com/microsoft/TypeScript/issues/25760#issuecomment-405931434
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export function TrendingMediaItem({
  media,
}: {
  media: WithOptional<Movie, "title" | "release_date"> & Tv;
}) {
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

  const poster = generateFullPath({poster: {path: poster_path, size: "w342"}});
  const backdrop = generateFullPath({backdrop: {path: backdrop_path, size: "w780"}});
  const newDate = formatDate(release_date ?? first_air_date);

  /* 🌝 */
  const mediaLink = title ? `/movies/${id}` : `/tv/${id}`;

  return (
    <div
      className="grid w-full min-w-full grid-cols-1 gap-3 py-3 md:grid-cols-[400px,1fr]"
      style={{
        backgroundImage: `linear-gradient(to top, hsl(var(--background)), 80%, rgba(0, 0, 255, 0.057)), url("${backdrop}")`,
        backgroundSize: "cover",
      }}
    >
      <picture className="flex items-center justify-center">
        <img alt={title ?? name} className="rounded-md" loading="lazy" src={poster} />
      </picture>
      <div className="pt-6">
        <h2 className="text-4xl">{title ?? name}</h2>
        <p className="w-full py-3 xl:w-[70ch]">{overview}</p>
        <time className="block text-sm">{newDate}</time>
        <Badge className="mt-4 scale-110">
          {original_language === "en" ? "English" : original_language}
        </Badge>

        <div className="relative flex items-center justify-start gap-2 pt-4">
          <MediaButton>
            <VideoIcon />
          </MediaButton>

          <MediaBookmark className="relative left-0 top-0" mediaId={id} />
        </div>

        <Link href={mediaLink}>
          <Button className="my-4">View more details</Button>
        </Link>
      </div>
    </div>
  );
}
