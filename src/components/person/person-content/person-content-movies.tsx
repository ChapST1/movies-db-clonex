import type {Person, PersonMovieCredits} from "@/types";

import {getPersonMovieCredits} from "@/lib/services/get-person-movie-credits";
import {Title} from "@/components/ui/title";
import {MediaContainer} from "@/components/ui/media-container";
import {MovieItem} from "@/components/movie/movie-item";

export async function PersonContentMovies({id}: {id: Person["id"]}) {
  const {cast} = (await getPersonMovieCredits({id})) as PersonMovieCredits;

  return (
    <div>
      <Title>Conocid@ por</Title>
      <MediaContainer mediaLength={cast.length}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-2">
          {cast.map((item) => {
            const {id} = item;

            return <MovieItem key={id} movie={item} />;
          })}
        </div>
      </MediaContainer>
    </div>
  );
}
