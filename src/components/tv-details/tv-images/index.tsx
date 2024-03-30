import type {Tv, TvImages} from "@/types";

import {generateFullPath} from "@/lib/create-full-path";
import {MediaContainer} from "@/components/ui/media-container";
import {Title} from "@/components/ui/title";
import {MediaGrid} from "@/components/media-grid";
import {getTvImages} from "@/lib/services/get-tv-images";

export async function TvImages({id}: {id: Tv["id"]}) {
  const {backdrops, posters} = (await getTvImages(id)) as TvImages;

  return (
    <section>
      <article>
        <Title className="my-5 text-2xl">Top Backdrops</Title>
        <MediaContainer mediaLength={backdrops.length}>
          <MediaGrid className="grid-cols-2">
            {backdrops.map(({file_path, aspect_ratio}) => {
              const image = generateFullPath({backdrop: {path: file_path, size: "w300"}});

              return (
                <picture key={file_path} style={{aspectRatio: aspect_ratio}}>
                  <img
                    alt={file_path}
                    className="aspect-[1/0] w-full rounded-md"
                    loading="lazy"
                    src={image}
                  />
                </picture>
              );
            })}
          </MediaGrid>
        </MediaContainer>
      </article>

      <article>
        <Title className="my-5 text-2xl">Top Posters</Title>
        <MediaContainer mediaLength={posters.length}>
          <MediaGrid>
            {posters.map(({file_path, aspect_ratio}, index) => {
              const image = generateFullPath({poster: {path: file_path, size: "w500"}});

              return (
                <picture key={file_path + index} style={{aspectRatio: aspect_ratio}}>
                  <img
                    alt={file_path}
                    className="aspect-[1/0] w-full rounded-md"
                    loading="lazy"
                    src={image}
                  />
                </picture>
              );
            })}
          </MediaGrid>
        </MediaContainer>
      </article>
    </section>
  );
}
