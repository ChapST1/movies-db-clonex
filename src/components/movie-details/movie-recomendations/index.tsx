import type {DbResponse, Movie, Recomendations} from "@/types";

import {getMovieRecomendations} from "@/lib/services/get-movie-recomendations";
import {MediaContainer} from "@/components/ui/media-container";
import {MoviesGrid} from "@/components/movie/movies-grid";

export async function MovieRecomendations({id}: {id: Movie["id"]}) {
  const {results} = (await getMovieRecomendations(id)) as DbResponse<Recomendations>;

  return (
    <MediaContainer mediaLength={results.length}>
      <h2 className="my-5 py-3 text-2xl">Recomendations</h2>
      <MoviesGrid movies={results} />
    </MediaContainer>
  );
}
