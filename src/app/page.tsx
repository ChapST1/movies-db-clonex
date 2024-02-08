import type {DbResponse, MovieTrend} from "@/types";

import {Title} from "@/components/ui/title";
import {getTrendingMovies} from "@/lib/services/get-trending-movies";
import {MoviesGrid} from "@/components/movie/movies-grid";

export default async function HomePage() {
  const movies = (await getTrendingMovies({time: "day"})) as DbResponse<MovieTrend>;

  return (
    <section>
      <Title>Trending Movies</Title>
      <MoviesGrid movies={movies.results} />
    </section>
  );
}
