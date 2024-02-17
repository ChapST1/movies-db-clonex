import type {DbResponse, Movie} from "@/types";

import {MoviesGrid} from "@/components/movie/movies-grid";
import {searchMovies} from "@/lib/services/search-movies";
import {Title} from "@/components/ui/title";
import {SearchMovie} from "@/components/search-movie";

async function SearchPage({searchParams: {q}}: {searchParams: {q: string}}) {
  const {results} = (await searchMovies({query: q})) as DbResponse<Movie>;

  return (
    <section>
      <SearchMovie />
      <Title className="static text-center">Results for {q}</Title>
      <MoviesGrid movies={results} />
    </section>
  );
}

export default SearchPage;
