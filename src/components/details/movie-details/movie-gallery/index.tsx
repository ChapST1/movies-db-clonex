import type {Movie, MovieGallery} from "@/types";

import {generateFullPath} from "@/lib/create-full-path";
import {MediaContainer} from "@/components/ui/media-container";
import {Title} from "@/components/ui/title";
import {MediaGrid} from "@/components/media-grid";
import {getMovieGallery} from "@/lib/services/movie/get-movie-gallery";

export async function MovieGallery({id}: {id: Movie["id"]}) {
  const {backdrops, posters} = (await getMovieGallery(id)) as MovieGallery;

  if (backdrops.length === 0 || posters.length === 0) {
    return null;
  }

  return (
    <section>
      <article>
        <Title>Top Backdrops</Title>
        <MediaContainer mediaLength={backdrops.length}>
          <MediaGrid>
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
        <Title>Top Posters</Title>
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
