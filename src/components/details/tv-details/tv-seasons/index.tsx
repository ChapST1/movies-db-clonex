import type {TvDetails} from "@/types";

import Link from "next/link";
import clsx from "clsx";

import {MediaGrid} from "@/components/media-grid";
import {MediaContainer} from "@/components/ui/media-container";
import {Title} from "@/components/ui/title";
import {MediaPicture} from "@/components/ui/media/media-picture";
import {MediaPictureImage} from "@/components/ui/media/media-picture-image";
import {generateFullPath} from "@/lib/create-full-path";
import {MediaFooter} from "@/components/ui/media/media-footer";
import {MediaFooterName} from "@/components/ui/media/media-footer-name";

export function TvSeasons({info}: {info: TvDetails}) {
  const {seasons} = info;
  const seasonsContainerStyles = clsx({
    " grid-cols-2 md:grid-cols-4": seasons.length <= 4,
  });

  if (seasons.length === 0) return null;

  return (
    <>
      <Title>Seasons</Title>
      <MediaContainer mediaLength={seasons.length}>
        <MediaGrid className={seasonsContainerStyles}>
          {seasons.map((item) => {
            const {name, poster_path, id, season_number, episode_count} = item;

            const path = generateFullPath({
              poster: {
                path: poster_path,
                size: "w342",
              },
            });

            return (
              <article key={id}>
                <MediaPicture className="group">
                  <MediaPictureImage src={path} />
                  <div className="pointer-events-none absolute bottom-4 left-[50%] w-[90%] translate-x-[-50%] translate-y-2 rounded-[2px] bg-background/85 px-2 py-1 opacity-0 duration-300 *:text-xs *:font-bold group-hover:translate-y-0 group-hover:opacity-100 *:md:text-base">
                    <p>
                      Season: <span className="font-normal">{season_number}</span>
                    </p>
                    <p>
                      Episodes: <span className="font-normal">{episode_count}</span>
                    </p>
                  </div>
                </MediaPicture>
                <MediaFooter className="flex flex-col gap-3">
                  <MediaFooterName>{name}</MediaFooterName>
                </MediaFooter>
              </article>
            );
          })}
        </MediaGrid>
      </MediaContainer>
    </>
  );
}
