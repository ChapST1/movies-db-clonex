import type {DbResponse, Movie, Recomendations, Tv} from "@/types";

import {MediaContainer} from "@/components/ui/media-container";
import {MediaGrid} from "@/components/media-grid";
import {MovieItem} from "@/components/movie/movie-item";
import {getTvRecomendations} from "@/lib/services/get-tv-recomendations";
import {TvItem} from "@/components/tv/tv-item";

export async function TvRecomendations({id}: {id: Tv["id"]}) {
  const {results} = (await getTvRecomendations(id)) as DbResponse<Recomendations>;

  return (
    <MediaContainer mediaLength={results.length}>
      <h2 className="my-5 py-3 text-2xl">Recomendations</h2>
      <MediaGrid>
        {results.map((item) => {
          if (item.media_type === "movie") {
            return <MovieItem key={item.id} movie={item as Movie} />;
          }

          if (item.media_type === "tv") {
            return <TvItem key={item.id} tv={item as unknown as Tv} />;
          }
        })}
      </MediaGrid>
    </MediaContainer>
  );
}
