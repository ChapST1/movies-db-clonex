import type {Movie, MovieImages} from "@/types";

import {getMovieImages} from "@/lib/services/get-movie-images";
import {generateFullPath} from "@/lib/create-full-path";
import {MediaContainer} from "@/components/ui/media-container";
import {Title} from "@/components/ui/title";

import {MovieImagesGrid} from "./movie-images-grid";

export async function MovieImages({id}: {id: Movie["id"]}) {
  const {backdrops, posters} = (await getMovieImages(id)) as MovieImages;

  return (
    <section>
      <article>
        <Title className="my-5 text-2xl backdrop-blur-sm">Top Backdrops</Title>
        <MediaContainer mediaLength={backdrops.length}>
          <MovieImagesGrid>
            {backdrops.map(({file_path}, index) => {
              const image = generateFullPath({backdrop: {path: file_path, size: "w300"}});

              return (
                <picture key={file_path + index}>
                  <img alt={file_path} className="w-full rounded-md" loading="lazy" src={image} />
                </picture>
              );
            })}
          </MovieImagesGrid>
        </MediaContainer>
      </article>

      <article>
        <Title className="my-5 text-2xl backdrop-blur-sm">Top Posters</Title>
        <MediaContainer mediaLength={posters.length}>
          <MovieImagesGrid>
            {posters.map(({file_path}, index) => {
              const image = generateFullPath({poster: {path: file_path, size: "w500"}});

              return (
                <picture key={file_path + index}>
                  <img alt={file_path} className="w-full rounded-md" loading="lazy" src={image} />
                </picture>
              );
            })}
          </MovieImagesGrid>
        </MediaContainer>
      </article>
    </section>
  );
}
