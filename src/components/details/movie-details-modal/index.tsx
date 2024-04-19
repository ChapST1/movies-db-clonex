import type {Movie, MovieDetail} from "@/types";

import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {Suspense} from "react";

import {getMovieById} from "@/lib/services/movie/get-movie-by-id";
import {
  MediaDetailsHero,
  MediaDetailsHeroContent,
  MediaDetailsHeroContentFooter,
  MediaDetailsHeroContentGendersContainer,
  MediaDetailsHeroContentHeader,
  MediaDetailsHeroContentHeaderTitle,
  MediaDetailsHeroContentOverview,
  MediaDetailsPosterPicture,
  MediaDetailsPosterPictureImage,
} from "@/components/ui/media-details";
import {generateFullPath} from "@/lib/create-full-path";
import {Badge} from "@/components/ui/badge";
import {formatMediaRuntime} from "@/lib/format-media-runtime";
import {MediaBookmark} from "@/components/media-bookmark";
import {MediaButton} from "@/components/media-button";
import {Button} from "@/components/ui/button";
import {Error} from "@/components/error";
import {MovieCharacters} from "@/components/details/movie-details/movie-characters";
import {MovieGallery} from "@/components/details/movie-details/movie-gallery";
import {MovieRecomendations} from "@/components/details/movie-details/movie-recomendations";
import {MovieDetailSidebar} from "@/components/details/movie-details/movie-sidebar";
import {ModalContent, ModalContentGrid, ModalContentSidebar} from "@/components/ui/modal";

export async function MovieDetailModal({id}: {id: Movie["id"]}) {
  const movieInfo = (await getMovieById(id)) as MovieDetail;
  const {backdrop_path, poster_path, title, overview, genres, runtime, adult} = movieInfo;

  const imageBg = generateFullPath({backdrop: {path: backdrop_path, size: "w780"}});
  const posterImage = generateFullPath({
    poster: {
      path: poster_path,
      size: "w342",
    },
  });
  const mediaRuntime = formatMediaRuntime(runtime);

  return (
    <ModalContent>
      <MediaDetailsHero
        className="mt-0 grid gap-3 md:grid-cols-[300px,1fr] md:p-2"
        heroImage={`${imageBg}`}
      >
        <MediaDetailsPosterPicture>
          <MediaDetailsPosterPictureImage alt={title} src={`${posterImage}`} />
        </MediaDetailsPosterPicture>

        <MediaDetailsHeroContent>
          <MediaDetailsHeroContentHeader>
            <MediaDetailsHeroContentHeaderTitle>{title}</MediaDetailsHeroContentHeaderTitle>
            <span>{mediaRuntime}</span>
          </MediaDetailsHeroContentHeader>

          <MediaDetailsHeroContentGendersContainer>
            {genres.map((item) => (
              <Badge key={item.id} variant="secondary">
                {item.name}
              </Badge>
            ))}
          </MediaDetailsHeroContentGendersContainer>

          <MediaDetailsHeroContentOverview className="md:w-full">
            {overview}
          </MediaDetailsHeroContentOverview>

          <MediaDetailsHeroContentFooter>
            <div className="flex items-center justify-start gap-1">
              <MediaButton>{adult ? "+18" : ":)"}</MediaButton>
              <MediaBookmark mediaId={id} />
            </div>
            <Button className="w-max">Watch triller</Button>
          </MediaDetailsHeroContentFooter>
        </MediaDetailsHeroContent>
      </MediaDetailsHero>

      <ModalContentGrid>
        <div>
          <ErrorBoundary errorComponent={Error}>
            <MovieCharacters id={id} />
            <Suspense />
          </ErrorBoundary>

          <ErrorBoundary errorComponent={Error}>
            <Suspense>
              <MovieGallery id={id} />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary errorComponent={Error}>
            <Suspense>
              <MovieRecomendations id={id} />
            </Suspense>
          </ErrorBoundary>
        </div>

        <ModalContentSidebar>
          <MovieDetailSidebar info={movieInfo} />
        </ModalContentSidebar>
      </ModalContentGrid>
    </ModalContent>
  );
}
