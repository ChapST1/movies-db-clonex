import type {Tv, TvDetails} from "@/types";

import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {Suspense} from "react";

import {ModalContent, ModalContentGrid, ModalContentSidebar} from "@/components/ui/modal";
import {getTvById} from "@/lib/services/tv/get-tv-by-id";
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
import {MediaButton} from "@/components/media-button";
import {generateFullPath} from "@/lib/create-full-path";
import {Badge} from "@/components/ui/badge";
import {MediaBookmark} from "@/components/media-bookmark";
import {Button} from "@/components/ui/button";
import {Error} from "@/components/error";
import {MoviesMediaSkeleton} from "@/components/skeletons/movies-media-skeleton";
import {MovieGridSkeleton} from "@/components/skeletons/movie-grid-skeleton";

import {TvCharacters} from "../tv-details/tv-characters";
import {TvGallery} from "../tv-details/tv-gallery";
import {TvSeasons} from "../tv-details/tv-seasons";
import {TvDetailSidebar} from "../tv-details/tv-sidebar";
import {TvRecomendations} from "../tv-details/tv-recomendations";

export async function TvDetailModal({id}: {id: Tv["id"]}) {
  const tvInfo = (await getTvById(id)) as TvDetails;
  const {backdrop_path, name, overview, poster_path, genres, adult} = tvInfo;
  const imageBg = generateFullPath({backdrop: {path: backdrop_path, size: "w780"}});
  const posterImage = generateFullPath({
    poster: {
      path: poster_path,
      size: "w342",
    },
  });

  return (
    <ModalContent>
      <MediaDetailsHero
        className="mt-0 grid gap-3 md:grid-cols-[300px,1fr] md:p-2"
        heroImage={`${imageBg}`}
      >
        <MediaDetailsPosterPicture>
          <MediaDetailsPosterPictureImage alt={name} src={`${posterImage}`} />
        </MediaDetailsPosterPicture>

        <MediaDetailsHeroContent>
          <MediaDetailsHeroContentHeader>
            <MediaDetailsHeroContentHeaderTitle>{name}</MediaDetailsHeroContentHeaderTitle>
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
            <Suspense fallback={<MoviesMediaSkeleton />}>
              <TvCharacters id={id} />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<MoviesMediaSkeleton />}>
              <TvGallery id={id} />
            </Suspense>
          </ErrorBoundary>

          <TvSeasons info={tvInfo} />

          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<MovieGridSkeleton />}>
              <TvRecomendations id={id} />
            </Suspense>
          </ErrorBoundary>
        </div>

        <ModalContentSidebar>
          <TvDetailSidebar info={tvInfo} />
        </ModalContentSidebar>
      </ModalContentGrid>
    </ModalContent>
  );
}
