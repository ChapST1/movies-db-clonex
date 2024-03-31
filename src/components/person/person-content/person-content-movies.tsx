import type {Movie, Person, PersonMovieCredits, Tv} from "@/types";

import {Title} from "@/components/ui/title";
import {MediaContainer} from "@/components/ui/media-container";
import {MovieItem} from "@/components/movie/movie-item";
import {getPersonMovieCredits} from "@/lib/services/person/get-person-movie-credits";
import {TvItem} from "@/components/tv/tv-item";

export async function PersonContentMovies({id}: {id: Person["id"]}) {
  const {cast} = (await getPersonMovieCredits({id})) as PersonMovieCredits;

  return (
    <div>
      <Title>Conocid@ por</Title>
      <MediaContainer mediaLength={cast.length}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-2">
          {cast.map((item) => {
            const {id, media_type} = item;

            if (media_type === "movie") {
              return <MovieItem key={id} movie={item as Movie} />;
            }

            if (media_type === "tv") {
              return <TvItem key={id} tv={item as Tv} />;
            }
          })}
        </div>
      </MediaContainer>
    </div>
  );
}
