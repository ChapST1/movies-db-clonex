import type {TvDetails} from "@/types";

import {generateFullPath} from "@/lib/create-full-path";
import {
  MediaDetailsHero,
  MediaDetailsHeroContent,
  MediaDetailsHeroContentFooter,
  MediaDetailsHeroContentGendersContainer,
  MediaDetailsHeroContentHeader,
  MediaDetailsHeroContentHeaderTitle,
  MediaDetailsHeroContentOverview,
  MediaDetailsHeroPicture,
} from "@/components/media-details";
import {Badge} from "@/components/ui/badge";
import {MediaButton} from "@/components/media-button";
import {MediaBookmark} from "@/components/media-bookmark";
import {Button} from "@/components/ui/button";

export function TvDetailHero({tvDetail}: {tvDetail: TvDetails}) {
  const {backdrop_path, poster_path, name, overview, genres, adult, first_air_date, status, id} =
    tvDetail;

  const backdropPath = generateFullPath({backdrop: {path: backdrop_path, size: "w1280"}});
  const posterPath = generateFullPath({poster: {path: poster_path, size: "w342"}});
  const year = new Date(first_air_date).getFullYear();

  return (
    <MediaDetailsHero heroImage={`${backdropPath}`}>
      <MediaDetailsHeroPicture posterPath={`${posterPath}`} title={name} />

      <MediaDetailsHeroContent>
        <MediaDetailsHeroContentHeader>
          <MediaDetailsHeroContentHeaderTitle className="flex items-center gap-2">
            {name}
            <span className="italic opacity-70"> {year}</span>
            <Badge>{status}</Badge>
          </MediaDetailsHeroContentHeaderTitle>
        </MediaDetailsHeroContentHeader>

        <MediaDetailsHeroContentGendersContainer>
          {genres.map((item) => (
            <Badge key={item.id}>{item.name}</Badge>
          ))}
        </MediaDetailsHeroContentGendersContainer>

        <MediaDetailsHeroContentOverview>{overview}</MediaDetailsHeroContentOverview>
        <MediaDetailsHeroContentFooter>
          <div className="flex gap-2">
            <MediaButton>{adult ? "+18" : ":)"}</MediaButton>
            <MediaBookmark className="flex items-center justify-center" mediaId={id} />
          </div>
          <Button className="w-full md:w-[max-content]">Watch triller</Button>
        </MediaDetailsHeroContentFooter>
      </MediaDetailsHeroContent>
    </MediaDetailsHero>
  );
}
