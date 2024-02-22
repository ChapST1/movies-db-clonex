import type {DbResponse, Movie, Person, Tv} from "@/types";

import clsx from "clsx";

import {Title} from "@/components/ui/title";
import {MovieItem} from "@/components/movie/movie-item";
import {PersonItem} from "@/components/person/person-item";
import {TvItem} from "@/components/tv/tv-item";
import {searchMultiMedia} from "@/lib/services/search-multi-media";

async function SearchPage({
  searchParams: {q, movie, tv, people},
}: {
  searchParams: {q: string; tv: string; movie: string; people: string};
}) {
  const {results} = (await searchMultiMedia({query: q})) as DbResponse<Movie | Tv | Person>;

  const containerStyles = clsx({
    "*:block": !tv && !movie && !people,
  });

  return (
    <section>
      <Title className="static text-center">Results for {q}</Title>
      <div
        className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 ${containerStyles}`}
      >
        {results.map((item) => {
          const {media_type} = item;

          return (
            <>
              {media_type === "movie" && (
                <MovieItem isFilter={{enable: Boolean(movie)}} movie={item as Movie} />
              )}

              {media_type === "tv" && <TvItem isFilter={{enable: Boolean(tv)}} tv={item as Tv} />}

              {media_type === "person" && (
                <PersonItem isFilter={{enable: Boolean(people)}} person={item as Person} />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}

export default SearchPage;
