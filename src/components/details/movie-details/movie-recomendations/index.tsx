import type {ServiceResponse, Movie, Recommendations} from "@/types";

import {getMovieRecomendations} from "@/lib/services/movie/get-movie-recomendations";
import {MediaContainer} from "@/components/ui/media-container";
import {MediaGrid} from "@/components/media-grid";
import {MovieItem} from "@/components/movie/movie-item";

export async function MovieRecomendations({id}: {id: Movie["id"]}) {
  const {results} = (await getMovieRecomendations(id)) as ServiceResponse<Recommendations>;

  if (results.length === 0) {
    return null;
  }

  return (
    <MediaContainer mediaLength={results.length}>
      <h2 className="my-5 py-3 text-sm md:text-xl">Recomendations</h2>
      <MediaGrid>
        {results.map((item) => {
          return <MovieItem key={item.id} movie={item} />;
        })}
      </MediaGrid>
    </MediaContainer>
  );
}
