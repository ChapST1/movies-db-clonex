import type {Person, PersonMovieCredits} from "@/types";

import {Title} from "@/components/ui/title";
import {MediaContainer} from "@/components/ui/media-container";
import {MovieItem} from "@/components/movie/movie-item";
import {getPersonMovieCredits} from "@/lib/services/person/get-person-movie-credits";
import {MediaGrid} from "@/components/media-grid";

export async function PersonContentMovies({id}: {id: Person["id"]}) {
  const {cast} = (await getPersonMovieCredits({id})) as PersonMovieCredits;

  return (
    <div>
      <Title>Movies</Title>
      <MediaContainer mediaLength={cast.length}>
        <MediaGrid>
          {cast.map((item) => {
            const {id} = item;

            return <MovieItem key={id} movie={item} />;
          })}
        </MediaGrid>
      </MediaContainer>
    </div>
  );
}
