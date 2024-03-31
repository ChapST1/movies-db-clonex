import type {Tv, TvCast} from "@/types";

import Link from "next/link";

import {Title} from "@/components/ui/title";
import {generateFullPath} from "@/lib/create-full-path";
import {MediaContainer} from "@/components/ui/media-container";
import {getTvCast} from "@/lib/services/tv/get-tv-cast";

export async function TvCharacters({id}: {id: Tv["id"]}) {
  const movie = (await getTvCast(id)) as TvCast;
  const {cast} = movie;

  return (
    <div>
      <Title className="my-5 text-2xl">Top Billed Cast</Title>
      <MediaContainer mediaLength={cast?.length ?? 0}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {cast?.map((item) => {
            const {id, cast_id, profile_path, name} = item;
            const profilePath = profile_path ?? "";
            const image = generateFullPath({profile: {path: profilePath, size: "w185"}});

            return (
              <article key={cast_id} className="relative aspect-[185/278]">
                <Link href={`/people/${id}`}>
                  <picture className="block h-full overflow-hidden rounded-md">
                    <img
                      alt={image}
                      className="aspect-[0.7] h-full w-full object-cover"
                      loading="lazy"
                      src={image}
                    />
                  </picture>
                  <footer className="absolute bottom-4 left-[50%] w-[90%] translate-x-[-50%] rounded-md bg-background/75 p-2">
                    <p className="line-clamp-1" title={name}>
                      {name}
                    </p>
                  </footer>
                </Link>
              </article>
            );
          })}
        </div>
      </MediaContainer>
    </div>
  );
}
