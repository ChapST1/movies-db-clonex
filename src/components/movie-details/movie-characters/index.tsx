import type {Movie, MovieCast} from "@/types";

import {CornersIcon} from "@radix-ui/react-icons";
import Link from "next/link";

import {getMovieCast} from "@/lib/services/get-movie-cast";
import {Title} from "@/components/ui/title";
import {generateFullPath} from "@/lib/create-full-path";
import {MediaContainer} from "@/components/ui/media-container";
import {MediaButton} from "@/components/media-button";

export async function MovieCharacters({id}: {id: Movie["id"]}) {
  const movie = (await getMovieCast(id)) as MovieCast;
  const {cast} = movie;

  return (
    <div>
      <Title className="my-5 text-2xl">Top Billed Cast</Title>
      <MediaContainer mediaLength={cast.length}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {cast.map((item) => { // eslint-disable-line
            const {id, cast_id, profile_path, name} = item;
            const profilePath = profile_path ?? "";
            const image = generateFullPath({profile: {path: profilePath, size: "w185"}});

            return (
              <article key={cast_id} className="relative">
                <Link href={`/people/${id}`}>
                  <picture className="block h-full overflow-hidden rounded-md">
                    <img
                      alt={image}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      src={image}
                    />
                  </picture>
                  <footer className="absolute bottom-4 left-[50%] line-clamp-1 w-[90%]  translate-x-[-50%] rounded-md bg-background/75 p-2">
                    {name}
                  </footer>
                </Link>

                <MediaButton className="absolute right-2 top-2">
                  <CornersIcon />
                </MediaButton>
              </article>
            );
          })}
        </div>
      </MediaContainer>
    </div>
  );
}
