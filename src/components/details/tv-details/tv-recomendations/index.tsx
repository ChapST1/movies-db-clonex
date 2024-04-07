import type {ServiceResponse, Movie, Recommendations, Tv} from "@/types";

import {MediaContainer} from "@/components/ui/media-container";
import {MediaGrid} from "@/components/media-grid";
import {MovieItem} from "@/components/movie/movie-item";
import {TvItem} from "@/components/tv/tv-item";
import {getTvRecomendations} from "@/lib/services/tv/get-tv-recomendations";
import {Title} from "@/components/ui/title";

export async function TvRecomendations({id}: {id: Tv["id"]}) {
  const {results} = (await getTvRecomendations(id)) as ServiceResponse<Recommendations>;

  if (results.length === 0) return null;

  return (
    <>
      <Title>Recomendations</Title>
      <MediaContainer mediaLength={results.length}>
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
    </>
  );
}
